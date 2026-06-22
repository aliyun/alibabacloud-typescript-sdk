// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartClusterRule extends $dara.Model {
  baseURIs?: string[];
  /**
   * @remarks
   * An array of keywords for clustering.
   */
  keywords?: string[];
  ruleType?: string;
  /**
   * @remarks
   * The sensitivity for clustering, ranging from 0.0 to 1.0.
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

