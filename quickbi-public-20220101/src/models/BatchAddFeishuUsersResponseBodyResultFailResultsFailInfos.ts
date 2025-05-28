// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddFeishuUsersResponseBodyResultFailResultsFailInfos extends $dara.Model {
  /**
   * @example
   * ACCOUNT_EXIST
   */
  code?: string;
  codeDesc?: string;
  /**
   * @example
   * 20
   */
  input?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeDesc: 'CodeDesc',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeDesc: 'string',
      input: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

