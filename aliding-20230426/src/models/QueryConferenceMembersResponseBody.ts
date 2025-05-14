// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryConferenceMembersResponseBodyMemberModels } from "./QueryConferenceMembersResponseBodyMemberModels";


export class QueryConferenceMembersResponseBody extends $dara.Model {
  memberModels?: QueryConferenceMembersResponseBodyMemberModels[];
  /**
   * @example
   * 123000000
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      memberModels: 'memberModels',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberModels: { 'type': 'array', 'itemType': QueryConferenceMembersResponseBodyMemberModels },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.memberModels)) {
      $dara.Model.validateArray(this.memberModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

