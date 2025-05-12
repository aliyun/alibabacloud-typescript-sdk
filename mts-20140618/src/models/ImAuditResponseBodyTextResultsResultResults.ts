// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImAuditResponseBodyTextResultsResultResultsDetails } from "./ImAuditResponseBodyTextResultsResultResultsDetails";


export class ImAuditResponseBodyTextResultsResultResults extends $dara.Model {
  /**
   * @remarks
   * The risky content that the moderated text hits. A text entry can hit multiple pieces of risky content.
   */
  details?: ImAuditResponseBodyTextResultsResultResultsDetails[];
  /**
   * @remarks
   * The category of the moderation result for the moderated text. Valid values:
   * 
   * *   normal: normal content
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
   * The score of the confidence level. Valid values: 0 to 100. A greater value indicates a higher confidence level. If a value of pass is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content is normal. If a value of review or block is returned for the suggestion parameter, a higher confidence level indicates a higher probability that the content contains violations.
   * 
   * >  This score is for reference only. We strongly recommend that you do not use this score in your business. We recommend that you use the values that are returned for the suggestion, label, and sublabel parameters to determine whether the content contains violations. The sublabel parameter is returned by some operations.
   * 
   * @example
   * 99.90
   */
  rate?: number;
  /**
   * @remarks
   * The moderation scenario.
   * 
   * @example
   * antispam
   */
  scene?: string;
  /**
   * @remarks
   * The recommended subsequent operation. Valid values:
   * 
   * *   pass: The content passes the moderation.
   * *   review: The content needs to be manually reviewed again.
   * *   block: The content contains violations. We recommend that you delete or block the content.
   * 
   * @example
   * block
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'details',
      label: 'label',
      rate: 'rate',
      scene: 'scene',
      suggestion: 'suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ImAuditResponseBodyTextResultsResultResultsDetails },
      label: 'string',
      rate: 'number',
      scene: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

