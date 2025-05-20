// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddStoryFile } from "./AddStoryFile";


export class AddStoryFilesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  files?: AddStoryFile[];
  requestId?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      files: 'files',
      requestId: 'request_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      files: { 'type': 'array', 'itemType': AddStoryFile },
      requestId: 'string',
      storyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

