// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDigitalWatermarkExtractJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the watermark extraction job. This ID can be used as a request parameter of the [GetDigitalWatermarkExtractResult](https://help.aliyun.com/document_detail/2587769.html) operation.
   * 
   * @example
   * ad90a501b1b9472374ad005046****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-****-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
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

