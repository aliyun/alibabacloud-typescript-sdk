// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognizeDataByRuleTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The type of a sensitive data identification rule. You can call the [QueryRecognizeRulesType](https://help.aliyun.com/document_detail/2746905.html) operation to obtain the type of the rule.
   * 
   * *   1: regular expression
   * *   2: built-in rule
   * *   3: sample library
   * *   4: self-generated data identification model
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  recognizeRulesType?: string;
  /**
   * @remarks
   * The tenant ID. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * This parameter is required.
   * 
   * @example
   * 10241024
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      recognizeRulesType: 'RecognizeRulesType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recognizeRulesType: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

