// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAvatarProjectRequestFramesLayersMaterial extends $dara.Model {
  /**
   * @example
   * image/png
   */
  format?: string;
  /**
   * @example
   * 434508
   */
  id?: string;
  /**
   * @example
   * https://alidocs.dingtalk.com/i/nodes/vy20BglGWOxjGpq0C5G4DlN0VA7depqY
   */
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

export class SaveAvatarProjectRequestFramesLayers extends $dara.Model {
  /**
   * @example
   * 100
   */
  height?: number;
  index?: number;
  material?: SaveAvatarProjectRequestFramesLayersMaterial;
  /**
   * @example
   * 1
   */
  positionX?: number;
  /**
   * @example
   * 1
   */
  positionY?: number;
  /**
   * @example
   * ANCHOR
   */
  type?: string;
  /**
   * @example
   * 100
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
      material: SaveAvatarProjectRequestFramesLayersMaterial,
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

export class SaveAvatarProjectRequestFramesVideoScript extends $dara.Model {
  emotion?: string;
  pitchRate?: string;
  /**
   * @example
   * 1.0
   */
  speedRate?: string;
  textContent?: string;
  voiceLanguage?: string;
  /**
   * @example
   * 1
   */
  voiceTemplateId?: string;
  /**
   * @example
   * 50
   */
  volume?: string;
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
      volume: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAvatarProjectRequestFrames extends $dara.Model {
  index?: number;
  layers?: SaveAvatarProjectRequestFramesLayers[];
  videoScript?: SaveAvatarProjectRequestFramesVideoScript;
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
      layers: { 'type': 'array', 'itemType': SaveAvatarProjectRequestFramesLayers },
      videoScript: SaveAvatarProjectRequestFramesVideoScript,
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

export class SaveAvatarProjectRequest extends $dara.Model {
  /**
   * @example
   * 1000196
   */
  agentId?: string;
  bitRate?: string;
  frameRate?: string;
  frames?: SaveAvatarProjectRequestFrames[];
  /**
   * @example
   * CREATE
   */
  operateType?: string;
  /**
   * @example
   * 787594567117586432
   */
  projectId?: string;
  /**
   * @example
   * df_cs_471437
   */
  projectName?: string;
  /**
   * @example
   * STANDARD
   */
  resSpecType?: string;
  resolution?: string;
  /**
   * @example
   * 9:16
   */
  scaleType?: string;
  scriptModelTag?: string;
  synchronizedDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      bitRate: 'bitRate',
      frameRate: 'frameRate',
      frames: 'frames',
      operateType: 'operateType',
      projectId: 'projectId',
      projectName: 'projectName',
      resSpecType: 'resSpecType',
      resolution: 'resolution',
      scaleType: 'scaleType',
      scriptModelTag: 'scriptModelTag',
      synchronizedDisplay: 'synchronizedDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      bitRate: 'string',
      frameRate: 'string',
      frames: { 'type': 'array', 'itemType': SaveAvatarProjectRequestFrames },
      operateType: 'string',
      projectId: 'string',
      projectName: 'string',
      resSpecType: 'string',
      resolution: 'string',
      scaleType: 'string',
      scriptModelTag: 'string',
      synchronizedDisplay: 'string',
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

