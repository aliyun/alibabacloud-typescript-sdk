// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty.
   * 
   * >  A whitelist with the hidden attribute does not appear in the console. Such IP address whitelists are used to access Alibaba Cloud services, such as Data Transmission Service (DTS).
   * 
   * @example
   * hidden
   */
  DBInstanceIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * @example
   * rds_default
   */
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist.
   * 
   * @example
   * 192.168.1.0/24
   */
  securityIPList?: string;
  /**
   * @remarks
   * The type of the IP address.
   * 
   * @example
   * IPv4
   */
  securityIPType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      securityIPList: 'SecurityIPList',
      securityIPType: 'SecurityIPType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      securityIPList: 'string',
      securityIPType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

