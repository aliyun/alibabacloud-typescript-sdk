// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagsForPrivateAccessApplicationResponseBodyApplications } from "./ListTagsForPrivateAccessApplicationResponseBodyApplications";


export class ListTagsForPrivateAccessApplicationResponseBody extends $dara.Model {
  applications?: ListTagsForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @example
   * 7241F45B-E8D3-5BA3-8172-8A58AC2AB0FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

