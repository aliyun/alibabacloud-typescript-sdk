// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateFormDataRequest extends $dara.Model {
  appType?: string;
  formDataJson?: string;
  formUuid?: string;
  noExecuteExpression?: boolean;
  searchCondition?: string;
  systemToken?: string;
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

