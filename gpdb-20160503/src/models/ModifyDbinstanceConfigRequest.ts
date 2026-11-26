// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * Instance ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query instance IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The idle release wait time. After the instance has no service traffic for the specified duration, the instance enters the idle state. Unit: seconds. Minimum value: 60. Default value: 600.
   * 
   * @example
   * 600
   */
  idleTime?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For information about how to obtain the resource group ID, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The compute resource threshold. Valid values: 8 to 32. Unit: ACU.
   * 
   * @example
   * 32
   */
  serverlessResource?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      idleTime: 'IdleTime',
      resourceGroupId: 'ResourceGroupId',
      serverlessResource: 'ServerlessResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      idleTime: 'number',
      resourceGroupId: 'string',
      serverlessResource: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

