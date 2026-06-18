// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesRequest extends $dara.Model {
  dbVersion?: string;
  /**
   * @remarks
   * The description or remarks of the database.
   * 
   * @example
   * app-test
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dinga93c84f4d***
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the instance must have a log engine.
   * 
   * @example
   * true
   */
  mustHasCdc?: boolean;
  /**
   * @remarks
   * The page number. Starts from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - 30
   * - 50
   * - 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmyst47******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance edition. Valid values:
   * 
   * - **enterprise**: Enterprise Edition.
   * - **standard**: Standard Edition.
   * 
   * @example
   * enterprise
   */
  series?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * @example
   * [{\\"TagKey\\":\\"test\\",\\"TagValue\\":\\"test-value\\"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      dbVersion: 'DbVersion',
      description: 'Description',
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
      description: 'string',
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

