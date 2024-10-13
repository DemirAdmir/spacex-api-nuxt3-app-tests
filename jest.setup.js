import { config } from "@vue/test-utils";
import Vue from "vue";

// Make sure Vue is globally available in tests
config.global.plugins = [Vue];
