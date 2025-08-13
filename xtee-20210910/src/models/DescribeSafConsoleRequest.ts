// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSafConsoleRequest extends $dara.Model {
  lang?: string;
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      content: 'content',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      content: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

