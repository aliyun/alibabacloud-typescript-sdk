// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdkGenerateByGroupResponseBody extends $dara.Model {
  /**
   * @example
   * http://oss-bucket/object
   */
  downloadLink?: string;
  /**
   * @example
   * D0075BDA-8AED-5073-A70A-FE44E86AB20F
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

