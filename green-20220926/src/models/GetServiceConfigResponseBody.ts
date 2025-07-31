// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig extends $dara.Model {
  auditRiskLevels?: string[];
  callbackId?: number;
  enable?: boolean;
  manualService?: string;
  static names(): { [key: string]: string } {
    return {
      auditRiskLevels: 'AuditRiskLevels',
      callbackId: 'CallbackId',
      enable: 'Enable',
      manualService: 'ManualService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRiskLevels: { 'type': 'array', 'itemType': 'string' },
      callbackId: 'number',
      enable: 'boolean',
      manualService: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.auditRiskLevels)) {
      $dara.Model.validateArray(this.auditRiskLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBodyDataCustomServiceConf extends $dara.Model {
  keywordFilterLibs?: string[];
  keywordHitLibs?: string[];
  manualMachineConfig?: GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig;
  similarTextHitLibs?: string[];
  static names(): { [key: string]: string } {
    return {
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      manualMachineConfig: 'ManualMachineConfig',
      similarTextHitLibs: 'SimilarTextHitLibs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywordFilterLibs: { 'type': 'array', 'itemType': 'string' },
      keywordHitLibs: { 'type': 'array', 'itemType': 'string' },
      manualMachineConfig: GetServiceConfigResponseBodyDataCustomServiceConfManualMachineConfig,
      similarTextHitLibs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keywordFilterLibs)) {
      $dara.Model.validateArray(this.keywordFilterLibs);
    }
    if(Array.isArray(this.keywordHitLibs)) {
      $dara.Model.validateArray(this.keywordHitLibs);
    }
    if(this.manualMachineConfig && typeof (this.manualMachineConfig as any).validate === 'function') {
      (this.manualMachineConfig as any).validate();
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

export class GetServiceConfigResponseBodyData extends $dara.Model {
  customServiceConf?: GetServiceConfigResponseBodyDataCustomServiceConf;
  /**
   * @example
   * 2024-05-06 03:07:44
   */
  gmtModified?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @example
   * nickname_detection
   */
  serviceCode?: string;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 165379****31937
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      customServiceConf: 'CustomServiceConf',
      gmtModified: 'GmtModified',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customServiceConf: GetServiceConfigResponseBodyDataCustomServiceConf,
      gmtModified: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.customServiceConf && typeof (this.customServiceConf as any).validate === 'function') {
      (this.customServiceConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetServiceConfigResponseBodyData;
  /**
   * @example
   * OK
   */
  msg?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
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
      data: GetServiceConfigResponseBodyData,
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

