// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePbcInvokeRequest extends $dara.Model {
  applicant?: string;
  companyId?: number;
  marketId?: number;
  pbcId?: number;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      companyId: 'companyId',
      marketId: 'marketId',
      pbcId: 'pbcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: 'string',
      companyId: 'number',
      marketId: 'number',
      pbcId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

