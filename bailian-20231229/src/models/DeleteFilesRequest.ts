// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fileIds?: string[];
  static names(): { [key: string]: string } {
    return {
      fileIds: 'FileIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

