// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEmgVulSubmitRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request. Use a different token for different requests. Only ASCII characters are supported. The token can be up to 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values: true: performs only a dry run without executing the actual operation. false: executes the request normally. Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The language of the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the vulnerability to query.
   * 
   * This parameter is required.
   * 
   * @example
   * scan:ASCV-2019-032401
   */
  name?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource directory (Alibaba Cloud account).
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Specifies whether to run vulnerability detection. Valid values:
   * 
   * - **yes**: Run.
   * 
   * - **no**: Do not run.
   * 
   * This parameter is required.
   * 
   * @example
   * yes
   */
  userAgreement?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      lang: 'Lang',
      name: 'Name',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      userAgreement: 'UserAgreement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      lang: 'string',
      name: 'string',
      resourceDirectoryAccountId: 'number',
      userAgreement: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

