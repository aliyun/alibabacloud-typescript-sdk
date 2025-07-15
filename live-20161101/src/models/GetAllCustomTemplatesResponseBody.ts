// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllCustomTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The template names and template configurations returned.
   * 
   * @example
   * [{"templateConfig": "{\\"cdesc\\":\\"H264\\",\\"scale\\":\\"[3:4]\\",\\"gop\\":\\"1\\",\\"bframes\\":\\"1\\",\\"height\\":\\"1080\\"}","templateName": "custom1"},{"templateConfig": "{\\"ar\\":\\"44100\\",\\"cdesc\\":\\"H264\\",\\"scale\\":\\"[3:4]\\",\\"gop\\":\\"1\\",\\"bframes\\":\\"1\\",\\"height\\":\\"1080\\"}","templateName": "cus"}]
   */
  customTemplates?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4791648Q-813C-6254-865C-0ED913661230
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customTemplates: 'CustomTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTemplates: 'string',
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

