// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPbcInvokeReviewsRequest extends $dara.Model {
  applicant?: string;
  companyId?: number;
  marketId?: number;
  orderDirection?: number;
  orderby?: number;
  reviewer?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      companyId: 'companyId',
      marketId: 'marketId',
      orderDirection: 'orderDirection',
      orderby: 'orderby',
      reviewer: 'reviewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: 'string',
      companyId: 'number',
      marketId: 'number',
      orderDirection: 'number',
      orderby: 'number',
      reviewer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

