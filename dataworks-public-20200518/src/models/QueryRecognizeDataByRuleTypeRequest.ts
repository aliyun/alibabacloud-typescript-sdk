// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognizeDataByRuleTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The recognition rule type. You can call the [QueryRecognizeRulesType](https://help.aliyun.com/document_detail/2746905.html) operation to obtain the rule types.
   * - 1: regular expression
   * - 2: built-in model
   * - 3: sample library
   * - 4: auto-generated model
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  recognizeRulesType?: string;
  /**
   * @remarks
   * The tenant ID. Log on to the [DataWorks console](https://workbench.data.aliyun.com/console), go to the DataStudio page, click the username in the upper-right corner, and choose Menu > User Info to obtain the tenant ID.
   * 
   * You can also obtain the tenant ID from Data.TenantId in the response of the GetProject operation.
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

