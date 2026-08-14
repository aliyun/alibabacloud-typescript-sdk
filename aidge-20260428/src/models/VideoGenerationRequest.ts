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
   * The natural language description of the asset.
   */
  description?: string;
  /**
   * @remarks
   * Valid values:
   * - look_reference: appearance reference.
   * - scene_reference: scene reference.
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
   * Specifies the purpose and description of images by asset index.
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
   * The business goal.
   * 
   * @example
   * -
   */
  goal?: string;
  /**
   * @remarks
   * Required when goal is set to scripted_video.
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

