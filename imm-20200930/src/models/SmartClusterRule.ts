// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartClusterRule extends $dara.Model {
  baseURIs?: string[];
  /**
   * @remarks
   * Keywords
   */
  keywords?: string[];
  ruleType?: string;
  /**
   * @remarks
   * Sensitivity
   * 
   * @example
   * 0.5
   */
  sensitivity?: number;
  static names(): { [key: string]: string } {
    return {
      baseURIs: 'BaseURIs',
      keywords: 'Keywords',
      ruleType: 'RuleType',
      sensitivity: 'Sensitivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseURIs: { 'type': 'array', 'itemType': 'string' },
      keywords: { 'type': 'array', 'itemType': 'string' },
      ruleType: 'string',
      sensitivity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.baseURIs)) {
      $dara.Model.validateArray(this.baseURIs);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

