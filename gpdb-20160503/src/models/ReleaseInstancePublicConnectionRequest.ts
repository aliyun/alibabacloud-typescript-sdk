// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstancePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the endpoint. Default value: primary. Valid values:
   * 
   * *   **primary**: primary endpoint.
   * *   **cluster**: cluster endpoint. This type of endpoints can be created only for instances that have multiple coordinator nodes.
   * 
   * @example
   * Intranet
   */
  addressType?: string;
  /**
   * @remarks
   * The public endpoint of the instance.
   * 
   * You can log on to the AnalyticDB for PostgreSQL console and go to the **Basic Information** page of the instance to view the **public endpoint** in the **Database Connection** section.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****.gpdb.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      currentConnectionString: 'string',
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

