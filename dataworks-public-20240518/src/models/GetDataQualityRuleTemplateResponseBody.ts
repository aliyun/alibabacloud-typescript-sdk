// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate } from "./GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate";


export class GetDataQualityRuleTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the template.
   */
  dataQualityRuleTemplate?: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityRuleTemplate: 'DataQualityRuleTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityRuleTemplate: GetDataQualityRuleTemplateResponseBodyDataQualityRuleTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataQualityRuleTemplate && typeof (this.dataQualityRuleTemplate as any).validate === 'function') {
      (this.dataQualityRuleTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

