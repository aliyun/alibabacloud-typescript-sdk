// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportMeasurementDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download path of the exported file.
   * 
   * @example
   * http://test-oss.com/image_01.jpeg
   */
  filePath?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
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

