// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPbcReviewsRequest extends $dara.Model {
  applicant?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  marketId?: number;
  orderBy?: number;
  orderDirection?: number;
  pageNumber?: string;
  pageSize?: string;
  reviewer?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
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
      marketId: 'number',
      orderBy: 'number',
      orderDirection: 'number',
      pageNumber: 'string',
      pageSize: 'string',
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

