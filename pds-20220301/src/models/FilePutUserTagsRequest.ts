// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilePutUserTagsRequestUserTags } from "./FilePutUserTagsRequestUserTags";


export class FilePutUserTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9520943DC264
   */
  fileId?: string;
  /**
   * @remarks
   * The tags to be added to the file. You cannot leave this parameter empty. You can specify up to 1,000 tags. You cannot specify tags that have the same name.
   * 
   * This parameter is required.
   */
  userTags?: FilePutUserTagsRequestUserTags[];
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      fileId: 'file_id',
      userTags: 'user_tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      fileId: 'string',
      userTags: { 'type': 'array', 'itemType': FilePutUserTagsRequestUserTags },
    };
  }

  validate() {
    if(Array.isArray(this.userTags)) {
      $dara.Model.validateArray(this.userTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

