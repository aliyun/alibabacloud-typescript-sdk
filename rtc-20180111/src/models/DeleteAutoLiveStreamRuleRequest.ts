// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoLiveStreamRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query it in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the bypass rule. You can query the ID in the console or by calling the [DescribeAutoLiveStreamRule](https://help.aliyun.com/document_detail/353198.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      ownerId: 'OwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      ownerId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

