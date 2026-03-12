// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigHistoryResponseBodyDataConfigHistoryEffectDetails extends $dara.Model {
  /**
   * @example
   * effective
   */
  effectStatus?: string;
  /**
   * @example
   * ng-e6e15d2cdefdb38c
   */
  nodeGroupId?: string;
  /**
   * @example
   * 10000367486
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      effectStatus: 'EffectStatus',
      nodeGroupId: 'NodeGroupId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectStatus: 'string',
      nodeGroupId: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigHistoryResponseBodyDataConfigMementos extends $dara.Model {
  /**
   * @example
   * MODIFY
   */
  action?: string;
  /**
   * @example
   * 4
   */
  after?: string;
  /**
   * @example
   * 3
   */
  before?: string;
  /**
   * @example
   * create_tablet_worker_count
   */
  configKey?: string;
  /**
   * @example
   * FE
   */
  configType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      after: 'After',
      before: 'Before',
      configKey: 'ConfigKey',
      configType: 'ConfigType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      after: 'string',
      before: 'string',
      configKey: 'string',
      configType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigHistoryResponseBodyData extends $dara.Model {
  configHistoryEffectDetails?: DescribeConfigHistoryResponseBodyDataConfigHistoryEffectDetails[];
  /**
   * @example
   * 6838
   */
  configHistoryId?: string;
  configMementos?: DescribeConfigHistoryResponseBodyDataConfigMementos[];
  /**
   * @example
   * effective
   */
  effectStatus?: string;
  /**
   * @example
   * true
   */
  effected?: boolean;
  /**
   * @example
   * 1742178604000
   */
  gmtCreate?: number;
  /**
   * @example
   * 149920818483****
   */
  operatorId?: string;
  /**
   * @example
   * Test.
   */
  reason?: string;
  /**
   * @example
   * false
   */
  rollback?: boolean;
  static names(): { [key: string]: string } {
    return {
      configHistoryEffectDetails: 'ConfigHistoryEffectDetails',
      configHistoryId: 'ConfigHistoryId',
      configMementos: 'ConfigMementos',
      effectStatus: 'EffectStatus',
      effected: 'Effected',
      gmtCreate: 'GmtCreate',
      operatorId: 'OperatorId',
      reason: 'Reason',
      rollback: 'Rollback',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistoryEffectDetails: { 'type': 'array', 'itemType': DescribeConfigHistoryResponseBodyDataConfigHistoryEffectDetails },
      configHistoryId: 'string',
      configMementos: { 'type': 'array', 'itemType': DescribeConfigHistoryResponseBodyDataConfigMementos },
      effectStatus: 'string',
      effected: 'boolean',
      gmtCreate: 'number',
      operatorId: 'string',
      reason: 'string',
      rollback: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.configHistoryEffectDetails)) {
      $dara.Model.validateArray(this.configHistoryEffectDetails);
    }
    if(Array.isArray(this.configMementos)) {
      $dara.Model.validateArray(this.configMementos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: DescribeConfigHistoryResponseBodyData[];
  /**
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': DescribeConfigHistoryResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

