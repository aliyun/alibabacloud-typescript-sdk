// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsForPrivateAccessTagResponseBodyTagsApplications } from "./ListApplicationsForPrivateAccessTagResponseBodyTagsApplications";


export class ListApplicationsForPrivateAccessTagResponseBodyTags extends $dara.Model {
  applications?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplications[];
  /**
   * @example
   * tag-7ffc82853476****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTagsApplications },
      tagId: 'string',
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

