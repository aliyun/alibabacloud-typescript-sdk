// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAccessWhiteListResponseBodyItemsIPArray extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist.
   * 
   * >  The IP address whitelists that have the **hidden** attribute are not displayed in the console. These IP address whitelists are used to access services such as Data Transmission Service (DTS) and PolarDB.
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

export class DescribeClusterAccessWhiteListResponseBodyItems extends $dara.Model {
  IPArray?: DescribeClusterAccessWhiteListResponseBodyItemsIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeClusterAccessWhiteListResponseBodyItemsIPArray },
    };
  }

  validate() {
    if(Array.isArray(this.IPArray)) {
      $dara.Model.validateArray(this.IPArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterAccessWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried IP address whitelists.
   */
  items?: DescribeClusterAccessWhiteListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 370D09FD-442A-5225-AAD3-7362CAE39177
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeClusterAccessWhiteListResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

