// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceIPArrayRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The attribute of the IP whitelist group.
   * 
   * @example
   * taffyFish
   */
  IPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP whitelist group.
   * 
   * This parameter is required.
   * 
   * @example
   * testarray
   */
  IPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP whitelist group. A maximum of 1,000 IP addresses or CIDR blocks are allowed.
   * 
   * This parameter is required.
   */
  securityIPList?: string[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      IPArrayAttribute: 'IPArrayAttribute',
      IPArrayName: 'IPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      IPArrayAttribute: 'string',
      IPArrayName: 'string',
      securityIPList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.securityIPList)) {
      $dara.Model.validateArray(this.securityIPList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

