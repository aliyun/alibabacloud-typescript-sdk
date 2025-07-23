// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ActivateLicenseResponseBodyDataActivateRecord extends $dara.Model {
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
   * XXX
   */
  licenseCode?: string;
  /**
   * @example
   * XXX
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

export class ActivateLicenseResponseBodyData extends $dara.Model {
  activateRecord?: ActivateLicenseResponseBodyDataActivateRecord[];
  /**
   * @example
   * 2024-04-29 15:03:12
   */
  activateTime?: string;
  allDuration?: string;
  applicableSpecs?: string;
  /**
   * @example
   * 2024-04-29 15:00:15
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
   * @example
   * XXXX
   */
  fingerprint?: string;
  /**
   * @remarks
   * Id
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * c39128fcb74e482546a72de90cdsaba3
   */
  instanceId?: string;
  /**
   * @example
   * XXX
   */
  licenseCode?: string;
  licenseSpecName?: string;
  /**
   * @example
   * 256
   */
  memoryLimit?: number;
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
      licenseSpecName: 'LicenseSpecName',
      memoryLimit: 'MemoryLimit',
      status: 'Status',
      unActivateAllDuration: 'UnActivateAllDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateRecord: { 'type': 'array', 'itemType': ActivateLicenseResponseBodyDataActivateRecord },
      activateTime: 'string',
      allDuration: 'string',
      applicableSpecs: 'string',
      buyTime: 'string',
      cpuLimit: 'number',
      description: 'string',
      duration: 'string',
      effectTime: 'string',
      expireTime: 'string',
      fingerprint: 'string',
      id: 'string',
      instanceId: 'string',
      licenseCode: 'string',
      licenseSpecName: 'string',
      memoryLimit: 'number',
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

export class ActivateLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ActivateLicenseResponseBodyData;
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
   * @remarks
   * Id of the request
   * 
   * @example
   * 65308A66-8764-53EE-8D4A-201E86CA88C5
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
      data: ActivateLicenseResponseBodyData,
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

