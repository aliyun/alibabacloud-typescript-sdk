// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindBizCategoryConfigRequest extends $dara.Model {
  localeString?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      localeString: 'LocaleString',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localeString: 'string',
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

