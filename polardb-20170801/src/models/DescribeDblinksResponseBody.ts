// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBLinksResponseBodyDBLinkInfos } from "./DescribeDblinksResponseBodyDblinkInfos";


export class DescribeDBLinksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-a*************
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Details about the database links.
   */
  DBLinkInfos?: DescribeDBLinksResponseBodyDBLinkInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45D24263-7E3A-4140-9472-************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      DBLinkInfos: 'DBLinkInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      DBLinkInfos: { 'type': 'array', 'itemType': DescribeDBLinksResponseBodyDBLinkInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBLinkInfos)) {
      $dara.Model.validateArray(this.DBLinkInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

