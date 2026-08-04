// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindContacterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contacterId?: number;
  localeString?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contacterId: 'ContacterId',
      localeString: 'LocaleString',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacterId: 'number',
      localeString: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

