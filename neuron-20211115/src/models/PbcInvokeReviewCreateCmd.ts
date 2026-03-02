// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcInvokeReviewCreateCmd extends $dara.Model {
  companyId?: number;
  invokePbcId?: number;
  marketId?: number;
  pbcId?: number;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      invokePbcId: 'invokePbcId',
      marketId: 'marketId',
      pbcId: 'pbcId',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      invokePbcId: 'number',
      marketId: 'number',
      pbcId: 'number',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

