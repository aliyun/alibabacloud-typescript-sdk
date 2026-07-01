// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end date. The format is yyyyMMdd.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201003
   */
  endDate?: string;
  /**
   * @remarks
   * The destination scope of the messages. Valid values:
   * 
   * - **1**: domestic messages.
   * 
   * - **2**: international messages.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  isGlobe?: number;
  ownerId?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size. Valid values: **1 to 50**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * 阿里云平台
   */
  signName?: string;
  /**
   * @remarks
   * The start date. The format is yyyyMMdd.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201002
   */
  startDate?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * - **0**: verification code.
   * 
   * - **1**: notification message.
   * 
   * - **2**: promotional message. (Enterprise customers only)
   * 
   * - **3**: international message. (Enterprise customers only)
   * 
   * - **7**: digital message.
   * 
   * @example
   * 0
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      isGlobe: 'IsGlobe',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      startDate: 'StartDate',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      isGlobe: 'number',
      ownerId: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      startDate: 'string',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

