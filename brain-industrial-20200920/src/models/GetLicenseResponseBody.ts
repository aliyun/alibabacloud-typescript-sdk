// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLicenseResponseBodyDataActivateRecord extends $dara.Model {
  /**
   * @example
   * 2024-04-29 15:03:12
   */
  activateTime?: string;
  /**
   * @example
   * 2024-04-29 15:01:15
   */
  buyTime?: string;
  duration?: string;
  /**
   * @example
   * 2025-05-01 00:00:00
   */
  expireTime?: string;
  /**
   * @example
   * XXXX
   */
  licenseCode?: string;
  /**
   * @example
   * 1040b91765d14ad1a40ff22589070342
   */
  orderId?: string;
  /**
   * @example
   * activated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      buyTime: 'BuyTime',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      licenseCode: 'LicenseCode',
      orderId: 'OrderId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      buyTime: 'string',
      duration: 'string',
      expireTime: 'string',
      licenseCode: 'string',
      orderId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponseBodyData extends $dara.Model {
  activateRecord?: GetLicenseResponseBodyDataActivateRecord[];
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 2024-04-29 15:03:12
   */
  activateTime?: string;
  adaptiveMachine?: string;
  allDuration?: string;
  applicableSpecs?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * 2024-04-29 15:01:15
   */
  buyTime?: string;
  /**
   * @example
   * 72
   */
  cpuLimit?: number;
  /**
   * @example
   * ""
   */
  description?: string;
  duration?: string;
  /**
   * @example
   * 2024-05-01 00:00:00
   */
  effectTime?: string;
  /**
   * @example
   * 2025-05-01 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * XXX
   */
  fingerprint?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * c31238fcb74e482588a72de90cd7dba3
   */
  instanceId?: string;
  /**
   * @example
   * XXX
   */
  licenseCode?: string;
  licenseSpecCode?: string;
  /**
   * @remarks
   * 代表资源组的资源属性字段
   */
  licenseSpecName?: string;
  licenseSpecType?: string;
  /**
   * @example
   * 256
   */
  memoryLimit?: number;
  proposal?: string;
  /**
   * @example
   * activated
   */
  status?: string;
  unActivateAllDuration?: string;
  static names(): { [key: string]: string } {
    return {
      activateRecord: 'ActivateRecord',
      activateTime: 'ActivateTime',
      adaptiveMachine: 'AdaptiveMachine',
      allDuration: 'AllDuration',
      applicableSpecs: 'ApplicableSpecs',
      buyTime: 'BuyTime',
      cpuLimit: 'CpuLimit',
      description: 'Description',
      duration: 'Duration',
      effectTime: 'EffectTime',
      expireTime: 'ExpireTime',
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      licenseCode: 'LicenseCode',
      licenseSpecCode: 'LicenseSpecCode',
      licenseSpecName: 'LicenseSpecName',
      licenseSpecType: 'LicenseSpecType',
      memoryLimit: 'MemoryLimit',
      proposal: 'Proposal',
      status: 'Status',
      unActivateAllDuration: 'UnActivateAllDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateRecord: { 'type': 'array', 'itemType': GetLicenseResponseBodyDataActivateRecord },
      activateTime: 'string',
      adaptiveMachine: 'string',
      allDuration: 'string',
      applicableSpecs: 'string',
      buyTime: 'string',
      cpuLimit: 'number',
      description: 'string',
      duration: 'string',
      effectTime: 'string',
      expireTime: 'string',
      fingerprint: 'string',
      id: 'number',
      instanceId: 'string',
      licenseCode: 'string',
      licenseSpecCode: 'string',
      licenseSpecName: 'string',
      licenseSpecType: 'string',
      memoryLimit: 'number',
      proposal: 'string',
      status: 'string',
      unActivateAllDuration: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.activateRecord)) {
      $dara.Model.validateArray(this.activateRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetLicenseResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetLicenseResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

