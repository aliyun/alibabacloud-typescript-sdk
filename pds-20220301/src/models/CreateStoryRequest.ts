// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";


export class CreateStoryRequest extends $dara.Model {
  address?: Address;
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
   * @example
   * 30
   * 
   * **if can be null:**
   * true
   */
  maxImageCount?: number;
  /**
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   */
  minImageCount?: number;
  /**
   * @example
   * 2022-12-30T16:00:00Z
   */
  storyEndTime?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  storyName?: string;
  /**
   * @example
   * 2016-12-30T16:00:00Z
   */
  storyStartTime?: string;
  /**
   * @example
   * Food
   */
  storySubType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TagMemory
   */
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      customLabels: 'custom_labels',
      driveId: 'drive_id',
      maxImageCount: 'max_image_count',
      minImageCount: 'min_image_count',
      storyEndTime: 'story_end_time',
      storyId: 'story_id',
      storyName: 'story_name',
      storyStartTime: 'story_start_time',
      storySubType: 'story_sub_type',
      storyType: 'story_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      driveId: 'string',
      maxImageCount: 'number',
      minImageCount: 'number',
      storyEndTime: 'string',
      storyId: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  validate() {
    if(this.address && typeof (this.address as any).validate === 'function') {
      (this.address as any).validate();
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

