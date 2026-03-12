// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceConfigsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowModify?: boolean;
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
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  needTotal?: boolean;
  /**
   * @example
   * ng-3d5ce6454354****
   */
  nodeGroupId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

