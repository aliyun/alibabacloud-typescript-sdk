// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray extends $dara.Model {
  /**
   * @remarks
   * The attribute of the IP address whitelist.
   * 
   * @example
   * default
   */
  DBClusterIPArrayAttribute?: string;
  /**
   * @remarks
   * The name of the IP address whitelist.
   * 
   * @example
   * default
   */
  DBClusterIPArrayName?: string;
  /**
   * @remarks
   * The IP addresses in the IP address whitelist.
   * 
   * @example
   * 192.168.xx.xx,192.168.xx.xx
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

export class DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList extends $dara.Model {
  IPArray?: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteListIPArray },
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

export class DescribeDBClusterAccessWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the IP address whitelist.
   */
  DBClusterAccessWhiteList?: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 905F13A4-5097-4897-A84D-527EC75FFF4F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterAccessWhiteList: 'DBClusterAccessWhiteList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterAccessWhiteList: DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBClusterAccessWhiteList && typeof (this.DBClusterAccessWhiteList as any).validate === 'function') {
      (this.DBClusterAccessWhiteList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

