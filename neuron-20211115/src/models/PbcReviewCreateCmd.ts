// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcReviewCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  marketId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://catalog.e2.aliyun.com/pbc/product
   */
  pbcUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pbcVersionId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reviewerId?: number;
  static names(): { [key: string]: string } {
    return {
      marketId: 'marketId',
      pbcUrl: 'pbcUrl',
      pbcVersionId: 'pbcVersionId',
      reviewerId: 'reviewerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketId: 'number',
      pbcUrl: 'string',
      pbcVersionId: 'number',
      reviewerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

