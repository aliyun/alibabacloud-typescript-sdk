// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCustomizedStoryRequestStoryCover } from "./CreateCustomizedStoryRequestStoryCover";
import { CreateCustomizedStoryRequestStoryFiles } from "./CreateCustomizedStoryRequestStoryFiles";


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

