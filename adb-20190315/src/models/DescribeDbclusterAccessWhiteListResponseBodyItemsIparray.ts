// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist. By default, this parameter is empty.
   * 
   * >  The IP address whitelists that have the **hidden** attribute are not displayed in the console. These IP address whitelists are used to access services such as Data Transmission Service (DTS) and PolarDB-X.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * *   The name of an IP address whitelist must be 2 to 32 characters in length. The name can contain lowercase letters, digits, and underscores (_). The name must start with a lowercase letter and end with a lowercase letter or digit.
   * *   Each cluster supports up to 50 IP address whitelists.
   * 
   * @example
   * test
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist. Up to 1,000 IP addresses can be returned. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterIPArrayAttribute: 'DBClusterIPArrayAttribute',
      DBClusterIPArrayName: 'DBClusterIPArrayName',
      securityIPList: 'SecurityIPList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIPArrayAttribute: 'string',
      DBClusterIPArrayName: 'string',
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

