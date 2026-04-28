// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStoryFilesRequestFiles extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 63e5e4340f76cb3ead5f40f68163f0f967c1a7bf
   */
  fileId?: string;
  /**
   * @example
   * 642a88dd06e49d9c0a14411ebae606f70edd9a59
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'file_id',
      revisionId: 'revision_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      revisionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  files?: AddStoryFilesRequestFiles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      files: 'files',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      files: { 'type': 'array', 'itemType': AddStoryFilesRequestFiles },
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

