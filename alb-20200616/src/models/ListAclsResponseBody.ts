// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAclsResponseBodyAcls } from "./ListAclsResponseBodyAcls";


export class ListAclsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of ACLs.
   */
  acls?: ListAclsResponseBodyAcls[];
  /**
   * @remarks
   * The maximum number of network ACLs returned. This parameter is optional. Valid values: **1** to **100**. If this parameter is not set, the default value **20** is returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** is empty, it indicates that no next query is to be sent.
   * *   If **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * FFmyTO70t****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      acls: 'Acls',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acls: { 'type': 'array', 'itemType': ListAclsResponseBodyAcls },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.acls)) {
      $dara.Model.validateArray(this.acls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

