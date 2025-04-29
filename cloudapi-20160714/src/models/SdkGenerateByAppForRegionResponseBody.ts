// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdkGenerateByAppForRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code of the SDK by using the Base64 scheme. You can obtain the file by using the Base64 decoding scheme.
   * 
   * @example
   * UEsDBBQACAAIADdwnFQAAAAAAAAAAAAAAAA2AAAAQ0FTREtfSkFWQV8xMjI3NDY2NjY0MzM0MTMzXzE2NTExMjU3MD......
   */
  downloadLink?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C817D360510
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadLink: 'DownloadLink',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadLink: 'string',
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

