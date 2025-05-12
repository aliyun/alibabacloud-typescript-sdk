// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyTextResultsResultResultsDetailsContexts } from "./ImAuditResponseBodyTextResultsResultResultsDetailsContexts";


export class ImAuditResponseBodyTextResultsResultResultsDetails extends $dara.Model {
  /**
   * @remarks
   * The category of the risky content that the moderated text hits. Valid values:
   * 
   * *   spam: spam
   * *   ad: ad
   * *   politics: political content
   * *   terrorism: terrorist content
   * *   abuse: abuse
   * *   porn: pornographic content
   * *   flood: excessive junk content
   * *   contraband: prohibited content
   * *   meaningless: meaningless content
   * *   customized: custom content, such as a custom keyword
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The context information of the risky content that the moderated text hits.
   */
  contexts?: ImAuditResponseBodyTextResultsResultResultsDetailsContexts[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      contexts: 'contexts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      contexts: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResultsDetailsContexts },
    };
  }

  validate() {
    if(Array.isArray(this.contexts)) {
      $dara.Model.validateArray(this.contexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

