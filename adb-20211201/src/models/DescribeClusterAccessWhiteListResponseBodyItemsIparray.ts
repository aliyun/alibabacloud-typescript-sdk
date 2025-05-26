// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAccessWhiteListResponseBodyItemsIPArray extends $dara.Model {
  /**
   * @remarks
   * The attribute of the whitelist.
   * 
   * > Whitelists with the **hidden** attribute are not displayed in the console. Those whitelists are used to access Data Transmission Service (DTS) and PolarDB.
   * 
   * @example
   * hidden
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * Each cluster supports up to 50 IP address whitelists.
   * 
   * @example
   * test
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist. Up to 500 IP addresses can be returned. Multiple IP addresses are separated by commas (,).
   * 
   * @example
   * 127.0.xx.xx
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

