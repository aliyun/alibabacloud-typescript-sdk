// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdkGenerateByAppResponseBody extends $dara.Model {
  /**
   * @example
   * UEsDBBQACAAIADdwnFQAAAAAAAAAAAAAAAA2AAAAQ0FTREtfSkFWQV8xMjI3NDY2NjY0MzM0MTMzXzE2NTExMjU3MD......
   */
  downloadLink?: string;
  /**
   * @example
   * 61A16D46-EC04-5288-8A18-811B0F536CC2
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

