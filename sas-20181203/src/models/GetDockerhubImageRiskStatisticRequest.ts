// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDockerhubImageRiskStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The risk types that you want to query.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

