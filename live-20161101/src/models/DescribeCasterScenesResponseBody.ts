// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterScenesResponseBodySceneListSceneComponentIds extends $dara.Model {
  componentId?: string[];
  static names(): { [key: string]: string } {
    return {
      componentId: 'componentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.componentId)) {
      $dara.Model.validateArray(this.componentId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBodySceneListSceneStreamInfosStreamInfo extends $dara.Model {
  /**
   * @remarks
   * The streaming URL.
   * 
   * @example
   * http://live/caster/example.net
   */
  outputStreamUrl?: string;
  /**
   * @remarks
   * The transcoding configuration. Valid values:
   * 
   * *   **sd**: standard definition
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
   * *   **mp4**
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

export class DescribeCasterScenesResponseBodySceneListSceneStreamInfos extends $dara.Model {
  streamInfo?: DescribeCasterScenesResponseBodySceneListSceneStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': DescribeCasterScenesResponseBodySceneListSceneStreamInfosStreamInfo },
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

export class DescribeCasterScenesResponseBodySceneListScene extends $dara.Model {
  /**
   * @remarks
   * The components.
   */
  componentIds?: DescribeCasterScenesResponseBodySceneListSceneComponentIds;
  /**
   * @remarks
   * The ID of the layout.
   * 
   * @example
   * 37cb2f8b-f152-4338-b928-6704f71d****
   */
  layoutId?: string;
  /**
   * @remarks
   * Indicates whether the output video is in PVW mode or PGM mode. Valid values:
   * 
   * *   **0**: in PVW mode.
   * *   **1**: in PGM mode.
   * 
   * @example
   * 0
   */
  outputType?: string;
  /**
   * @remarks
   * The ID of the scene. You can use the ID as a request parameter in the API operation that is used to modify the audio configurations of the scene, query the audio configurations of the scene, start the scene, or stop the scene.
   * 
   * @example
   * b5f8c837-ceeb-424f-b30b-68e94e86****
   */
  sceneId?: string;
  /**
   * @remarks
   * The name of the scene.
   * 
   * @example
   * scene1
   */
  sceneName?: string;
  /**
   * @remarks
   * The status of the scene. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The information about the stream.
   */
  streamInfos?: DescribeCasterScenesResponseBodySceneListSceneStreamInfos;
  /**
   * @remarks
   * The URL of the output stream.
   * 
   * @example
   * rtmp://developer.aliyundoc.com/caster/4a82a3d1b7f0462ea37348366201****?auth_key=1608953344-0-0-ac8c628078541d7055a170ec59a5****
   */
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      componentIds: 'ComponentIds',
      layoutId: 'LayoutId',
      outputType: 'OutputType',
      sceneId: 'SceneId',
      sceneName: 'SceneName',
      status: 'Status',
      streamInfos: 'StreamInfos',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentIds: DescribeCasterScenesResponseBodySceneListSceneComponentIds,
      layoutId: 'string',
      outputType: 'string',
      sceneId: 'string',
      sceneName: 'string',
      status: 'number',
      streamInfos: DescribeCasterScenesResponseBodySceneListSceneStreamInfos,
      streamUrl: 'string',
    };
  }

  validate() {
    if(this.componentIds && typeof (this.componentIds as any).validate === 'function') {
      (this.componentIds as any).validate();
    }
    if(this.streamInfos && typeof (this.streamInfos as any).validate === 'function') {
      (this.streamInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBodySceneList extends $dara.Model {
  scene?: DescribeCasterScenesResponseBodySceneListScene[];
  static names(): { [key: string]: string } {
    return {
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: { 'type': 'array', 'itemType': DescribeCasterScenesResponseBodySceneListScene },
    };
  }

  validate() {
    if(Array.isArray(this.scene)) {
      $dara.Model.validateArray(this.scene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterScenesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * The ID of the scene.
   */
  requestId?: string;
  /**
   * @remarks
   * The scenes.
   */
  sceneList?: DescribeCasterScenesResponseBodySceneList;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sceneList: 'SceneList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sceneList: DescribeCasterScenesResponseBodySceneList,
      total: 'number',
    };
  }

  validate() {
    if(this.sceneList && typeof (this.sceneList as any).validate === 'function') {
      (this.sceneList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

