// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesRequest extends $dara.Model {
  dbVersion?: string;
  /**
   * @example
   * dinga93c84f4d***
   */
  instanceId?: string;
  mustHasCdc?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmyst47hjw***
   */
  resourceGroupId?: string;
  /**
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @example
   * [{\\"TagKey\\":\\"test\\",\\"TagValue\\":\\"test-value\\"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      dbVersion: 'DbVersion',
      instanceId: 'InstanceId',
      mustHasCdc: 'MustHasCdc',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      series: 'Series',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbVersion: 'string',
      instanceId: 'string',
      mustHasCdc: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      series: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

