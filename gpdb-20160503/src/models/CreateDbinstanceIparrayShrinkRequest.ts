// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstanceIPArrayShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specified region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The property value of the IP address whitelist group.
   * 
   * @example
   * taffyFish
   */
  IPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist group.
   * 
   * This parameter is required.
   * 
   * @example
   * testarray
   */
  IPArrayName?: string;
  /**
   * @remarks
   * The list of IP addresses in the IP address whitelist group. You can specify up to 1,000 IP addresses.
   * 
   * This parameter is required.
   */
  securityIPListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      IPArrayAttribute: 'IPArrayAttribute',
      IPArrayName: 'IPArrayName',
      securityIPListShrink: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      IPArrayAttribute: 'string',
      IPArrayName: 'string',
      securityIPListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

