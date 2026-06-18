// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of IDs of the files to be deleted. A maximum of 20 files can be deleted in a single request.
   * 
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

