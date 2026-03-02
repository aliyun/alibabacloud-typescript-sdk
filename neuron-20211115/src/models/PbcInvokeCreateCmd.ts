// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcInvokeCreateCmd extends $dara.Model {
  applicant?: string;
  companyId?: number;
  invokePbcId?: number;
  marketId?: number;
  pbcId?: number;
  reviewer?: string;
  usage?: string;
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      companyId: 'companyId',
      invokePbcId: 'invokePbcId',
      marketId: 'marketId',
      pbcId: 'pbcId',
      reviewer: 'reviewer',
      usage: 'usage',
      visible: 'visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: 'string',
      companyId: 'number',
      invokePbcId: 'number',
      marketId: 'number',
      pbcId: 'number',
      reviewer: 'string',
      usage: 'string',
      visible: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

