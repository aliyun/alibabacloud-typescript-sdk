// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForkReview extends $dara.Model {
  /**
   * @example
   * 旭坤
   */
  applicant?: string;
  /**
   * @example
   * 1
   */
  forkId?: number;
  /**
   * @example
   * global-mall
   */
  gitGroup?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * product
   */
  pbcName?: string;
  repoUrls?: string[];
  requestId?: string;
  /**
   * @example
   * 中驿
   */
  reviewer?: string;
  /**
   * @example
   * 194835334
   */
  reviewerId?: string;
  /**
   * @example
   * 待审核
   */
  status?: string;
  /**
   * @example
   * 商城国际化版本
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      applicant: 'applicant',
      forkId: 'forkId',
      gitGroup: 'gitGroup',
      id: 'id',
      pbcName: 'pbcName',
      repoUrls: 'repoUrls',
      requestId: 'requestId',
      reviewer: 'reviewer',
      reviewerId: 'reviewerId',
      status: 'status',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicant: 'string',
      forkId: 'number',
      gitGroup: 'string',
      id: 'number',
      pbcName: 'string',
      repoUrls: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      reviewer: 'string',
      reviewerId: 'string',
      status: 'string',
      usage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.repoUrls)) {
      $dara.Model.validateArray(this.repoUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

