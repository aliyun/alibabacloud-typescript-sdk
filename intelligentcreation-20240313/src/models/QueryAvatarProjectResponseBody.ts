// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAvatarProjectResponseBodyFramesLayersMaterial extends $dara.Model {
  format?: string;
  id?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'format',
      id: 'id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      id: 'string',
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

export class QueryAvatarProjectResponseBodyFramesLayers extends $dara.Model {
  height?: number;
  index?: number;
  material?: QueryAvatarProjectResponseBodyFramesLayersMaterial;
  positionX?: number;
  positionY?: number;
  type?: string;
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
      material: QueryAvatarProjectResponseBodyFramesLayersMaterial,
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

export class QueryAvatarProjectResponseBodyFramesVideoScript extends $dara.Model {
  emotion?: string;
  pitchRate?: string;
  speedRate?: string;
  textContent?: string;
  voiceLanguage?: string;
  voiceTemplateId?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      emotion: 'emotion',
      pitchRate: 'pitchRate',
      speedRate: 'speedRate',
      textContent: 'textContent',
      voiceLanguage: 'voiceLanguage',
      voiceTemplateId: 'voiceTemplateId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emotion: 'string',
      pitchRate: 'string',
      speedRate: 'string',
      textContent: 'string',
      voiceLanguage: 'string',
      voiceTemplateId: 'string',
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

export class QueryAvatarProjectResponseBodyFrames extends $dara.Model {
  index?: number;
  layers?: QueryAvatarProjectResponseBodyFramesLayers[];
  videoScript?: QueryAvatarProjectResponseBodyFramesVideoScript;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      layers: 'layers',
      videoScript: 'videoScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      layers: { 'type': 'array', 'itemType': QueryAvatarProjectResponseBodyFramesLayers },
      videoScript: QueryAvatarProjectResponseBodyFramesVideoScript,
    };
  }

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
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

export class QueryAvatarProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  frames?: QueryAvatarProjectResponseBodyFrames[];
  /**
   * @example
   * doc_test_3
   */
  projectName?: string;
  /**
   * @example
   * 2C331582-7390-5949-8D9A-AC8239185B37
   */
  requestId?: string;
  resSpecType?: string;
  scaleType?: string;
  scriptModelTag?: string;
  /**
   * @example
   * DEPLOYING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorMsg: 'errorMsg',
      frames: 'frames',
      projectName: 'projectName',
      requestId: 'requestId',
      resSpecType: 'resSpecType',
      scaleType: 'scaleType',
      scriptModelTag: 'scriptModelTag',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorMsg: 'string',
      frames: { 'type': 'array', 'itemType': QueryAvatarProjectResponseBodyFrames },
      projectName: 'string',
      requestId: 'string',
      resSpecType: 'string',
      scaleType: 'string',
      scriptModelTag: 'string',
      status: 'string',
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

