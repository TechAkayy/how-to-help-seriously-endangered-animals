<page> title: Home </page>

<template>
  <main
    class="font-sans bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100"
  >
    <!-- Hero -->
    <section class="relative min-h-[70vh] sm:min-h-[80vh] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1692339435997-286ac7409c61?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDN8fHRpZ2VyJTIwZm9yZXN0fGVufDB8fHx8MTc2MzI4MjM3MXww&ixlib=rb-4.1.0q=85&fm=jpg&crop=faces&cs=srgb&w=1200&h=800&fit=crop"
        alt="Tiger in a forest"
        class="absolute inset-0 z-0 w-full h-full object-cover object-center"
      />
      <div
        class="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 pointer-events-none"
      ></div>
      <div class="absolute top-4 right-4 z-20">
        <DarkModeSwitch />
      </div>
      <div class="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <span
          class="inline-block rounded-full bg-emerald-600/90 text-white px-3 py-1 text-xs sm:text-sm"
          >Awareness App</span
        >
        <h1 class="mt-4 text-4xl sm:text-6xl font-extrabold text-white">
          How To Help Seriously Endangered Animals
        </h1>
        <p class="mt-4 sm:mt-6 max-w-3xl text-white/90 sm:text-lg">
          Learn, play, and take action to protect wildlife. Kids and families
          can explore facts, discover heroes in the animal world, and find fun
          ways to help right now.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="#animals"
            class="inline-flex items-center justify-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold transition"
            >Explore Animals</RouterLink
          >
          <RouterLink
            to="/activities"
            class="inline-flex items-center justify-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 font-semibold transition"
            >Play & Learn</RouterLink
          >
        </div>
        <p class="mt-3 text-xs sm:text-sm text-white/80">
          Sunshine through the pines reminds us: every small action lets life
          shine brighter.
        </p>
        <span class="sr-only">Background: a tiger in a forest</span>
      </div>
    </section>
    <!-- Why animals are important -->
    <section id="why" class="py-12 sm:py-16 bg-emerald-50 dark:bg-slate-900">
      <div class="max-w-6xl mx-auto px-4">
        <h2
          class="text-3xl sm:text-4xl font-bold text-emerald-700 dark:text-emerald-300"
        >
          Why animals are important
        </h2>
        <p class="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Animals keep nature in balance, grow healthy forests, clean our air
          and water, and inspire inventions and stories. When we protect them,
          we protect ourselves.
        </p>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-emerald-200/60 dark:border-emerald-900/40 p-5 shadow"
          >
            <div class="text-emerald-600 text-2xl">🌲</div>
            <h3 class="mt-2 font-bold text-slate-800 dark:text-slate-100">
              Healthy Forests
            </h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Tigers and other predators keep deer populations balanced so young
              trees can grow.
            </p>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-sky-200/60 dark:border-sky-900/40 p-5 shadow"
          >
            <div class="text-sky-600 text-2xl">💧</div>
            <h3 class="mt-2 font-bold text-slate-800 dark:text-slate-100">
              Clean Water
            </h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Wetland animals like turtles help keep rivers and coasts healthy.
            </p>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-amber-200/60 dark:border-amber-900/40 p-5 shadow"
          >
            <div class="text-amber-600 text-2xl">🍎</div>
            <h3 class="mt-2 font-bold text-slate-800 dark:text-slate-100">
              Food & Farms
            </h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Bees, bats, and birds pollinate crops that feed people around the
              world.
            </p>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-violet-200/60 dark:border-violet-900/40 p-5 shadow"
          >
            <div class="text-violet-600 text-2xl">💡</div>
            <h3 class="mt-2 font-bold text-slate-800 dark:text-slate-100">
              Inspiration
            </h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Wildlife inspires art, science, and technology—like fast trains
              shaped by birds!
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Featured animals -->
    <section id="animals" class="py-12 sm:py-16 bg-white dark:bg-slate-950">
      <div class="max-w-6xl mx-auto px-4">
        <h2
          class="text-3xl sm:text-4xl font-bold text-sky-700 dark:text-sky-300"
        >
          Meet these endangered animals
        </h2>
        <p class="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Learn quick facts and simple ways to help. Tap an animal to explore
          more activities, photos, and stories.
        </p>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Tiger -->
          <div
            class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-emerald-50 dark:bg-slate-900"
          >
            <div class="p-5">
              <div class="flex items-center gap-3">
                <div class="text-3xl">🐯</div>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Tiger
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Fewer than 5,000 remain in the wild. Protecting forests protects
                tigers and people.
              </p>
              <ul
                class="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5"
              >
                <li>
                  Habitat: Asian forests (including pine forests in the north)
                </li>
                <li>Helps by: balancing herbivores so forests can regrow</li>
              </ul>
              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  class="inline-flex items-center rounded-full bg-emerald-200 text-emerald-900 px-2 py-1 text-xs"
                  >Forest Hero</span
                ><span
                  class="inline-flex items-center rounded-full bg-sky-200 text-sky-900 px-2 py-1 text-xs"
                  >Needs Big Space</span
                >
              </div>
              <div class="mt-5">
                <RouterLink
                  to="/animals/tiger"
                  class="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold"
                  >Learn more</RouterLink
                >
              </div>
            </div>
          </div>
          <!-- Elephant -->
          <div
            class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-amber-50 dark:bg-slate-900"
          >
            <div class="p-5">
              <div class="flex items-center gap-3">
                <div class="text-3xl">🐘</div>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Elephant
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Forest and savanna gardeners—elephants plant seeds and open
                paths for many species.
              </p>
              <ul
                class="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5"
              >
                <li>Habitat: Africa & Asia</li>
                <li>Threats: habitat loss and poaching</li>
              </ul>
              <div class="mt-5">
                <RouterLink
                  to="/animals/elephant"
                  class="inline-flex items-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm font-semibold"
                  >Learn more</RouterLink
                >
              </div>
            </div>
          </div>
          <!-- Gorilla -->
          <div
            class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-violet-50 dark:bg-slate-900"
          >
            <div class="p-5">
              <div class="flex items-center gap-3">
                <div class="text-3xl">🦍</div>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Gorilla
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Gentle giants that spread seeds and grow new forests for
                everyone.
              </p>
              <ul
                class="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5"
              >
                <li>Habitat: Central Africa</li>
                <li>Threats: disease and habitat loss</li>
              </ul>
              <div class="mt-5">
                <RouterLink
                  to="/animals/gorilla"
                  class="inline-flex items-center rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 text-sm font-semibold"
                  >Learn more</RouterLink
                >
              </div>
            </div>
          </div>
          <!-- Sea Turtle -->
          <div
            class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-sky-50 dark:bg-slate-900"
          >
            <div class="p-5">
              <div class="flex items-center gap-3">
                <div class="text-3xl">🐢</div>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Sea Turtle
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Ocean cleaners that keep seagrass meadows healthy for fish and
                people.
              </p>
              <ul
                class="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5"
              >
                <li>Habitat: Tropical & temperate oceans</li>
                <li>Threats: plastic, bycatch, climate change</li>
              </ul>
              <div class="mt-5">
                <RouterLink
                  to="/animals/sea-turtle"
                  class="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-semibold"
                  >Learn more</RouterLink
                >
              </div>
            </div>
          </div>
          <!-- Rhino -->
          <div
            class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-900"
          >
            <div class="p-5">
              <div class="flex items-center gap-3">
                <div class="text-3xl">🦏</div>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Rhino
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Grassland shapers who create paths and homes for birds and
                insects.
              </p>
              <ul
                class="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5"
              >
                <li>Habitat: Africa & Asia</li>
                <li>Threats: poaching & habitat loss</li>
              </ul>
              <div class="mt-5">
                <RouterLink
                  to="/animals/rhino"
                  class="inline-flex items-center rounded-lg bg-stone-700 hover:bg-stone-800 text-white px-4 py-2 text-sm font-semibold"
                  >Learn more</RouterLink
                >
              </div>
            </div>
          </div>
          <!-- Polar Bear -->
          <div
            class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-cyan-50 dark:bg-slate-900"
          >
            <div class="p-5">
              <div class="flex items-center gap-3">
                <div class="text-3xl">🐻‍❄️</div>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Polar Bear
                </h3>
              </div>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
                A symbol of the Arctic—sea ice is their home and highway.
              </p>
              <ul
                class="mt-3 text-sm text-slate-700 dark:text-slate-300 list-disc pl-5"
              >
                <li>Habitat: Arctic</li>
                <li>Threats: melting sea ice</li>
              </ul>
              <div class="mt-5">
                <RouterLink
                  to="/animals/polar-bear"
                  class="inline-flex items-center rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 text-sm font-semibold"
                  >Learn more</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/facts"
            class="inline-flex items-center rounded-lg bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 text-sm font-semibold"
            >More facts</RouterLink
          >
          <RouterLink
            to="/care"
            class="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold"
            >How to help</RouterLink
          >
        </div>
      </div>
    </section>
    <!-- How you can help -->
    <section id="help" class="py-12 sm:py-16 bg-sky-50 dark:bg-slate-900">
      <div class="max-w-6xl mx-auto px-4">
        <h2
          class="text-3xl sm:text-4xl font-bold text-sky-700 dark:text-sky-300"
        >
          How you can help today
        </h2>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-sky-200/60 dark:border-sky-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              Be a Habitat Hero
            </h3>
            <ul
              class="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300"
            >
              <li>Plant native trees and flowers</li>
              <li>Keep rivers and parks clean</li>
              <li>Never litter—pick up 3 pieces of trash</li>
            </ul>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-emerald-200/60 dark:border-emerald-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              Shop & Share Wisely
            </h3>
            <ul
              class="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300"
            >
              <li>Say no to products from wild animals</li>
              <li>Choose eco‑friendly and recycled items</li>
              <li>Support certified, animal‑safe tourism</li>
            </ul>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-amber-200/60 dark:border-amber-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              Be a Voice
            </h3>
            <ul
              class="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300"
            >
              <li>Share facts with friends and family</li>
              <li>Join local clean‑ups and tree plantings</li>
              <li>Support rescue centers and parks</li>
            </ul>
          </div>
        </div>
        <div class="mt-8">
          <RouterLink
            to="/care"
            class="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 font-semibold"
            >See all care tips</RouterLink
          >
        </div>
      </div>
    </section>
    <!-- Care section -->
    <section id="care" class="py-12 sm:py-16 bg-amber-50 dark:bg-slate-900">
      <div class="max-w-6xl mx-auto px-4">
        <h2
          class="text-3xl sm:text-4xl font-bold text-amber-700 dark:text-amber-300"
        >
          How to take care of animals
        </h2>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-amber-200/60 dark:border-amber-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              At Home
            </h3>
            <ul
              class="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300"
            >
              <li>Turn off lights to help migrating birds</li>
              <li>Use less plastic—bring a reusable bottle</li>
              <li>Save energy and water every day</li>
            </ul>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-emerald-200/60 dark:border-emerald-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              At School
            </h3>
            <ul
              class="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300"
            >
              <li>Start a wildlife club or a tree‑planting day</li>
              <li>Make posters with animal facts</li>
              <li>Invite local experts to speak</li>
            </ul>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-sky-200/60 dark:border-sky-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              Outside
            </h3>
            <ul
              class="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300"
            >
              <li>Observe wildlife from a safe distance</li>
              <li>Stay on trails—leave no trace</li>
              <li>Report injured animals to local rescues</li>
            </ul>
          </div>
        </div>
        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/care"
            class="inline-flex items-center rounded-lg bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 font-semibold"
            >More care guides</RouterLink
          >
          <RouterLink
            to="/get-involved"
            class="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 font-semibold"
            >Get involved</RouterLink
          >
        </div>
      </div>
    </section>
    <!-- Fun & Learning -->
    <section id="fun" class="py-12 sm:py-16 bg-violet-50 dark:bg-slate-900">
      <div class="max-w-6xl mx-auto px-4">
        <h2
          class="text-3xl sm:text-4xl font-bold text-violet-700 dark:text-violet-300"
        >
          Fun & Learning
        </h2>
        <p class="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          Play games, try challenges, and collect badges while learning how to
          protect wildlife.
        </p>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-violet-200/60 dark:border-violet-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              Activities
            </h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              DIY bird feeders, backyard safaris, and mini‑science experiments.
            </p>
            <div class="mt-4">
              <RouterLink
                to="/activities"
                class="inline-flex items-center rounded-lg bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 text-sm font-semibold"
                >Try activities</RouterLink
              >
            </div>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-sky-200/60 dark:border-sky-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">Games</h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Memory match, animal sound quizzes, and habitat puzzles.
            </p>
            <div class="mt-4">
              <RouterLink
                to="/games"
                class="inline-flex items-center rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-sm font-semibold"
                >Play now</RouterLink
              >
            </div>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-slate-950 border border-emerald-200/60 dark:border-emerald-900/40 p-5"
          >
            <h3 class="font-bold text-slate-800 dark:text-slate-100">
              Quick Facts
            </h3>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Explore surprising facts about wildlife and the planet.
            </p>
            <div class="mt-4">
              <RouterLink
                to="/facts"
                class="inline-flex items-center rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold"
                >Read facts</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Closing CTA -->
    <section class="py-12 sm:py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div
          class="rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-6 py-8 sm:px-10 sm:py-10 text-white"
        >
          <h2 class="text-2xl sm:text-3xl font-bold">
            Be a Wildlife Protector
          </h2>
          <p class="mt-2 text-white/90">
            Take the friendly pledge and choose one action to do this week.
          </p>
          <div class="mt-6">
            <RouterLink
              to="/pledge"
              class="inline-flex items-center rounded-lg bg-white text-emerald-700 hover:text-emerald-800 px-5 py-3 font-semibold"
              >Take the pledge</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
