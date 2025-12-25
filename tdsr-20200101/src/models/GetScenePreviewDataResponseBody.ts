// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScenePreviewDataResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataModelPanoListPosition extends $dara.Model {
  rotation?: number[];
  spot?: number[];
  viewpoint?: number[];
  static names(): { [key: string]: string } {
    return {
      rotation: 'Rotation',
      spot: 'Spot',
      viewpoint: 'Viewpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rotation: { 'type': 'array', 'itemType': 'number' },
      spot: { 'type': 'array', 'itemType': 'number' },
      viewpoint: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.rotation)) {
      $dara.Model.validateArray(this.rotation);
    }
    if(Array.isArray(this.spot)) {
      $dara.Model.validateArray(this.spot);
    }
    if(Array.isArray(this.viewpoint)) {
      $dara.Model.validateArray(this.viewpoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataModelPanoList extends $dara.Model {
  curRoomPicList?: string[];
  /**
   * @example
   * true/false
   */
  enabled?: boolean;
  /**
   * @example
   * 1****
   */
  floorIdx?: string;
  /**
   * @example
   * 1****
   */
  id?: string;
  /**
   * @example
   * true/false
   */
  mainImage?: boolean;
  neighbours?: string[];
  position?: GetScenePreviewDataResponseBodyDataModelPanoListPosition;
  /**
   * @example
   * location_93132801658010****
   */
  rawName?: string;
  resource?: string;
  /**
   * @example
   * 1****
   */
  roomIdx?: string;
  /**
   * @example
   * a7RqCd3kLMgglmn****
   */
  subSceneId?: string;
  /**
   * @remarks
   * token
   * 
   * @example
   * sIPGWRGLJHEIQE****
   */
  token?: string;
  /**
   * @example
   * 93132801658010****
   */
  virtualId?: string;
  virtualName?: string;
  static names(): { [key: string]: string } {
    return {
      curRoomPicList: 'CurRoomPicList',
      enabled: 'Enabled',
      floorIdx: 'FloorIdx',
      id: 'Id',
      mainImage: 'MainImage',
      neighbours: 'Neighbours',
      position: 'Position',
      rawName: 'RawName',
      resource: 'Resource',
      roomIdx: 'RoomIdx',
      subSceneId: 'SubSceneId',
      token: 'Token',
      virtualId: 'VirtualId',
      virtualName: 'VirtualName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      curRoomPicList: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      floorIdx: 'string',
      id: 'string',
      mainImage: 'boolean',
      neighbours: { 'type': 'array', 'itemType': 'string' },
      position: GetScenePreviewDataResponseBodyDataModelPanoListPosition,
      rawName: 'string',
      resource: 'string',
      roomIdx: 'string',
      subSceneId: 'string',
      token: 'string',
      virtualId: 'string',
      virtualName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.curRoomPicList)) {
      $dara.Model.validateArray(this.curRoomPicList);
    }
    if(Array.isArray(this.neighbours)) {
      $dara.Model.validateArray(this.neighbours);
    }
    if(this.position && typeof (this.position as any).validate === 'function') {
      (this.position as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataModel extends $dara.Model {
  modelPath?: string;
  panoList?: GetScenePreviewDataResponseBodyDataModelPanoList[];
  textureModelPath?: string;
  texturePanoPath?: string;
  static names(): { [key: string]: string } {
    return {
      modelPath: 'ModelPath',
      panoList: 'PanoList',
      textureModelPath: 'TextureModelPath',
      texturePanoPath: 'TexturePanoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: 'string',
      panoList: { 'type': 'array', 'itemType': GetScenePreviewDataResponseBodyDataModelPanoList },
      textureModelPath: 'string',
      texturePanoPath: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.panoList)) {
      $dara.Model.validateArray(this.panoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataTagsConfigButtonConfig extends $dara.Model {
  customText?: string;
  /**
   * @example
   * CLICK_CHECK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      customText: 'CustomText',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customText: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataTagsConfig extends $dara.Model {
  /**
   * @example
   * #00000
   */
  backgroundColor?: string;
  buttonConfig?: GetScenePreviewDataResponseBodyDataTagsConfigButtonConfig;
  content?: string;
  formImgSize?: number[];
  /**
   * @example
   * true/false
   */
  formJumpType?: boolean;
  /**
   * @example
   * default
   */
  formSelectImgType?: string;
  images?: string[];
  /**
   * @example
   * true/false
   */
  isTagVisibleBy3d?: boolean;
  /**
   * @example
   * http://www.example.com/***
   */
  link?: string;
  /**
   * @example
   * 1****
   */
  panoId?: string;
  position?: number[];
  positionPanoCube?: number[];
  relatedPanoIds?: string[];
  /**
   * @example
   * 323****
   */
  sceneId?: number;
  title?: string;
  /**
   * @example
   * http://www.example.com/****.mp4
   */
  video?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundColor: 'BackgroundColor',
      buttonConfig: 'ButtonConfig',
      content: 'Content',
      formImgSize: 'FormImgSize',
      formJumpType: 'FormJumpType',
      formSelectImgType: 'FormSelectImgType',
      images: 'Images',
      isTagVisibleBy3d: 'IsTagVisibleBy3d',
      link: 'Link',
      panoId: 'PanoId',
      position: 'Position',
      positionPanoCube: 'PositionPanoCube',
      relatedPanoIds: 'RelatedPanoIds',
      sceneId: 'SceneId',
      title: 'Title',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundColor: 'string',
      buttonConfig: GetScenePreviewDataResponseBodyDataTagsConfigButtonConfig,
      content: 'string',
      formImgSize: { 'type': 'array', 'itemType': 'number' },
      formJumpType: 'boolean',
      formSelectImgType: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      isTagVisibleBy3d: 'boolean',
      link: 'string',
      panoId: 'string',
      position: { 'type': 'array', 'itemType': 'number' },
      positionPanoCube: { 'type': 'array', 'itemType': 'number' },
      relatedPanoIds: { 'type': 'array', 'itemType': 'string' },
      sceneId: 'number',
      title: 'string',
      video: 'string',
    };
  }

  validate() {
    if(this.buttonConfig && typeof (this.buttonConfig as any).validate === 'function') {
      (this.buttonConfig as any).validate();
    }
    if(Array.isArray(this.formImgSize)) {
      $dara.Model.validateArray(this.formImgSize);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.position)) {
      $dara.Model.validateArray(this.position);
    }
    if(Array.isArray(this.positionPanoCube)) {
      $dara.Model.validateArray(this.positionPanoCube);
    }
    if(Array.isArray(this.relatedPanoIds)) {
      $dara.Model.validateArray(this.relatedPanoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyDataTags extends $dara.Model {
  config?: GetScenePreviewDataResponseBodyDataTagsConfig;
  /**
   * @example
   * 1****
   */
  id?: string;
  position?: number[];
  positionPanoCube?: number[];
  /**
   * @example
   * IMAGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      position: 'Position',
      positionPanoCube: 'PositionPanoCube',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetScenePreviewDataResponseBodyDataTagsConfig,
      id: 'string',
      position: { 'type': 'array', 'itemType': 'number' },
      positionPanoCube: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.position)) {
      $dara.Model.validateArray(this.position);
    }
    if(Array.isArray(this.positionPanoCube)) {
      $dara.Model.validateArray(this.positionPanoCube);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBodyData extends $dara.Model {
  model?: GetScenePreviewDataResponseBodyDataModel;
  tags?: GetScenePreviewDataResponseBodyDataTags[];
  static names(): { [key: string]: string } {
    return {
      model: 'Model',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: GetScenePreviewDataResponseBodyDataModel,
      tags: { 'type': 'array', 'itemType': GetScenePreviewDataResponseBodyDataTags },
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScenePreviewDataResponseBody extends $dara.Model {
  accessDeniedDetail?: GetScenePreviewDataResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 0：成功，其他：失败
   */
  code?: number;
  data?: GetScenePreviewDataResponseBodyData;
  /**
   * @example
   * xxxxx
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A8CD0AD9-8A92-455A-A984-A7E4B76FF387
   */
  requestId?: string;
  /**
   * @example
   * true/false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: GetScenePreviewDataResponseBodyAccessDeniedDetail,
      code: 'number',
      data: GetScenePreviewDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

