// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoGenerationRequestInput extends $dara.Model {
  extra?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  images?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      images: 'Images',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      images: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
    };
  }

  validate() {
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
  channel?: string;
  goal?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      goal: 'Goal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      goal: 'string',
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
   * This parameter is required.
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  quality?: string;
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
   * This parameter is required.
   */
  input?: VideoGenerationRequestInput;
  intent?: VideoGenerationRequestIntent;
  /**
   * @remarks
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

