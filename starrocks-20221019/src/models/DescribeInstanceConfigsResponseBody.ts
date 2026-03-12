// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigsResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  allowModify?: string;
  /**
   * @example
   * enable_udf
   */
  configKey?: string;
  /**
   * @example
   * FE
   */
  configType?: string;
  /**
   * @example
   * false
   */
  configValue?: string;
  /**
   * @example
   * false
   */
  custom?: boolean;
  /**
   * @example
   * true
   */
  defaultNodeGroup?: boolean;
  /**
   * @example
   * true
   */
  defaultValue?: string;
  description?: string;
  /**
   * @example
   * A boolean value to control whether to enable the synchronization of the tablet metadata. true indicates enabling synchronization, and false indicates disabling it.
   */
  descriptionEn?: string;
  /**
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @example
   * ng_1
   */
  nodeGroupName?: string;
  /**
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @example
   * s
   */
  unit?: string;
  /**
   * @example
   * true,false
   */
  valueRange?: string;
  /**
   * @example
   * INT
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      allowModify: 'AllowModify',
      configKey: 'ConfigKey',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      custom: 'Custom',
      defaultNodeGroup: 'DefaultNodeGroup',
      defaultValue: 'DefaultValue',
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      restart: 'Restart',
      unit: 'Unit',
      valueRange: 'ValueRange',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowModify: 'string',
      configKey: 'string',
      configType: 'string',
      configValue: 'string',
      custom: 'boolean',
      defaultNodeGroup: 'boolean',
      defaultValue: 'string',
      description: 'string',
      descriptionEn: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      restart: 'boolean',
      unit: 'string',
      valueRange: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  data?: DescribeInstanceConfigsResponseBodyData[];
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
   * 4
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
      data: { 'type': 'array', 'itemType': DescribeInstanceConfigsResponseBodyData },
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

