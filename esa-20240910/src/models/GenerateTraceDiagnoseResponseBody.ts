// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTraceDiagnoseResponseBody extends $dara.Model {
  /**
   * @example
   * 64D28B53-5902-409B-94F6-FD46680144FE
   */
  requestId?: string;
  /**
   * @example
   * http://cdn.dns-detect.alicdn.com/diagnose/?id=xxxxxxx
   */
  tip?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tip: 'Tip',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tip: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

