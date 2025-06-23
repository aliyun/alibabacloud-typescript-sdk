// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebCCRuleV2Request extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * >  A forwarding rule must be configured for the domain name. You can call the [DescribeDomains](https://help.aliyun.com/document_detail/91724.html) operation to query all domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The source of the rule. Valid values:
   * 
   * *   **manual** (default): manually created.
   * *   **clover**: automatically created. Specify this value when you want to delete intelligent protection rules.
   * 
   * @example
   * manual
   */
  owner?: string;
  /**
   * @remarks
   * The names of the rules that you want to delete.
   * 
   * @example
   * [\\"trdsss\\"]
   */
  ruleNames?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      owner: 'Owner',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      owner: 'string',
      ruleNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

