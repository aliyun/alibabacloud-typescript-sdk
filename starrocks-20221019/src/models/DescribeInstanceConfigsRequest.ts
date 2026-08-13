// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the configuration item can be modified.
   * 
   * @example
   * true
   */
  allowModify?: boolean;
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
   * The description of the configuration item\\"s feature.
   * 
   * @example
   * Whether to enable UDF.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether to return all configuration items.
   * 
   * @example
   * true
   */
  needTotal?: boolean;
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
   * The page number for the query. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. The default value is 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      allowModify: 'AllowModify',
      configKey: 'ConfigKey',
      configType: 'ConfigType',
      description: 'Description',
      instanceId: 'InstanceId',
      needTotal: 'NeedTotal',
      nodeGroupId: 'NodeGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowModify: 'boolean',
      configKey: 'string',
      configType: 'string',
      description: 'string',
      instanceId: 'string',
      needTotal: 'boolean',
      nodeGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

