// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavingPlanDeductableCommodityShrinkRequest extends $dara.Model {
  ecIdAccountIdsShrink?: string;
  nbid?: string;
  static names(): { [key: string]: string } {
    return {
      ecIdAccountIdsShrink: 'EcIdAccountIds',
      nbid: 'Nbid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecIdAccountIdsShrink: 'string',
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

