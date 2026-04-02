// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTempFileTasksRequest extends $dara.Model {
  tempFileTaskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tempFileTaskIds: 'TempFileTaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tempFileTaskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tempFileTaskIds)) {
      $dara.Model.validateArray(this.tempFileTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

