// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateFormDataRequest extends $dara.Model {
  /**
   * @example
   * APP_XCE0EVXS6DYG3YDYC5RD
   */
  appType?: string;
  /**
   * @example
   * {\\"countrySelectField_l0c1cwiu\\":[{\\"value\\":\\"US\\"}]}
   */
  formDataJson?: string;
  /**
   * @example
   * FORM-GX866MC1NC1VOFF6WVQW33FD16E23L3CPMKVKA
   */
  formUuid?: string;
  /**
   * @example
   * false
   */
  noExecuteExpression?: boolean;
  searchCondition?: string;
  /**
   * @example
   * 09866181UTZVVD4R3DC955FNKIM52HVPU5WWK7
   */
  systemToken?: string;
  /**
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formDataJson: 'FormDataJson',
      formUuid: 'FormUuid',
      noExecuteExpression: 'NoExecuteExpression',
      searchCondition: 'SearchCondition',
      systemToken: 'SystemToken',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formDataJson: 'string',
      formUuid: 'string',
      noExecuteExpression: 'boolean',
      searchCondition: 'string',
      systemToken: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

