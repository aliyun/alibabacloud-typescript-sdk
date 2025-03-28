// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

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

export class CreateEssOptJobRequestElecPrice extends $dara.Model {
  /**
   * @example
   * 00:00:15
   */
  dataTime?: string;
  /**
   * @example
   * 0.5
   */
  price?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      price: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequestGenPrice extends $dara.Model {
  /**
   * @example
   * 00:00:15
   */
  dataTime?: string;
  /**
   * @example
   * 0.3
   */
  price?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      price: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequestLocation extends $dara.Model {
  /**
   * @example
   * 10.123
   */
  altitude?: number;
  /**
   * @example
   * 40.027
   */
  latitude?: number;
  /**
   * @example
   * 120.042
   */
  longitude?: number;
  static names(): { [key: string]: string } {
    return {
      altitude: 'Altitude',
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altitude: 'number',
      latitude: 'number',
      longitude: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequestSystemData extends $dara.Model {
  historyData?: { [key: string]: any }[];
  /**
   * @example
   * 1
   */
  systemId?: string;
  systemParams?: { [key: string]: any };
  /**
   * @example
   * ess
   */
  systemType?: string;
  static names(): { [key: string]: string } {
    return {
      historyData: 'HistoryData',
      systemId: 'SystemId',
      systemParams: 'SystemParams',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyData: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      systemId: 'string',
      systemParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      systemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyData)) {
      $dara.Model.validateArray(this.historyData);
    }
    if(this.systemParams) {
      $dara.Model.validateMap(this.systemParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobResponseBodyDataResponse extends $dara.Model {
  /**
   * @example
   * {}
   */
  debugInfo?: any;
  /**
   * @example
   * LoadForecast
   */
  jobType?: string;
  /**
   * @example
   * {}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      debugInfo: 'DebugInfo',
      jobType: 'JobType',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugInfo: 'any',
      jobType: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * True
   */
  completed?: boolean;
  /**
   * @example
   * 2024-12-22 00:00:21
   */
  createTime?: string;
  /**
   * @example
   * ""
   */
  error?: string;
  /**
   * @example
   * 8c0ca18a-246a-4acd-80ca-e16d8ff5ef33
   */
  jobId?: string;
  /**
   * @example
   * 25
   */
  progress?: number;
  response?: CreateEssOptJobResponseBodyDataResponse;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: CreateEssOptJobResponseBodyDataResponse,
      status: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadForecastJobRequestHistoryData extends $dara.Model {
  /**
   * @example
   * 2025-12-12 00:00:00
   */
  runTime?: string;
  /**
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      runTime: 'RunTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runTime: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadForecastJobResponseBodyDataResponse extends $dara.Model {
  /**
   * @example
   * {}
   */
  debugInfo?: any;
  /**
   * @example
   * PowerForecast
   */
  jobType?: string;
  /**
   * @example
   * {}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      debugInfo: 'DebugInfo',
      jobType: 'JobType',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugInfo: 'any',
      jobType: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadForecastJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * True
   */
  completed?: boolean;
  /**
   * @example
   * 2024-12-22 00:00:21
   */
  createTime?: string;
  /**
   * @example
   * ""
   */
  error?: string;
  /**
   * @example
   * 8c0ca18a-246a-4acd-80ca-e16d8ff5ef33
   */
  jobId?: string;
  /**
   * @example
   * 25
   */
  progress?: number;
  response?: CreateLoadForecastJobResponseBodyDataResponse;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: CreateLoadForecastJobResponseBodyDataResponse,
      status: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobRequestHistoryData extends $dara.Model {
  /**
   * @example
   * 2025-02-12 00:00:00
   */
  runTime?: string;
  /**
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      runTime: 'RunTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runTime: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobRequestLocation extends $dara.Model {
  /**
   * @example
   * 10.123
   */
  altitude?: number;
  /**
   * @example
   * 40.027
   */
  latitude?: number;
  /**
   * @example
   * 120.042
   */
  longitude?: number;
  static names(): { [key: string]: string } {
    return {
      altitude: 'Altitude',
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altitude: 'number',
      latitude: 'number',
      longitude: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobResponseBodyDataResponse extends $dara.Model {
  /**
   * @example
   * {}
   */
  debugInfo?: any;
  /**
   * @example
   * LoadForecast
   */
  jobType?: string;
  /**
   * @example
   * {}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      debugInfo: 'DebugInfo',
      jobType: 'JobType',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugInfo: 'any',
      jobType: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * True
   */
  completed?: boolean;
  /**
   * @example
   * 2024-12-22 00:00:21
   */
  createTime?: string;
  /**
   * @example
   * ""
   */
  error?: string;
  /**
   * @example
   * 8c0ca18a-246a-4acd-80ca-e16d8ff5ef33
   */
  jobId?: string;
  /**
   * @example
   * 25
   */
  progress?: number;
  response?: CreatePowerForecastJobResponseBodyDataResponse;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: CreatePowerForecastJobResponseBodyDataResponse,
      status: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAivppAlgoJobResponseBodyDataResponse extends $dara.Model {
  /**
   * @example
   * {}
   */
  debugInfo?: any;
  /**
   * @example
   * PowerForecast
   */
  jobType?: string;
  /**
   * @example
   * {}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      debugInfo: 'DebugInfo',
      jobType: 'JobType',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugInfo: 'any',
      jobType: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAivppAlgoJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * False
   */
  completed?: boolean;
  /**
   * @example
   * 2024-12-10 17:50:48
   */
  createTime?: string;
  /**
   * @example
   * ""
   */
  error?: string;
  /**
   * @example
   * 5854bfa6-f002-43c2-8e1d-e9b2c28f9384
   */
  jobId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  response?: GetAivppAlgoJobResponseBodyDataResponse;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: GetAivppAlgoJobResponseBodyDataResponse,
      status: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListAivppResourcesResponseBodyData extends $dara.Model {
  detail?: string;
  /**
   * @example
   * 2034-03-09T17:47:11Z
   */
  expireTime?: string;
  /**
   * @example
   * i-bp154xh3gt3adb4xu1ue
   */
  instanceId?: string;
  /**
   * @example
   * api
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  leftQuantity?: string;
  /**
   * @example
   * 231287932080007
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @example
   * LoadForecasting
   */
  specification?: string;
  /**
   * @example
   * 2024-09-08T01:16Z
   */
  startTime?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      leftQuantity: 'LeftQuantity',
      orderId: 'OrderId',
      quantity: 'Quantity',
      specification: 'Specification',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      expireTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      leftQuantity: 'string',
      orderId: 'string',
      quantity: 'string',
      specification: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesResponseBodyLicenseList extends $dara.Model {
  /**
   * @example
   * 2024-10-14 14:15:45
   */
  activateTime?: string;
  adaptiveMachine?: number;
  allDuration?: string;
  /**
   * @example
   * 2024-10-14 13:17:20
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
   * 2024-10-14 14:15:45
   */
  effectTime?: string;
  /**
   * @example
   * 2025-10-14 14:15:45
   */
  expireTime?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * 451f14ee73604aesdfe4da606764ce09
   */
  instanceId?: string;
  /**
   * @example
   * aics_1000
   */
  licenseSpecCode?: string;
  licenseSpecName?: string;
  /**
   * @example
   * brainindustrial_aicsruntime_public_cn
   */
  licenseSpecType?: string;
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
      activateTime: 'ActivateTime',
      adaptiveMachine: 'AdaptiveMachine',
      allDuration: 'AllDuration',
      buyTime: 'BuyTime',
      cpuLimit: 'CpuLimit',
      description: 'Description',
      duration: 'Duration',
      effectTime: 'EffectTime',
      expireTime: 'ExpireTime',
      id: 'Id',
      instanceId: 'InstanceId',
      licenseSpecCode: 'LicenseSpecCode',
      licenseSpecName: 'LicenseSpecName',
      licenseSpecType: 'LicenseSpecType',
      memoryLimit: 'MemoryLimit',
      status: 'Status',
      unActivateAllDuration: 'UnActivateAllDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      adaptiveMachine: 'number',
      allDuration: 'string',
      buyTime: 'string',
      cpuLimit: 'number',
      description: 'string',
      duration: 'string',
      effectTime: 'string',
      expireTime: 'string',
      id: 'string',
      instanceId: 'string',
      licenseSpecCode: 'string',
      licenseSpecName: 'string',
      licenseSpecType: 'string',
      memoryLimit: 'number',
      status: 'string',
      unActivateAllDuration: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBodyData extends $dara.Model {
  chargeType?: string;
  /**
   * @example
   * brainindustrial_simupostpaid_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2024-12-21
   */
  endDate?: string;
  /**
   * @example
   * 12345ea3cff446e8837078c2baffbe83
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 20240902
   */
  startDate?: string;
  /**
   * @example
   * ""
   */
  status?: string;
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      endDate: 'endDate',
      instanceId: 'instanceId',
      region: 'region',
      startDate: 'startDate',
      status: 'status',
      statusMsg: 'statusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      endDate: 'string',
      instanceId: 'string',
      region: 'string',
      startDate: 'string',
      status: 'string',
      statusMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseRequest extends $dara.Model {
  /**
   * @example
   * XXX
   */
  fingerprint?: string;
  /**
   * @remarks
   * ID
   */
  id?: string;
  /**
   * @example
   * 12bea6b4489fsde7b903fe05934a0adx
   */
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      id: 'string',
      instanceId: 'string',
      orderId: 'string',
    };
  }

  validate() {
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

export class ActivateLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ActivateLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AicsOpenApiInvokeRequest extends $dara.Model {
  /**
   * @example
   * 119397
   */
  nodeId?: string;
  /**
   * @example
   * {"a":1}
   */
  param?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ae5f9884c9914ed7af72b07e6c1616f9
   */
  serviceId?: string;
  /**
   * @example
   * EXPERIMENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      param: 'Param',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      param: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      serviceId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.param) {
      $dara.Model.validateMap(this.param);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AicsOpenApiInvokeShrinkRequest extends $dara.Model {
  /**
   * @example
   * 119397
   */
  nodeId?: string;
  /**
   * @example
   * {"a":1}
   */
  paramShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ae5f9884c9914ed7af72b07e6c1616f9
   */
  serviceId?: string;
  /**
   * @example
   * EXPERIMENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      paramShrink: 'Param',
      serviceId: 'ServiceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      paramShrink: 'string',
      serviceId: 'string',
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

export class AicsOpenApiInvokeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"c":2}
   */
  data?: any;
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
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AicsOpenApiInvokeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AicsOpenApiInvokeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AicsOpenApiInvokeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  duration?: number;
  elecPrice?: CreateEssOptJobRequestElecPrice[];
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  genPrice?: CreateEssOptJobRequestGenPrice[];
  location?: CreateEssOptJobRequestLocation;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-02-12
   */
  runDate?: string;
  systemData?: CreateEssOptJobRequestSystemData[];
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * LOAD_ESS_SOLAR
   */
  topoType?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      elecPrice: 'ElecPrice',
      freq: 'Freq',
      genPrice: 'GenPrice',
      location: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemData: 'SystemData',
      timeZone: 'TimeZone',
      topoType: 'TopoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      elecPrice: { 'type': 'array', 'itemType': CreateEssOptJobRequestElecPrice },
      freq: 'string',
      genPrice: { 'type': 'array', 'itemType': CreateEssOptJobRequestGenPrice },
      location: CreateEssOptJobRequestLocation,
      modelVersion: 'string',
      runDate: 'string',
      systemData: { 'type': 'array', 'itemType': CreateEssOptJobRequestSystemData },
      timeZone: 'string',
      topoType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elecPrice)) {
      $dara.Model.validateArray(this.elecPrice);
    }
    if(Array.isArray(this.genPrice)) {
      $dara.Model.validateArray(this.genPrice);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.systemData)) {
      $dara.Model.validateArray(this.systemData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  duration?: number;
  elecPriceShrink?: string;
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  genPriceShrink?: string;
  locationShrink?: string;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-02-12
   */
  runDate?: string;
  systemDataShrink?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * LOAD_ESS_SOLAR
   */
  topoType?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      elecPriceShrink: 'ElecPrice',
      freq: 'Freq',
      genPriceShrink: 'GenPrice',
      locationShrink: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemDataShrink: 'SystemData',
      timeZone: 'TimeZone',
      topoType: 'TopoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      elecPriceShrink: 'string',
      freq: 'string',
      genPriceShrink: 'string',
      locationShrink: 'string',
      modelVersion: 'string',
      runDate: 'string',
      systemDataShrink: 'string',
      timeZone: 'string',
      topoType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateEssOptJobResponseBodyData;
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
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEssOptJobResponseBodyData,
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

export class CreateEssOptJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEssOptJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateEssOptJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadForecastJobRequest extends $dara.Model {
  /**
   * @example
   * electricityMeter
   */
  deviceType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  historyData?: CreateLoadForecastJobRequestHistoryData[];
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-12-12
   */
  runDate?: string;
  /**
   * @example
   * load
   */
  systemType?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      duration: 'Duration',
      freq: 'Freq',
      historyData: 'HistoryData',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemType: 'SystemType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      duration: 'number',
      freq: 'string',
      historyData: { 'type': 'array', 'itemType': CreateLoadForecastJobRequestHistoryData },
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyData)) {
      $dara.Model.validateArray(this.historyData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadForecastJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * electricityMeter
   */
  deviceType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  historyDataShrink?: string;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-12-12
   */
  runDate?: string;
  /**
   * @example
   * load
   */
  systemType?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      duration: 'Duration',
      freq: 'Freq',
      historyDataShrink: 'HistoryData',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemType: 'SystemType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      duration: 'number',
      freq: 'string',
      historyDataShrink: 'string',
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadForecastJobResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateLoadForecastJobResponseBodyData;
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
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateLoadForecastJobResponseBodyData,
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

export class CreateLoadForecastJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoadForecastJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLoadForecastJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobRequest extends $dara.Model {
  /**
   * @example
   * electricityMeter
   */
  deviceType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  historyData?: CreatePowerForecastJobRequestHistoryData[];
  location?: CreatePowerForecastJobRequestLocation;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-02-12
   */
  runDate?: string;
  /**
   * @example
   * load
   */
  systemType?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      duration: 'Duration',
      freq: 'Freq',
      historyData: 'HistoryData',
      location: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemType: 'SystemType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      duration: 'number',
      freq: 'string',
      historyData: { 'type': 'array', 'itemType': CreatePowerForecastJobRequestHistoryData },
      location: CreatePowerForecastJobRequestLocation,
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyData)) {
      $dara.Model.validateArray(this.historyData);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * electricityMeter
   */
  deviceType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  historyDataShrink?: string;
  locationShrink?: string;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-02-12
   */
  runDate?: string;
  /**
   * @example
   * load
   */
  systemType?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      deviceType: 'DeviceType',
      duration: 'Duration',
      freq: 'Freq',
      historyDataShrink: 'HistoryData',
      locationShrink: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemType: 'SystemType',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceType: 'string',
      duration: 'number',
      freq: 'string',
      historyDataShrink: 'string',
      locationShrink: 'string',
      modelVersion: 'string',
      runDate: 'string',
      systemType: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePowerForecastJobResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreatePowerForecastJobResponseBodyData;
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
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreatePowerForecastJobResponseBodyData,
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

export class CreatePowerForecastJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePowerForecastJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePowerForecastJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAivppAlgoJobRequest extends $dara.Model {
  /**
   * @example
   * 5854bfa6-f002-43c2-8e1d-e9b2c28f9384
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAivppAlgoJobResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAivppAlgoJobResponseBodyData;
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
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAivppAlgoJobResponseBodyData,
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

export class GetAivppAlgoJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAivppAlgoJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAivppAlgoJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
    };
  }

  validate() {
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

export class GetLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLicenseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLicenseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAivppResourcesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxResults: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAivppResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListAivppResourcesResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 37cc36b4344b182d36b45d95ae4ef03952ee5c24733ba461
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAivppResourcesResponseBodyData },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      totalCount: 'number',
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

export class ListAivppResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAivppResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAivppResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 12
   */
  pageSize?: number;
  queryStr?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      queryStr: 'QueryStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      queryStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesResponseBody extends $dara.Model {
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
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  licenseList?: ListLicensesResponseBodyLicenseList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @example
   * FAC892CE-5A94-5616-91DC-629B09CC6792
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 42
   */
  totalCount?: number;
  /**
   * @example
   * 4
   */
  totalPage?: string;
  /**
   * @example
   * 4
   */
  totalPageCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      licenseList: 'LicenseList',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      currentPage: 'number',
      httpStatusCode: 'number',
      licenseList: { 'type': 'array', 'itemType': ListLicensesResponseBodyLicenseList },
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'string',
      totalPageCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.licenseList)) {
      $dara.Model.validateArray(this.licenseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLicensesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLicensesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesRequest extends $dara.Model {
  /**
   * @example
   * BrainIndustrial
   */
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ListUserResourcesResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListUserResourcesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
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

export class ListUserResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiInvokeRequest extends $dara.Model {
  /**
   * @example
   * 119397
   */
  nodeId?: string;
  /**
   * @example
   * {"a":{"value":1}}
   */
  param?: string;
  /**
   * @example
   * 215168378e7b43789cabeef1d0db9320
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      param: 'Param',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      param: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiInvokeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {"dd":{"keyName":"dd","type":"Int","value":2,"quality":192}}
   */
  data?: string;
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
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiInvokeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenApiInvokeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenApiInvokeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLicenseDescriptionRequest extends $dara.Model {
  description?: string;
  /**
   * @example
   * brainindustrial_aicsruntime_public_cn-mdu3ps3kw04
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLicenseDescriptionResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
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
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
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
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLicenseDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLicenseDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLicenseDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("brain-industrial", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 激活License
   * 
   * @param request - ActivateLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateLicenseResponse
   */
  async activateLicenseWithOptions(request: ActivateLicenseRequest, runtime: $dara.RuntimeOptions): Promise<ActivateLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fingerprint)) {
      body["Fingerprint"] = request.fingerprint;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateLicense",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ActivateLicenseResponse>(await this.callApi(params, req, runtime), new ActivateLicenseResponse({}));
    } else {
      return $dara.cast<ActivateLicenseResponse>(await this.execute(params, req, runtime), new ActivateLicenseResponse({}));
    }

  }

  /**
   * 激活License
   * 
   * @param request - ActivateLicenseRequest
   * @returns ActivateLicenseResponse
   */
  async activateLicense(request: ActivateLicenseRequest): Promise<ActivateLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

  /**
   * 调用aics openapi
   * 
   * @param tmpReq - AicsOpenApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AicsOpenApiInvokeResponse
   */
  async aicsOpenApiInvokeWithOptions(tmpReq: AicsOpenApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<AicsOpenApiInvokeResponse> {
    tmpReq.validate();
    let request = new AicsOpenApiInvokeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.param)) {
      request.paramShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.param, "Param", "json");
    }

    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.paramShrink)) {
      body["Param"] = request.paramShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AicsOpenApiInvoke",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AicsOpenApiInvokeResponse>(await this.callApi(params, req, runtime), new AicsOpenApiInvokeResponse({}));
    } else {
      return $dara.cast<AicsOpenApiInvokeResponse>(await this.execute(params, req, runtime), new AicsOpenApiInvokeResponse({}));
    }

  }

  /**
   * 调用aics openapi
   * 
   * @param request - AicsOpenApiInvokeRequest
   * @returns AicsOpenApiInvokeResponse
   */
  async aicsOpenApiInvoke(request: AicsOpenApiInvokeRequest): Promise<AicsOpenApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aicsOpenApiInvokeWithOptions(request, runtime);
  }

  /**
   * 创建储能运行优化任务
   * 
   * @param tmpReq - CreateEssOptJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEssOptJobResponse
   */
  async createEssOptJobWithOptions(tmpReq: CreateEssOptJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateEssOptJobResponse> {
    tmpReq.validate();
    let request = new CreateEssOptJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.elecPrice)) {
      request.elecPriceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.elecPrice, "ElecPrice", "json");
    }

    if (!$dara.isNull(tmpReq.genPrice)) {
      request.genPriceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.genPrice, "GenPrice", "json");
    }

    if (!$dara.isNull(tmpReq.location)) {
      request.locationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.location, "Location", "json");
    }

    if (!$dara.isNull(tmpReq.systemData)) {
      request.systemDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.systemData, "SystemData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.elecPriceShrink)) {
      body["ElecPrice"] = request.elecPriceShrink;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.genPriceShrink)) {
      body["GenPrice"] = request.genPriceShrink;
    }

    if (!$dara.isNull(request.locationShrink)) {
      body["Location"] = request.locationShrink;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemDataShrink)) {
      body["SystemData"] = request.systemDataShrink;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.topoType)) {
      body["TopoType"] = request.topoType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEssOptJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateEssOptJobResponse>(await this.callApi(params, req, runtime), new CreateEssOptJobResponse({}));
    } else {
      return $dara.cast<CreateEssOptJobResponse>(await this.execute(params, req, runtime), new CreateEssOptJobResponse({}));
    }

  }

  /**
   * 创建储能运行优化任务
   * 
   * @param request - CreateEssOptJobRequest
   * @returns CreateEssOptJobResponse
   */
  async createEssOptJob(request: CreateEssOptJobRequest): Promise<CreateEssOptJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEssOptJobWithOptions(request, runtime);
  }

  /**
   * 创建用电负荷预测任务
   * 
   * @param tmpReq - CreateLoadForecastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadForecastJobResponse
   */
  async createLoadForecastJobWithOptions(tmpReq: CreateLoadForecastJobRequest, runtime: $dara.RuntimeOptions): Promise<CreateLoadForecastJobResponse> {
    tmpReq.validate();
    let request = new CreateLoadForecastJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.historyData)) {
      request.historyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.historyData, "HistoryData", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.historyDataShrink)) {
      body["HistoryData"] = request.historyDataShrink;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadForecastJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLoadForecastJobResponse>(await this.callApi(params, req, runtime), new CreateLoadForecastJobResponse({}));
    } else {
      return $dara.cast<CreateLoadForecastJobResponse>(await this.execute(params, req, runtime), new CreateLoadForecastJobResponse({}));
    }

  }

  /**
   * 创建用电负荷预测任务
   * 
   * @param request - CreateLoadForecastJobRequest
   * @returns CreateLoadForecastJobResponse
   */
  async createLoadForecastJob(request: CreateLoadForecastJobRequest): Promise<CreateLoadForecastJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadForecastJobWithOptions(request, runtime);
  }

  /**
   * 创建发电功率预测任务
   * 
   * @param tmpReq - CreatePowerForecastJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePowerForecastJobResponse
   */
  async createPowerForecastJobWithOptions(tmpReq: CreatePowerForecastJobRequest, runtime: $dara.RuntimeOptions): Promise<CreatePowerForecastJobResponse> {
    tmpReq.validate();
    let request = new CreatePowerForecastJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.historyData)) {
      request.historyDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.historyData, "HistoryData", "json");
    }

