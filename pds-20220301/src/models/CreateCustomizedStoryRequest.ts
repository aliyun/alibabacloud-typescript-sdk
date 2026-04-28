// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomizedStoryRequestStoryCover extends $dara.Model {
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
   * 642a88d4aff041ee68fd4fc89beb80e1119da343
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

export class CreateCustomizedStoryRequestStoryFiles extends $dara.Model {
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
   * 642a88d4aff041ee68fd4fc89beb80e1119da343
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

export class CreateCustomizedStoryRequest extends $dara.Model {
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
   */
  storyCover?: CreateCustomizedStoryRequestStoryCover;
  /**
   * @remarks
   * This parameter is required.
   */
  storyFiles?: CreateCustomizedStoryRequestStoryFiles[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_name
   */
  storyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_created
   */
  storySubType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_created
   */
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      storyCover: 'story_cover',
      storyFiles: 'story_files',
      storyName: 'story_name',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      storyCover: CreateCustomizedStoryRequestStoryCover,
      storyFiles: { 'type': 'array', 'itemType': CreateCustomizedStoryRequestStoryFiles },
      storyName: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  validate() {
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(this.storyCover && typeof (this.storyCover as any).validate === 'function') {
      (this.storyCover as any).validate();
    }
    if(Array.isArray(this.storyFiles)) {
      $dara.Model.validateArray(this.storyFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

