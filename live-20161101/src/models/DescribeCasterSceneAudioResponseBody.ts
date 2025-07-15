// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterSceneAudioResponseBodyAudioLayersAudioLayer extends $dara.Model {
  /**
   * @remarks
   * The fixed delay of the audio layer. Unit: milliseconds.
   * 
   * @example
   * 2000
   */
  fixedDelayDuration?: number;
  /**
   * @remarks
   * The sound channel type of the audio layer. Valid values:
   * 
   * *   **left**: the left channel
   * *   **right**: the right channel
   * *   **all** (default): both the left and right channels
   * 
   * @example
   * all
   */
  validChannel?: string;
  /**
   * @remarks
   * The volume of the audio layer.
   * 
   * @example
   * 1
   */
  volumeRate?: number;
  static names(): { [key: string]: string } {
    return {
      fixedDelayDuration: 'FixedDelayDuration',
      validChannel: 'ValidChannel',
      volumeRate: 'VolumeRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fixedDelayDuration: 'number',
      validChannel: 'string',
      volumeRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseBodyAudioLayers extends $dara.Model {
  audioLayer?: DescribeCasterSceneAudioResponseBodyAudioLayersAudioLayer[];
  static names(): { [key: string]: string } {
    return {
      audioLayer: 'AudioLayer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayer: { 'type': 'array', 'itemType': DescribeCasterSceneAudioResponseBodyAudioLayersAudioLayer },
    };
  }

  validate() {
    if(Array.isArray(this.audioLayer)) {
      $dara.Model.validateArray(this.audioLayer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseBodyMixList extends $dara.Model {
  locationId?: string[];
  static names(): { [key: string]: string } {
    return {
      locationId: 'LocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.locationId)) {
      $dara.Model.validateArray(this.locationId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterSceneAudioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the audio layers.
   */
  audioLayers?: DescribeCasterSceneAudioResponseBodyAudioLayers;
  /**
   * @remarks
   * The ID of the production studio. You can specify the ID in a request to start a scene in the production studio.
   * 
   * @example
   * 97df6b7f-3490-47d2-ac50-88338765****
   */
  casterId?: string;
  /**
   * @remarks
   * The audio mode. By default, the audio follows video (AFV) mode is used. Valid values:
   * 
   * *   **0**: the audio mixing mode
   * *   **1**: the AFV mode
   * 
   * @example
   * 1
   */
  followEnable?: number;
  mixList?: DescribeCasterSceneAudioResponseBodyMixList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98745637-3490-47d2-ac50-883387567098
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      audioLayers: 'AudioLayers',
      casterId: 'CasterId',
      followEnable: 'FollowEnable',
      mixList: 'MixList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioLayers: DescribeCasterSceneAudioResponseBodyAudioLayers,
      casterId: 'string',
      followEnable: 'number',
      mixList: DescribeCasterSceneAudioResponseBodyMixList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.audioLayers && typeof (this.audioLayers as any).validate === 'function') {
      (this.audioLayers as any).validate();
    }
    if(this.mixList && typeof (this.mixList as any).validate === 'function') {
      (this.mixList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

