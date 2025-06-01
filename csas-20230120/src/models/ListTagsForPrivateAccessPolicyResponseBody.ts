// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagsForPrivateAccessPolicyResponseBodyPolices } from "./ListTagsForPrivateAccessPolicyResponseBodyPolices";


export class ListTagsForPrivateAccessPolicyResponseBody extends $dara.Model {
  polices?: ListTagsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 9EE61139-A6A8-5E13-80AF-83435C21B26B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

