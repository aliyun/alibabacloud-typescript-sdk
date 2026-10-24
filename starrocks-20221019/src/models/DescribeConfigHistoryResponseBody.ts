// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigHistoryResponseBodyDataConfigHistoryEffectDetails extends $dara.Model {
  /**
   * @remarks
   * The effective status.
   * 
   * @example
   * effective
   */
  effectStatus?: string;
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * ng-e6e15d2cdefdb38c
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node ID.
   * 
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
   * @remarks
   * The modification type. Valid values:
   * 
   * - MODIFY
   * 
   * - ADD
   * 
   * - DELETE
   * 
   * @example
   * MODIFY
   */
  action?: string;
  /**
   * @remarks
   * The value after the modification.
   * 
   * @example
   * 4
   */
  after?: string;
  /**
   * @remarks
   * The value before the modification.
   * 
   * @example
   * 3
   */
  before?: string;
  /**
   * @remarks
   * The name of the configuration item.
   * 
   * @example
   * create_tablet_worker_count
   */
  configKey?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - FE
   * 
   * - BE
   * 
   * - core-site.xml
   * 
   * - hdfs-site.xml
   * 
   * - kerberos.keytab
   * 
   * - krb5.conf
   * 
   * - jindosdk.cfg
   * 
   * - hadoop-env.sh
   * 
   * - hive-site.xml
   * 
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
  /**
   * @remarks
   * The details of the configuration history.
   */
  configHistoryEffectDetails?: DescribeConfigHistoryResponseBodyDataConfigHistoryEffectDetails[];
  /**
   * @remarks
   * The configuration history ID.
   * 
   * @example
   * 6838
   */
  configHistoryId?: string;
  /**
   * @remarks
   * The records of configuration values before and after the modification.
   */
  configMementos?: DescribeConfigHistoryResponseBodyDataConfigMementos[];
  /**
   * @remarks
   * The effective status.
   * 
   * @example
   * effective
   */
  effectStatus?: string;
  /**
   * @remarks
   * Indicates whether the configuration modification has taken effect.
   * 
   * @example
   * true
   */
  effected?: boolean;
  /**
   * @remarks
   * The time when the configuration was modified.
   * 
   * @example
   * 1742178604000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The ID of the user who modified the configuration.
   * 
   * @example
   * 149920818483****
   */
  operatorId?: string;
  /**
   * @remarks
   * The reason for modifying the configuration.
   * 
   * @example
   * Test.
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the operation is a configuration rollback.
   * 
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
   * @remarks
   * The details of the permission check failure.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeConfigHistoryResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParams
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Invalid params: [instance not exists].
   */
  errMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32A44F0D-BFF6-5664-999A-218BBDE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
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

