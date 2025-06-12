// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAccessWhiteListResponseBodyDBClusterAccessWhiteList } from "./DescribeDbclusterAccessWhiteListResponseBodyDbclusterAccessWhiteList";


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

