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
  outputStreamUrl?: string;
  transcodeConfig?: string;
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
  componentIds?: DescribeCasterScenesResponseBodySceneListSceneComponentIds;
  layoutId?: string;
  outputType?: string;
  sceneId?: string;
  sceneName?: string;
  status?: number;
  streamInfos?: DescribeCasterScenesResponseBodySceneListSceneStreamInfos;
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

