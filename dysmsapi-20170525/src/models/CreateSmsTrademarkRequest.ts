// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsTrademarkRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 申请人名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  trademarkApplicantName?: string;
  /**
   * @remarks
   * 专用权生失效日期
   * 
   * This parameter is required.
   * 
   * @example
   * 2010-12-14~2030-12-13
   */
  trademarkEffExpDate?: string;
  /**
   * @remarks
   * 商标名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  trademarkName?: string;
  /**
   * @remarks
   * 商标详情截图osskey
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  trademarkPic?: string;
  /**
   * @remarks
   * 商标注册号
   * 
   * This parameter is required.
   * 
   * @example
   * 766905
   */
  trademarkRegistrationNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trademarkApplicantName: 'TrademarkApplicantName',
      trademarkEffExpDate: 'TrademarkEffExpDate',
      trademarkName: 'TrademarkName',
      trademarkPic: 'TrademarkPic',
      trademarkRegistrationNumber: 'TrademarkRegistrationNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trademarkApplicantName: 'string',
      trademarkEffExpDate: 'string',
      trademarkName: 'string',
      trademarkPic: 'string',
      trademarkRegistrationNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

