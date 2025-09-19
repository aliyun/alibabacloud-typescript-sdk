// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateMaliciousNoteRequestImageMaliciousFileList extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert.
   * 
   * >  You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to query the alert IDs.
   * 
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Malware sample
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'number',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateMaliciousNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The batches.
   */
  imageMaliciousFileList?: BatchCreateMaliciousNoteRequestImageMaliciousFileList[];
  static names(): { [key: string]: string } {
    return {
      imageMaliciousFileList: 'ImageMaliciousFileList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageMaliciousFileList: { 'type': 'array', 'itemType': BatchCreateMaliciousNoteRequestImageMaliciousFileList },
    };
  }

  validate() {
    if(Array.isArray(this.imageMaliciousFileList)) {
      $dara.Model.validateArray(this.imageMaliciousFileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

