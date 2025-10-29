"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Building, Coffee, Flame, Globe, GraduationCap, Mail, MessageCircle, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Coffee Co"
          button={{
            text: "Order Now",
            href: "https://order.coffeecompany.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Coffee Experience"
          description="Discover the perfect blend of tradition and innovation with our carefully sourced, expertly roasted coffee beans"
          tag="Since 1985"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Shop Coffee",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/4820657/pexels-photo-4820657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh coffee beans and brewing equipment"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Our Coffee"
          description="From bean to cup, we ensure every step delivers exceptional quality and taste"
          tag="Quality Promise"
          tagIcon={Award}
          features={[
            {
              title: "Premium Sourcing",
              description: "Direct relationships with coffee farmers worldwide ensure the highest quality beans and fair trade practices",
              icon: Globe
            },
            {
              title: "Expert Roasting",
              description: "Our master roasters craft each batch to perfection, bringing out unique flavor profiles in every bean",
              icon: Flame
            },
            {
              title: "Brewing Education",
              description: "Learn the art of coffee making with our guides, classes, and brewing equipment recommendations",
              icon: GraduationCap
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Coffee Collection"
          description="Explore our signature blends and single-origin coffees"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Coffee Co",
              name: "Signature Arabica Blend",
              price: "$24.99",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Premium arabica coffee blend"
            },
            {
              id: "2",
              brand: "Coffee Co",
              name: "Dark Espresso Roast",
              price: "$28.99",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Dark espresso roast coffee beans"
            },
            {
              id: "3",
              brand: "Coffee Co",
              name: "French Roast Classic",
              price: "$26.99",
              rating: 4,
              reviewCount: "1.5k",
              imageSrc: "https://images.pexels.com/photos/669162/pexels-photo-669162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "French roast coffee beans"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Coffee Lovers Say"
          description="Real feedback from our community of coffee enthusiasts"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahcoffee",
              testimonial: "The best coffee I've ever tasted! The aroma alone makes my morning perfect. Absolutely love the quality and consistency.",
              imageSrc: "https://images.pexels.com/photos/33409064/pexels-photo-33409064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah"
            },
            {
              id: "2",
              name: "Mike",
              handle: "@mikesbrews",
              testimonial: "As a coffee enthusiast, I'm incredibly picky about my beans. This company delivers exceptional quality every single time.",
              imageSrc: "https://images.pexels.com/photos/4559601/pexels-photo-4559601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Mike"
            },
            {
              id: "3",
              name: "Emma",
              handle: "@emmabarista",
              testimonial: "Professional barista here - these beans make the perfect espresso. My customers always ask what coffee I'm using!",
              imageSrc: "https://images.pexels.com/photos/6205605/pexels-photo-6205605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma"
            },
            {
              id: "4",
              name: "David",
              handle: "@davidcafe",
              testimonial: "The subscription service is amazing. Fresh coffee delivered right to my door every month. Never running out again!",
              imageSrc: "https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Trusted by Leading Coffee Shops"
          description="Join thousands of cafes and coffee shops worldwide"
          tag="Partners"
          tagIcon={Building}
          logos={[
            "https://images.pexels.com/photos/16218527/pexels-photo-16218527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/30023630/pexels-photo-30023630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4820659/pexels-photo-4820659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our coffee"
          faqs={[
            {
              id: "1",
              title: "How do you source your coffee beans?",
              content: "We work directly with coffee farmers and cooperatives worldwide to ensure fair trade practices and the highest quality beans. Our sourcing team visits farms regularly to maintain relationships and quality standards."
            },
            {
              id: "2",
              title: "What's the best way to store coffee beans?",
              content: "Store coffee beans in an airtight container away from light, heat, and moisture. For optimal freshness, keep them at room temperature and use within 2-3 weeks of the roast date."
            },
            {
              id: "3",
              title: "Do you offer subscription services?",
              content: "Yes! Our subscription service delivers fresh coffee to your door monthly, bi-weekly, or weekly. You can customize your preferences and pause or cancel anytime."
            },
            {
              id: "4",
              title: "How fresh is your coffee?",
              content: "We roast coffee in small batches multiple times per week. All orders are shipped within 24-48 hours of roasting to ensure maximum freshness and flavor."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Caffeinated with Updates"
          description="Get the latest coffee news, brewing tips, and exclusive offers delivered to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our weekly coffee newsletter. Unsubscribe anytime."
          imageSrc="https://images.pexels.com/photos/4349787/pexels-photo-4349787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee brewing equipment and setup"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Coffee Blends",
                  href: "products"
                },
                {
                  label: "Single Origin",
                  href: "single-origin"
                },
                {
                  label: "Brewing Equipment",
                  href: "equipment"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "story"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Brewing Guide",
                  href: "brewing-guide"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Coffee Co"
        />
      </div>
    </ThemeProvider>
  );
}