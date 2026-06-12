// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paidType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      paidType: 'PaidType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paidType: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

