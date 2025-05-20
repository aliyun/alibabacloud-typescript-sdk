// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStoryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * 9132e0d8-fe92-4e56-86c3-f5f112308003
   */
  storyId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      storyId: 'story_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      storyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

