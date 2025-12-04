// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVmsRealNumberCallConnectionRateInfoResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 接通率
   * 
   * @example
   * 6.71672
   */
  callConnectionRate?: number;
  /**
   * @remarks
   * 接通数
   * 
   * @example
   * 52
   */
  completeCount?: number;
  /**
   * @example
   * 示例值示例值
   */
  regionId?: string;
  /**
   * @remarks
   * 请求通话数
   * 
   * @example
   * 49
   */
  requestCount?: number;
  /**
   * @example
   * 示例值
   */
  resourceId?: string;
  /**
   * @remarks
   * EcsInstance, EcsDisk, EcsImage, EcsSnapshot, EcsSecurityGroup, EcsEip, EcsVpc, EcsVRouter, EcsVSwitch, EcsVRouteTable, EcsAuthImage, EcsAll, SlbLoadbalancer, SlbVm, RdsInstance, RdsAllInstance, KvsInstance, OcsInstance, OdpsInstance
   * 
   * @example
   * 示例值
   */
  resourceType?: string;
  /**
   * @remarks
   * 响铃数
   * 
   * @example
   * 3
   */
  ringingCount?: number;
  /**
   * @remarks
   * 响铃率
   * 
   * @example
   * 25.4222
   */
  ringingRate?: number;
  static names(): { [key: string]: string } {
    return {
      callConnectionRate: 'CallConnectionRate',
      completeCount: 'CompleteCount',
      regionId: 'RegionId',
      requestCount: 'RequestCount',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      ringingCount: 'RingingCount',
      ringingRate: 'RingingRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callConnectionRate: 'number',
      completeCount: 'number',
      regionId: 'string',
      requestCount: 'number',
      resourceId: 'string',
      resourceType: 'string',
      ringingCount: 'number',
      ringingRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryVmsRealNumberCallConnectionRateInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: QueryVmsRealNumberCallConnectionRateInfoResponseBodyModel;
  /**
   * @example
   * 95B86652-B234-5387-BAC6-E441FR49399F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: QueryVmsRealNumberCallConnectionRateInfoResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

