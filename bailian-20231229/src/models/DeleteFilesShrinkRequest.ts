// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the files to be deleted. A maximum of 20 files can be deleted in a single request.
   * 
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

