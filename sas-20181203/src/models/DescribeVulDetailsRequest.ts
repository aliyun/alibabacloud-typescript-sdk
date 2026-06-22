// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The vulnerability announcement.
   * 
   * @example
   * RHSA-2019:3197-Important: sudo security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The language type for the request and response. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The vulnerability name.
   * > You can call [DescribeGroupedVul](~~DescribeGroupedVul~~) or [DescribeVulList](~~DescribeVulList~~) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * SCA:ACSV-2020-052801
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource directory folder.
   * > You can invoke [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The type of vulnerability to query. Valid values:
   * 
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability
   * - **cms**: Web-CMS vulnerability
   * - **app**: application vulnerability
   * - **emg**: emergency vulnerability
   * - **sca**: software constituency parsing vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * sca
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      lang: 'Lang',
      name: 'Name',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      lang: 'string',
      name: 'string',
      resourceDirectoryAccountId: 'number',
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

