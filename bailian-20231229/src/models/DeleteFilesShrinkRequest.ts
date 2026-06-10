// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      fileIdsShrink: 'FileIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

