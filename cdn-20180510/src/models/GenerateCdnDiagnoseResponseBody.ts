// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCdnDiagnoseResponseBody extends $dara.Model {
  /**
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose/?id=xxxxxxx
   */
  content?: string;
  /**
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

