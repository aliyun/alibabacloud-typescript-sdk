// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindAllContacterRequest extends $dara.Model {
  appName?: string;
  localeString?: string;
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      localeString: 'LocaleString',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      localeString: 'string',
      type: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

