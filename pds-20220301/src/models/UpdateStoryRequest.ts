// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateStoryRequestCover } from "./UpdateStoryRequestCover";


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

