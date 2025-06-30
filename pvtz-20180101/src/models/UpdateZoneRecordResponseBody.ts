// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateZoneRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 172223****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 250E2C38-D0AD-4518-851D-1C1055805F82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

