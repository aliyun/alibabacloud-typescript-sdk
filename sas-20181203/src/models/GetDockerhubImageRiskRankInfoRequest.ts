// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDockerhubImageRiskRankInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The dimension types.
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

