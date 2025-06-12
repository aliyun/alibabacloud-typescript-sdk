// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextModerationPlusResponseBodyDataResultCustomizedHit } from "./TextModerationPlusResponseBodyDataResultCustomizedHit";


export class TextModerationPlusResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The score of the confidence level. Valid values: 0 to 100. The value is accurate to two decimal places.
   * 
   * @example
   * 81.22
   */
  confidence?: number;
  /**
   * @remarks
   * The custom term hit by the moderated content.
   */
  customizedHit?: TextModerationPlusResponseBodyDataResultCustomizedHit[];
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * none
   */
  description?: string;
  /**
   * @remarks
   * The label.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The term hit by the moderated content.
   * 
   * @example
   * XXX
   */
  riskWords?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      customizedHit: 'CustomizedHit',
      description: 'Description',
      label: 'Label',
      riskWords: 'RiskWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      customizedHit: { 'type': 'array', 'itemType': TextModerationPlusResponseBodyDataResultCustomizedHit },
      description: 'string',
      label: 'string',
      riskWords: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customizedHit)) {
      $dara.Model.validateArray(this.customizedHit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

