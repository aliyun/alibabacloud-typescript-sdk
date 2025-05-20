// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStoryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  driveId?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

