// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProjectTaskRequestFramesLayersMaterialMask extends $dara.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesLayersMaterial extends $dara.Model {
  anchorStyleLevel?: string;
  /**
   * @example
   * video/mp4
   */
  format?: string;
  /**
   * @example
   * 38863
   */
  id?: string;
  mask?: SubmitProjectTaskRequestFramesLayersMaterialMask;
  speed?: string;
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  url?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      anchorStyleLevel: 'anchorStyleLevel',
      format: 'format',
      id: 'id',
      mask: 'mask',
      speed: 'speed',
      url: 'url',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorStyleLevel: 'string',
      format: 'string',
      id: 'string',
      mask: SubmitProjectTaskRequestFramesLayersMaterialMask,
      speed: 'string',
      url: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(this.mask && typeof (this.mask as any).validate === 'function') {
      (this.mask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesLayers extends $dara.Model {
  /**
   * @example
   * 222
   */
  height?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  material?: SubmitProjectTaskRequestFramesLayersMaterial;
  /**
   * @example
   * 11
   */
  positionX?: number;
  /**
   * @example
   * 22
   */
  positionY?: number;
  /**
   * @example
   * ANCHOR
   */
  type?: string;
  /**
   * @example
   * 111
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      index: 'index',
      material: 'material',
      positionX: 'positionX',
      positionY: 'positionY',
      type: 'type',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      index: 'number',
      material: SubmitProjectTaskRequestFramesLayersMaterial,
      positionX: 'number',
      positionY: 'number',
      type: 'string',
      width: 'number',
    };
  }

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesSubtitle extends $dara.Model {
  /**
   * @example
   * BottomLeft
   */
  alignment?: string;
  /**
   * @example
   * #ffffff
   */
  backgroundColor?: string;
  /**
   * @example
   * SimSun
   */
  font?: string;
  /**
   * @example
   * #ffffff
   */
  fontColor?: string;
  /**
   * @example
   * 32
   */
  fontSize?: number;
  /**
   * @example
   * 11
   */
  maxCharLength?: number;
  /**
   * @example
   * 2
   */
  positionX?: number;
  /**
   * @example
   * 1
   */
  positionY?: number;
  /**
   * @example
   * 22
   */
  textHeight?: number;
  /**
   * @example
   * 11
   */
  textWidth?: number;
  static names(): { [key: string]: string } {
    return {
      alignment: 'alignment',
      backgroundColor: 'backgroundColor',
      font: 'font',
      fontColor: 'fontColor',
      fontSize: 'fontSize',
      maxCharLength: 'maxCharLength',
      positionX: 'positionX',
      positionY: 'positionY',
      textHeight: 'textHeight',
      textWidth: 'textWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      backgroundColor: 'string',
      font: 'string',
      fontColor: 'string',
      fontSize: 'number',
      maxCharLength: 'number',
      positionX: 'number',
      positionY: 'number',
      textHeight: 'number',
      textWidth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFramesVideoScript extends $dara.Model {
  /**
   * @example
   * https://meeting.dingtalk.com/j/1COFppy0POR
   */
  audioUrl?: string;
  emotion?: string;
  pitchRate?: string;
  speechOpen?: boolean;
  /**
   * @example
   * 2.0
   */
  speedRate?: string;
  textContent?: string;
  /**
   * @example
   * TEXT
   */
  type?: string;
  voiceLanguage?: string;
  /**
   * @example
   * 11
   */
  voiceTemplateId?: number;
  /**
   * @example
   * 20
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'audioUrl',
      emotion: 'emotion',
      pitchRate: 'pitchRate',
      speechOpen: 'speechOpen',
      speedRate: 'speedRate',
      textContent: 'textContent',
      type: 'type',
      voiceLanguage: 'voiceLanguage',
      voiceTemplateId: 'voiceTemplateId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      emotion: 'string',
      pitchRate: 'string',
      speechOpen: 'boolean',
      speedRate: 'string',
      textContent: 'string',
      type: 'string',
      voiceLanguage: 'string',
      voiceTemplateId: 'number',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequestFrames extends $dara.Model {
  /**
   * @example
   * 1
   */
  index?: number;
  layers?: SubmitProjectTaskRequestFramesLayers[];
  subtitle?: SubmitProjectTaskRequestFramesSubtitle;
  videoScript?: SubmitProjectTaskRequestFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      layers: 'layers',
      subtitle: 'subtitle',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      layers: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFramesLayers },
      subtitle: SubmitProjectTaskRequestFramesSubtitle,
      videoScript: SubmitProjectTaskRequestFramesVideoScript,
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.subtitle && typeof (this.subtitle as any).validate === 'function') {
      (this.subtitle as any).validate();
    }
    if(this.videoScript && typeof (this.videoScript as any).validate === 'function') {
      (this.videoScript as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitProjectTaskRequest extends $dara.Model {
  /**
   * @remarks
   * frame
   */
  frames?: SubmitProjectTaskRequestFrames[];
  /**
   * @example
   * 9:16
   */
  scaleType?: string;
  /**
   * @example
   * 1
   */
  subtitleTag?: number;
  transparentBackground?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'frames',
      scaleType: 'scaleType',
      subtitleTag: 'subtitleTag',
      transparentBackground: 'transparentBackground',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': SubmitProjectTaskRequestFrames },
      scaleType: 'string',
      subtitleTag: 'number',
      transparentBackground: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

