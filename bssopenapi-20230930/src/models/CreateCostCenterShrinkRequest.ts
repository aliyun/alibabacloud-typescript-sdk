// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCostCenterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Cost center entity list
   * 
   * This parameter is required.
   */
  costCenterEntityListShrink?: string;
  /**
   * @remarks
   * Primary marketplace ID. If empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2084210001
   */
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterEntityListShrink: 'CostCenterEntityList',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterEntityListShrink: 'string',
      nbid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

