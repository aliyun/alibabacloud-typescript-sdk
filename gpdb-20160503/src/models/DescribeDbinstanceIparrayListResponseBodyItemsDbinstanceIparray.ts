// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIPArrayListResponseBodyItemsDBInstanceIPArray extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty. A whitelist with the `hidden` attribute is not displayed in the console.
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
   * default
   */
  DBInstanceIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses listed in the whitelist. Up to 1,000 IP addresses are contained in a whitelist and separated by commas (,). The IP addresses must use one of the following formats:
   * 
   * *   0.0.0.0/0
   * *   10.23.12.24. This is a standard IP address.
   * *   10.23.12.24/24. This is a CIDR block. The value `/24` indicates that the prefix of the CIDR block is 24-bit long. You can replace 24 with a value in the range of `1 to 32`.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceIPArrayAttribute: 'DBInstanceIPArrayAttribute',
      DBInstanceIPArrayName: 'DBInstanceIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceIPArrayAttribute: 'string',
      DBInstanceIPArrayName: 'string',
      securityIPList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

