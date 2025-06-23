// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesV2Request extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website that you want to add to the Anti-DDoS Proxy instance for protection.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of entries that you want the system to skip before the system returns entries. Default value: **0**.
   * 
   * @example
   * 0
   */
  offset?: string;
  /**
   * @remarks
   * The method used to create the rule. Valid values:
   * 
   * *   **manual** (default): manually created.
   * *   **clover**: automatically created.
   * 
   * @example
   * manual
   */
  owner?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **20**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      offset: 'Offset',
      owner: 'Owner',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      offset: 'string',
      owner: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

