// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartClusterRule extends $dara.Model {
  keywords?: string[];
  /**
   * @example
   * 0.5
   */
  sensitivity?: number;
  static names(): { [key: string]: string } {
    return {
      keywords: 'Keywords',
      sensitivity: 'Sensitivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keywords: { 'type': 'array', 'itemType': 'string' },
      sensitivity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

