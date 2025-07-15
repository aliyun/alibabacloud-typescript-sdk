// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfosStreamInfo extends $dara.Model {
  /**
   * @remarks
   * The URL.
   * 
   * @example
   * rtmp://abclive/caster/example.net
   */
  outputStreamUrl?: string;
  /**
   * @remarks
   * The transcoding configuration. Valid values:
   * 
   * *   **lsd**: standard definition
   * *   **lld**: low definition
   * *   **lud**: ultra-high definition
   * *   **lhd**: high definition
   * 
   * @example
   * lld
   */
  transcodeConfig?: string;
  /**
   * @remarks
   * The format. Valid values:
   * 
   * *   **flv**
   * *   **rtmp**
   * *   **m3u8**
   * 
   * @example
   * flv
   */
  videoFormat?: string;
  static names(): { [key: string]: string } {
    return {
      outputStreamUrl: 'OutputStreamUrl',
      transcodeConfig: 'TranscodeConfig',
      videoFormat: 'VideoFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputStreamUrl: 'string',
      transcodeConfig: 'string',
      videoFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfos extends $dara.Model {
  streamInfo?: StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfosStreamInfo },
    };
  }

  validate() {
    if(Array.isArray(this.streamInfo)) {
      $dara.Model.validateArray(this.streamInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPgmSceneInfosSceneInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * b5f8c837-ceeb-424f-b30b-68e94e86****
   */
  sceneId?: string;
  /**
   * @remarks
   * The stream relay URLs.
   */
  streamInfos?: StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfos;
  /**
   * @remarks
   * The streaming URL of the PGM scene in the production studio. The value is not a stream relay URL.
   * 
   * @example
   * rtmp://abclive/caster/example.edu
   */
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      streamInfos: 'StreamInfos',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      streamInfos: StartCasterResponseBodyPgmSceneInfosSceneInfoStreamInfos,
      streamUrl: 'string',
    };
  }

  validate() {
    if(this.streamInfos && typeof (this.streamInfos as any).validate === 'function') {
      (this.streamInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPgmSceneInfos extends $dara.Model {
  sceneInfo?: StartCasterResponseBodyPgmSceneInfosSceneInfo[];
  static names(): { [key: string]: string } {
    return {
      sceneInfo: 'SceneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneInfo: { 'type': 'array', 'itemType': StartCasterResponseBodyPgmSceneInfosSceneInfo },
    };
  }

  validate() {
    if(Array.isArray(this.sceneInfo)) {
      $dara.Model.validateArray(this.sceneInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPvwSceneInfosSceneInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * b5f8c837-ceeb-424f-b30b-68e94e86****
   */
  sceneId?: string;
  /**
   * @remarks
   * The streaming URL of the PVW scene in the production studio. The value is not a stream relay URL.
   * 
   * @example
   * rtmp://abclive/caster/example.net
   */
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'string',
      streamUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBodyPvwSceneInfos extends $dara.Model {
  sceneInfo?: StartCasterResponseBodyPvwSceneInfosSceneInfo[];
  static names(): { [key: string]: string } {
    return {
      sceneInfo: 'SceneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneInfo: { 'type': 'array', 'itemType': StartCasterResponseBodyPvwSceneInfosSceneInfo },
    };
  }

  validate() {
    if(Array.isArray(this.sceneInfo)) {
      $dara.Model.validateArray(this.sceneInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCasterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The PGM scenes.
   */
  pgmSceneInfos?: StartCasterResponseBodyPgmSceneInfos;
  /**
   * @remarks
   * The PVW scenes.
   */
  pvwSceneInfos?: StartCasterResponseBodyPvwSceneInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EBD1AC4-C34D-4AE1-963E-B688A228BE31
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pgmSceneInfos: 'PgmSceneInfos',
      pvwSceneInfos: 'PvwSceneInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pgmSceneInfos: StartCasterResponseBodyPgmSceneInfos,
      pvwSceneInfos: StartCasterResponseBodyPvwSceneInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pgmSceneInfos && typeof (this.pgmSceneInfos as any).validate === 'function') {
      (this.pgmSceneInfos as any).validate();
    }
    if(this.pvwSceneInfos && typeof (this.pvwSceneInfos as any).validate === 'function') {
      (this.pvwSceneInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

