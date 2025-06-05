// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecognitionSampleResponseBody extends $dara.Model {
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @example
   * **************4d2ba728e2f**************
   */
  sampleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sampleId: 'SampleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sampleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

