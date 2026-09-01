// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEmgVulSubmitRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
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
   * Specifies whether to perform vulnerability detection. Valid values:
   * 
   * - **yes**: Perform vulnerability detection.
   * 
   * - **no**: Do not perform vulnerability detection.
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
      lang: 'Lang',
      name: 'Name',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      userAgreement: 'UserAgreement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

