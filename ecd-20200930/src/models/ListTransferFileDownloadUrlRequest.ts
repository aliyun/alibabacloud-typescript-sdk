// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransferFileDownloadUrlRequest extends $dara.Model {
  fileIds?: string[];
  /**
   * @example
   * trt-hffhi4nmqoi4****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      fileIds: 'FileIds',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileIds: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
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

