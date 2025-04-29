// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CostCenterDeleteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 340049
   */
  thirdpartId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdpartId: 'thirdpart_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdpartId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

