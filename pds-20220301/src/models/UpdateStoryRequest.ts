// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStoryRequestCover extends $dara.Model {
  /**
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

export class UpdateStoryRequest extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  cover?: UpdateStoryRequestCover;
  /**
   * @deprecated
   */
  customLabels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  /**
   * @example
   * name1
   * 
   * **if can be null:**
   * true
   */
  storyName?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'cover',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      storyId: 'story_id',
      storyName: 'story_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: UpdateStoryRequestCover,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      storyId: 'string',
      storyName: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

