// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobRecordDurationResponseBody extends $dara.Model {
  /**
   * @example
   * 30
   */
  jobRecordDuration?: number;
  /**
   * @remarks
   * Id of the request
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

