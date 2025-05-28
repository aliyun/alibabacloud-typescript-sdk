// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCostCenterShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  costCenterEntityListShrink?: string;
  /**
   * @example
   * 2684201000001
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

