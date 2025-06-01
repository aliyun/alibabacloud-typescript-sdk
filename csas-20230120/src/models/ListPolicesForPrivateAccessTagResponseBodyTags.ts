// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPolicesForPrivateAccessTagResponseBodyTagsPolices } from "./ListPolicesForPrivateAccessTagResponseBodyTagsPolices";


export class ListPolicesForPrivateAccessTagResponseBodyTags extends $dara.Model {
  polices?: ListPolicesForPrivateAccessTagResponseBodyTagsPolices[];
  /**
   * @example
   * tag-b927baf3e592****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTagsPolices },
      tagId: 'string',
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

