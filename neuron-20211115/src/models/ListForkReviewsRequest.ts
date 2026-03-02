// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListForkReviewsRequest extends $dara.Model {
  applicant?: string;
  companyId?: number;
  marketId?: number;
  orderBy?: string;
  orderDirection?: string;
  pageNumber?: number;
  pageSize?: number;
  reviewer?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      companyId: 'companyId',
      marketId: 'marketId',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      reviewer: 'reviewer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: 'string',
      companyId: 'number',
      marketId: 'number',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

