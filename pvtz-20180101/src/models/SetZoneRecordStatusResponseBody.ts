// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetZoneRecordStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNS record.
   * 
   * @example
   * 207541****
   */
  recordId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39CB16E5-4180-49F2-A060-23C0ECEB80D9
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the DNS record. Valid values:
   * 
   * *   ENABLE: The DNS record is enabled.
   * *   DISABLE: The DNS record is disabled.
   * 
   * @example
   * DISABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

