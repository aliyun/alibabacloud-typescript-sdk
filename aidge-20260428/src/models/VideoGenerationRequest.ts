// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoGenerationRequestInputAssetBindings extends $dara.Model {
  /**
   * @remarks
   * The asset index.
   * 
   * @example
   * 0
   */
  assetIndex?: number;
  /**
   * @remarks
   * The asset description.
   * 
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * The asset usage.
   * 
   * @example
   * -
   */
  slot?: string;
  static names(): { [key: string]: string } {
    return {
      assetIndex: 'AssetIndex',
      description: 'Description',
      slot: 'Slot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetIndex: 'number',
      description: 'string',
      slot: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoGenerationRequestInput extends $dara.Model {
  /**
   * @remarks
   * The asset binding list.
   */
  assetBindings?: VideoGenerationRequestInputAssetBindings[];
  /**
   * @remarks
   * The extended information.
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * The list of product image URLs (1 to 6 images). The URLs must be publicly accessible.
   * 
   * This parameter is required.
   */
  images?: string[];
  /**
   * @remarks
   * The product title. A maximum of the first 60 characters are used.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026 New Slimming Women\\"s Summer Dress with Mid-Length Design, High-Quality Waist Definition for a Slender Look
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      assetBindings: 'AssetBindings',
      extra: 'Extra',
      images: 'Images',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetBindings: { 'type': 'array', 'itemType': VideoGenerationRequestInputAssetBindings },
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      images: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetBindings)) {
      $dara.Model.validateArray(this.assetBindings);
    }
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoGenerationRequestIntent extends $dara.Model {
  /**
   * @remarks
   * The distribution channel.
   * 
   * @example
   * -
   */
  channel?: string;
  /**
   * @remarks
   * The business goal. Valid values:
   * 
   * camera_motion: Camera movement mode. Generates video based on fixed 360° camera movement logic.
   * 
   * scripted_video: Scripted mode. Provides a script or prompt, and the system generates video based on the script.
   * 
   * auto_video: Unscripted mode. No script is provided. The system automatically plans the script and then generates the video.
   * 
   * @example
   * auto_video
   */
  goal?: string;
  /**
   * @remarks
   * The script or prompt.
   * 
   * @example
   * 【2. Shot Breakdown】  
   * [0-1s]【Eye-level close-up, static camera】Summer commute trousers folded on a clean tabletop; one corner is quickly unfolded to reveal the solid-color fabric and crisp crease line. The frame focuses on the trouser leg\\"s surface smoothness and sharp appearance. [BGM/SFX: Upbeat, crisp commute-vibe background music begins]
   * 
   * [1-2s]【Low-angle mid-shot, static camera】The full pair of trousers hangs freely in the air with a slight swing, showcasing the natural drape of the lightweight fabric and the complete straight-leg silhouette, then returns to a still, hanging state.
   * 
   * [2-3s]【Eye-level mid-shot, static camera】A commute-styled model stands in a fitting area, holding the folded trousers at waist level with both hands, performing one up-and-down sizing gesture before holding them steady, displaying the overall proportions of the trousers in their folded state and the expected fit. [[Voiceover]: Who says wearing trousers in summer has to be stuffy? Most likely you just haven\\"t picked the right pair.]
   * 
   * [3-5s]【Eye-level full shot, slight pullback】The commute-styled model, now wearing the trousers paired with a clean commute top, takes two steps forward in a modern office building corridor, dynamically showcasing the front straight-leg silhouette, trouser leg lines, and commute outfit coordination.
   * 
   * [5-7s]【Low-angle mid-shot, static camera】The commute-styled model shifts to an angled side stance, one hand in the front pocket and the other in the back pocket, displaying the cut from waist and hip down to the knee, the solid-color surface, and the clean lateral lines.
   * 
   * [7-9s]【Eye-level mid-shot, static camera】The commute-styled model lifts one foot onto a low step, one hand brushes down the lower-leg trouser fabric and lightly lifts the hem, briefly exposing the ankle, showcasing the hem edge, side-seam details, and the wearing state during movement. [[Voiceover]: These ice-skin trousers are lightweight and breathable, solid-color straight-leg — looking sharp and at ease even when walking around at work.]
   * 
   * [9-11s]【Overhead close-up, static camera】The lens focuses closely on the waistband area; the commute-styled model presses both hands along the waistband contour and smooths it, then pauses to display the seams and actual wearing state, clearly presenting the waistband shape and structural details.
   * 
   * [11-13s]【Eye-level close-up, static camera】The commute-styled model gently lifts the fabric on both sides of the thigh with both hands, then raises one knee with a slight lateral turn before returning to a natural stance, demonstrating the actual range of motion during knee-lift and side-turn, as well as how the straight-leg trouser recovers after the foot lands.
   * 
   * [13-15s]【Eye-level close-up, static camera】The commute-styled model enters the frame from the rear side, places one hand in the back pocket, then lightly traces along the back pocket edge and rear waist seam, showcasing the back pocket contour, pocket opening edge, and rear waist seam details up close. [[Voiceover]: If you\\"re always on the move, there\\"s room for knee lifts and side turns — commuting just got easier.]
   * 
   * [15-17s]【Eye-level mid-shot, static camera】The commute-styled model faces away to display the rear silhouette of the trousers, hands naturally in pockets with a slight weight shift, then turns slightly to an angled side view so both the rear and lateral trouser lines are visible, fully presenting the rear cut and the overall line from hip and thigh down to the hem.
   * 
   * [17-19s]【Eye-level full shot, smooth follow】The commute-styled model first walks sideways to the right, then transitions into a forward stride to complete the full presentation, finishing in the modern office building corridor in full commute attire, clearly showing the front straight-leg silhouette, clean lines, and overall fit. [[Voiceover]: If you like this fit, go check out the details.]
   * 
   * 【3. Negative/Constraint Instructions】  
   * The entire video centers on the summer commute trousers; no unrelated products or multi-person interactions are allowed.
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      goal: 'Goal',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      goal: 'string',
      script: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoGenerationRequestOutput extends $dara.Model {
  /**
   * @remarks
   * The video duration in seconds. Currently supports integers between 5 and 15. More options will be available in the future.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  duration?: number;
  /**
   * @remarks
   * The output resolution.
   * 
   * This parameter is required.
   * 
   * @example
   * 1080p
   */
  quality?: string;
  /**
   * @remarks
   * The video aspect ratio.
   * 
   * @example
   * 9:16
   */
  ratio?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      quality: 'Quality',
      ratio: 'Ratio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      quality: 'string',
      ratio: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoGenerationRequest extends $dara.Model {
  /**
   * @remarks
   * The product input.
   * 
   * This parameter is required.
   */
  input?: VideoGenerationRequestInput;
  /**
   * @remarks
   * The intent parameters. Currently unavailable.
   */
  intent?: VideoGenerationRequestIntent;
  /**
   * @remarks
   * The output parameters.
   * 
   * This parameter is required.
   */
  output?: VideoGenerationRequestOutput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      intent: 'Intent',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: VideoGenerationRequestInput,
      intent: VideoGenerationRequestIntent,
      output: VideoGenerationRequestOutput,
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.intent && typeof (this.intent as any).validate === 'function') {
      (this.intent as any).validate();
    }
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

