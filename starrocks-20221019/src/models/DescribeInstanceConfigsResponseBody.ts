// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the configuration item can be modified.
   * 
   * @example
   * true
   */
  allowModify?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * enable_udf
   */
  configKey?: string;
  /**
   * @remarks
   * The type of the configuration item. Valid values:
   * 
   * - FE
   * 
   * - BE
   * 
   * - CORE
   * 
   * @example
   * FE
   */
  configType?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * false
   */
  configValue?: string;
  /**
   * @remarks
   * Indicates whether the item is a custom configuration.
   * 
   * @example
   * false
   */
  custom?: boolean;
  /**
   * @remarks
   * Indicates whether it is the default compute group.
   * 
   * @example
   * true
   */
  defaultNodeGroup?: boolean;
  /**
   * @remarks
   * The default value of the configuration item.
   * 
   * @example
   * true
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the configuration item\\"s feature.
   * 
   * @example
   * Whether to enable UDF.
   */
  description?: string;
  /**
   * @remarks
   * The English description of the configuration item.
   * 
   * @example
   * A boolean value to control whether to enable the synchronization of the tablet metadata. true indicates enabling synchronization, and false indicates disabling it.
   */
  descriptionEn?: string;
  /**
   * @remarks
   * The compute group ID.
   * 
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the compute group.
   * 
   * @example
   * ng_1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be restarted after the configuration item is changed. Valid values:
   * 
   * - **true**: Restart.
   * 
   * - **false**: Do not restart.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * The unit of the configuration item. An empty string is returned if no unit is available.
   * 
   * @example
   * s
   */
  unit?: string;
  /**
   * @remarks
   * The value range of the configuration item. An empty string is returned if no value range is available.
   * 
   * @example
   * true,false
   */
  valueRange?: string;
  /**
   * @remarks
   * The data type of the configuration item\\"s value.
   * 
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
   * @remarks
   * The details of the access denied error.
   * 
   * @example
   * {     "PolicyType": "AccountLevelIdentityBasedPolicy",     "AuthPrincipalOwnerId": "xxx",     "EncodedDiagnosticMessage": "xxx",     "AuthPrincipalType": "xxx",     "AuthPrincipalDisplayName": "xxx",     "NoPermissionType": "ImplicitDeny",     "AuthAction": "sr:xxx"   }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeInstanceConfigsResponseBodyData[];
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
   * The HTTP request status code.
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
   * Indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of query results.
   * 
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

