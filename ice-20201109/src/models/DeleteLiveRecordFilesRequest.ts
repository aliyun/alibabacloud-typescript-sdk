// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveRecordFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of IDs of recording files.
   * 
   * This parameter is required.
   */
  recordIds?: string[];
  /**
   * @remarks
   * Specifies whether to delete the original files in OSS.
   * 
   * @example
   * true
   */
  removeFile?: boolean;
  static names(): { [key: string]: string } {
    return {
      recordIds: 'RecordIds',
      removeFile: 'RemoveFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordIds: { 'type': 'array', 'itemType': 'string' },
      removeFile: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.recordIds)) {
      $dara.Model.validateArray(this.recordIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

