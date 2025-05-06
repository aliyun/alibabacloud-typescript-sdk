// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRemediationTemplateResponseBodyRemediationTemplates } from "./GetRemediationTemplateResponseBodyRemediationTemplates";


export class GetRemediationTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the automatic remediation template.
   */
  remediationTemplates?: GetRemediationTemplateResponseBodyRemediationTemplates[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E232FC35-BD40-51E3-B2EB-09416A234939
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationTemplates: 'RemediationTemplates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationTemplates: { 'type': 'array', 'itemType': GetRemediationTemplateResponseBodyRemediationTemplates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediationTemplates)) {
      $dara.Model.validateArray(this.remediationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