    if (!$dara.isNull(tmpReq.location)) {
      request.locationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.location, "Location", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deviceType)) {
      body["DeviceType"] = request.deviceType;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.freq)) {
      body["Freq"] = request.freq;
    }

    if (!$dara.isNull(request.historyDataShrink)) {
      body["HistoryData"] = request.historyDataShrink;
    }

    if (!$dara.isNull(request.locationShrink)) {
      body["Location"] = request.locationShrink;
    }

    if (!$dara.isNull(request.modelVersion)) {
      body["ModelVersion"] = request.modelVersion;
    }

    if (!$dara.isNull(request.runDate)) {
      body["RunDate"] = request.runDate;
    }

    if (!$dara.isNull(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!$dara.isNull(request.timeZone)) {
      body["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePowerForecastJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePowerForecastJobResponse>(await this.callApi(params, req, runtime), new CreatePowerForecastJobResponse({}));
    } else {
      return $dara.cast<CreatePowerForecastJobResponse>(await this.execute(params, req, runtime), new CreatePowerForecastJobResponse({}));
    }

  }

  /**
   * 创建发电功率预测任务
   * 
   * @param request - CreatePowerForecastJobRequest
   * @returns CreatePowerForecastJobResponse
   */
  async createPowerForecastJob(request: CreatePowerForecastJobRequest): Promise<CreatePowerForecastJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPowerForecastJobWithOptions(request, runtime);
  }

  /**
   * 查询aivpp算法job
   * 
   * @param request - GetAivppAlgoJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAivppAlgoJobResponse
   */
  async getAivppAlgoJobWithOptions(request: GetAivppAlgoJobRequest, runtime: $dara.RuntimeOptions): Promise<GetAivppAlgoJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAivppAlgoJob",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAivppAlgoJobResponse>(await this.callApi(params, req, runtime), new GetAivppAlgoJobResponse({}));
    } else {
      return $dara.cast<GetAivppAlgoJobResponse>(await this.execute(params, req, runtime), new GetAivppAlgoJobResponse({}));
    }

  }

  /**
   * 查询aivpp算法job
   * 
   * @param request - GetAivppAlgoJobRequest
   * @returns GetAivppAlgoJobResponse
   */
  async getAivppAlgoJob(request: GetAivppAlgoJobRequest): Promise<GetAivppAlgoJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAivppAlgoJobWithOptions(request, runtime);
  }

  /**
   * License详情
   * 
   * @param request - GetLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLicenseResponse
   */
  async getLicenseWithOptions(request: GetLicenseRequest, runtime: $dara.RuntimeOptions): Promise<GetLicenseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLicense",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLicenseResponse>(await this.callApi(params, req, runtime), new GetLicenseResponse({}));
    } else {
      return $dara.cast<GetLicenseResponse>(await this.execute(params, req, runtime), new GetLicenseResponse({}));
    }

  }

  /**
   * License详情
   * 
   * @param request - GetLicenseRequest
   * @returns GetLicenseResponse
   */
  async getLicense(request: GetLicenseRequest): Promise<GetLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLicenseWithOptions(request, runtime);
  }

  /**
   * 获取用户AIVPP资源列表
   * 
   * @param request - ListAivppResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAivppResourcesResponse
   */
  async listAivppResourcesWithOptions(request: ListAivppResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListAivppResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAivppResources",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAivppResourcesResponse>(await this.callApi(params, req, runtime), new ListAivppResourcesResponse({}));
    } else {
      return $dara.cast<ListAivppResourcesResponse>(await this.execute(params, req, runtime), new ListAivppResourcesResponse({}));
    }

  }

  /**
   * 获取用户AIVPP资源列表
   * 
   * @param request - ListAivppResourcesRequest
   * @returns ListAivppResourcesResponse
   */
  async listAivppResources(request: ListAivppResourcesRequest): Promise<ListAivppResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAivppResourcesWithOptions(request, runtime);
  }

  /**
   * License列表
   * 
   * @param request - ListLicensesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLicensesResponse
   */
  async listLicensesWithOptions(request: ListLicensesRequest, runtime: $dara.RuntimeOptions): Promise<ListLicensesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryStr)) {
      body["QueryStr"] = request.queryStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLicenses",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLicensesResponse>(await this.callApi(params, req, runtime), new ListLicensesResponse({}));
    } else {
      return $dara.cast<ListLicensesResponse>(await this.execute(params, req, runtime), new ListLicensesResponse({}));
    }

  }

  /**
   * License列表
   * 
   * @param request - ListLicensesRequest
   * @returns ListLicensesResponse
   */
  async listLicenses(request: ListLicensesRequest): Promise<ListLicensesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLicensesWithOptions(request, runtime);
  }

  /**
   * 获取用户资源列表
   * 
   * @param request - ListUserResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserResourcesResponse
   */
  async listUserResourcesWithOptions(request: ListUserResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListUserResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserResources",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListUserResourcesResponse>(await this.callApi(params, req, runtime), new ListUserResourcesResponse({}));
    } else {
      return $dara.cast<ListUserResourcesResponse>(await this.execute(params, req, runtime), new ListUserResourcesResponse({}));
    }

  }

  /**
   * 获取用户资源列表
   * 
   * @param request - ListUserResourcesRequest
   * @returns ListUserResourcesResponse
   */
  async listUserResources(request: ListUserResourcesRequest): Promise<ListUserResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserResourcesWithOptions(request, runtime);
  }

  /**
   * 调用aics openapi
   * 
   * @param request - OpenApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenApiInvokeResponse
   */
  async openApiInvokeWithOptions(request: OpenApiInvokeRequest, runtime: $dara.RuntimeOptions): Promise<OpenApiInvokeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.param)) {
      body["Param"] = request.param;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenApiInvoke",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<OpenApiInvokeResponse>(await this.callApi(params, req, runtime), new OpenApiInvokeResponse({}));
    } else {
      return $dara.cast<OpenApiInvokeResponse>(await this.execute(params, req, runtime), new OpenApiInvokeResponse({}));
    }

  }

  /**
   * 调用aics openapi
   * 
   * @param request - OpenApiInvokeRequest
   * @returns OpenApiInvokeResponse
   */
  async openApiInvoke(request: OpenApiInvokeRequest): Promise<OpenApiInvokeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openApiInvokeWithOptions(request, runtime);
  }

  /**
   * 更新license描述
   * 
   * @param request - UpdateLicenseDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLicenseDescriptionResponse
   */
  async updateLicenseDescriptionWithOptions(request: UpdateLicenseDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<UpdateLicenseDescriptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLicenseDescription",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateLicenseDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateLicenseDescriptionResponse({}));
    } else {
      return $dara.cast<UpdateLicenseDescriptionResponse>(await this.execute(params, req, runtime), new UpdateLicenseDescriptionResponse({}));
    }

  }

  /**
   * 更新license描述
   * 
   * @param request - UpdateLicenseDescriptionRequest
   * @returns UpdateLicenseDescriptionResponse
   */
  async updateLicenseDescription(request: UpdateLicenseDescriptionRequest): Promise<UpdateLicenseDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLicenseDescriptionWithOptions(request, runtime);
  }

}
