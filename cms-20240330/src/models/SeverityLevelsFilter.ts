// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SeverityLevelsFilter extends $dara.Model {
  /**
   * @remarks
   * Matches a log entry if its severity level appears in this array of strings.
   */
  contains?: string[];
  static names(): { [key: string]: string } {
    return {
      contains: 'contains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contains)) {
      $dara.Model.validateArray(this.contains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

