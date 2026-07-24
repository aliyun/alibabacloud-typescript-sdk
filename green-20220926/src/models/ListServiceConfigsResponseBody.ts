// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule extends $dara.Model {
  /**
   * @remarks
   * The image service.
   */
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule extends $dara.Model {
  /**
   * @remarks
   * The text services.
   */
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConfRules extends $dara.Model {
  /**
   * @remarks
   * The image moderation rule.
   */
  imageScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule;
  /**
   * @remarks
   * The ordinal number.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The text moderation rule.
   */
  textScanRule?: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule;
  static names(): { [key: string]: string } {
    return {
      imageScanRule: 'ImageScanRule',
      index: 'Index',
      textScanRule: 'TextScanRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesImageScanRule,
      index: 'number',
      textScanRule: ListServiceConfigsResponseBodyDataCustomServiceConfRulesTextScanRule,
    };
  }

  validate() {
    if(this.imageScanRule && typeof (this.imageScanRule as any).validate === 'function') {
      (this.imageScanRule as any).validate();
    }
    if(this.textScanRule && typeof (this.textScanRule as any).validate === 'function') {
      (this.textScanRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyDataCustomServiceConf extends $dara.Model {
  /**
   * @remarks
   * The audio service.
   * 
   * @example
   * audio_media_detection
   */
  audioService?: string;
  /**
   * @remarks
   * The image service.
   */
  imageService?: string[];
  /**
   * @remarks
   * The ignored keyword library.
   */
  keywordFilterLibs?: string[];
  /**
   * @remarks
   * The hit keyword library.
   */
  keywordHitLibs?: string[];
  /**
   * @remarks
   * The service rules.
   */
  rules?: ListServiceConfigsResponseBodyDataCustomServiceConfRules[];
  /**
   * @remarks
   * The hit similar text library.
   */
  similarTextHitLibs?: string[];
  static names(): { [key: string]: string } {
    return {
      audioService: 'AudioService',
      imageService: 'ImageService',
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      rules: 'Rules',
      similarTextHitLibs: 'SimilarTextHitLibs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioService: 'string',
      imageService: { 'type': 'array', 'itemType': 'string' },
      keywordFilterLibs: { 'type': 'array', 'itemType': 'string' },
      keywordHitLibs: { 'type': 'array', 'itemType': 'string' },
      rules: { 'type': 'array', 'itemType': ListServiceConfigsResponseBodyDataCustomServiceConfRules },
      similarTextHitLibs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageService)) {
      $dara.Model.validateArray(this.imageService);
    }
    if(Array.isArray(this.keywordFilterLibs)) {
      $dara.Model.validateArray(this.keywordFilterLibs);
    }
    if(Array.isArray(this.keywordHitLibs)) {
      $dara.Model.validateArray(this.keywordHitLibs);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(Array.isArray(this.similarTextHitLibs)) {
      $dara.Model.validateArray(this.similarTextHitLibs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The classification.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * The primary service.
   * 
   * @example
   * nickname_detection
   */
  copyFrom?: string;
  /**
   * @remarks
   * The service configuration.
   */
  customServiceConf?: ListServiceConfigsResponseBodyDataCustomServiceConf;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-07-11 15:40:04
   */
  gmtModified?: string;
  /**
   * @remarks
   * The options.
   * 
   * @example
   * {}
   */
  option?: { [key: string]: any };
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * The scene type. Valid values:
   * 
   * - recommended_scene: recommended scenario.
   * 
   * - all_scene: all scenarios.
   * 
   * @example
   * all_scene
   */
  sceneType?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @remarks
   * The service description.
   * 
   * @example
   * 服务描述
   */
  serviceDesc?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * 服务名称
   */
  serviceName?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * plus
   */
  serviceType?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 1674*****0071291
   */
  uid?: string;
  /**
   * @remarks
   * The usage status.
   * 
   * @example
   * in
   */
  useStatus?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      copyFrom: 'CopyFrom',
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      option: 'Option',
      resourceType: 'ResourceType',
      sceneType: 'SceneType',
      serviceCode: 'ServiceCode',
      serviceDesc: 'ServiceDesc',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      uid: 'Uid',
      useStatus: 'UseStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      copyFrom: 'string',
      customServiceConf: ListServiceConfigsResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      option: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      sceneType: 'string',
      serviceCode: 'string',
      serviceDesc: 'string',
      serviceName: 'string',
      serviceType: 'string',
      uid: 'string',
      useStatus: 'string',
    };
  }

  validate() {
    if(this.customServiceConf && typeof (this.customServiceConf as any).validate === 'function') {
      (this.customServiceConf as any).validate();
    }
    if(this.option) {
      $dara.Model.validateMap(this.option);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 400
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListServiceConfigsResponseBodyData[];
  /**
   * @remarks
   * The description of the error code.
   * 
   * @example
   * OK
   */
  msg?: string;
  /**
   * @remarks
   * The request ID assigned by the backend, which uniquely identifies the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListServiceConfigsResponseBodyData },
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

