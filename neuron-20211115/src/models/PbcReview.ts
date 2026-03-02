// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcReview extends $dara.Model {
  /**
   * @example
   * 1
   */
  developerId?: number;
  developerName?: string;
  /**
   * @example
   * 符合规范
   */
  feedbackPbcApi?: string;
  /**
   * @example
   * 符合规范
   */
  feedbackPbcInstruction?: string;
  /**
   * @example
   * 符合pbc规格规范
   */
  feedbackPbcSchema?: string;
  /**
   * @example
   * 服务安全
   */
  feedbackSecurity?: string;
  /**
   * @example
   * 服务可用
   */
  feedbackServiceAvailable?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  marketId?: number;
  marketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 基础商品
   */
  pbcName?: string;
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
   * 2022-04-01T00:00:00.000Z
   */
  pbcVersion?: string;
  /**
   * @example
   * 4
   */
  remainTime?: string;
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  reviewerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REVIEWING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      developerId: 'developerId',
      developerName: 'developerName',
      feedbackPbcApi: 'feedbackPbcApi',
      feedbackPbcInstruction: 'feedbackPbcInstruction',
      feedbackPbcSchema: 'feedbackPbcSchema',
      feedbackSecurity: 'feedbackSecurity',
      feedbackServiceAvailable: 'feedbackServiceAvailable',
      id: 'id',
      marketId: 'marketId',
      marketName: 'marketName',
      pbcName: 'pbcName',
      pbcUrl: 'pbcUrl',
      pbcVersion: 'pbcVersion',
      remainTime: 'remainTime',
      requestId: 'requestId',
      reviewerId: 'reviewerId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developerId: 'number',
      developerName: 'string',
      feedbackPbcApi: 'string',
      feedbackPbcInstruction: 'string',
      feedbackPbcSchema: 'string',
      feedbackSecurity: 'string',
      feedbackServiceAvailable: 'string',
      id: 'number',
      marketId: 'number',
      marketName: 'string',
      pbcName: 'string',
      pbcUrl: 'string',
      pbcVersion: 'string',
      remainTime: 'string',
      requestId: 'string',
      reviewerId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

