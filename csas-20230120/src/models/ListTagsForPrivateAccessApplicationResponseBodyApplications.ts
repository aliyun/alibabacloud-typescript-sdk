// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags } from "./ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags";


export class ListTagsForPrivateAccessApplicationResponseBodyApplications extends $dara.Model {
  /**
   * @example
   * pa-application-7a4445897856****
   */
  applicationId?: string;
  tags?: ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

