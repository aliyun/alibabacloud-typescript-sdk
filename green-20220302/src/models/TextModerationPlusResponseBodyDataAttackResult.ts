// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationPlusResponseBodyDataAttackResult extends $dara.Model {
  /**
   * @remarks
   * The level of prompt attack
   * 
   * @example
   * none
   */
  attackLevel?: string;
  /**
   * @remarks
   * The confidence
   * 
   * @example
   * 0
   */
  confidence?: number;
  /**
   * @remarks
   * Description
   * 
   * @example
   * safe
   */
  description?: string;
  /**
   * @remarks
   * The label
   * 
   * @example
   * safe
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      attackLevel: 'AttackLevel',
      confidence: 'Confidence',
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackLevel: 'string',
      confidence: 'number',
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

