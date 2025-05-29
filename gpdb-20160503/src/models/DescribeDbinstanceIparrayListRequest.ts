// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIPArrayListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the IP address whitelist. If you do not specify this parameter, the default whitelist is queried.
   * 
   * >  Each instance supports up to 50 IP address whitelists.
   * 
   * @example
   * Default
   */
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query details about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For information about how to obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      DBInstanceId: 'DBInstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayName: 'string',
      DBInstanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

