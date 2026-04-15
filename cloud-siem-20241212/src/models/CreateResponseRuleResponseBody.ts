// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResponseRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @example
   * 399827
   */
  responseRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responseRuleId: 'ResponseRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responseRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

