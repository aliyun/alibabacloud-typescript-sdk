// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqQueryAbilityResponseBodyResultValues extends $dara.Model {
  /**
   * @remarks
   * Data values for each row.
   * 
   * **if can be null:**
   * true
   */
  row?: string[];
  static names(): { [key: string]: string } {
    return {
      row: 'Row',
    };
  }

  static types(): { [key: string]: any } {
    return {
      row: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.row)) {
      $dara.Model.validateArray(this.row);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

