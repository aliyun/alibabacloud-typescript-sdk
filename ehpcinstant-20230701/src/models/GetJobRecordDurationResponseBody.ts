// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobRecordDurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job record retention period, in days. Valid values: 1 to 30. Default value: 30.
   * 
   * @example
   * 30
   */
  jobRecordDuration?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 896D338C-E4F4-41EC-A154-D605E5DE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobRecordDuration: 'JobRecordDuration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRecordDuration: 'number',
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

