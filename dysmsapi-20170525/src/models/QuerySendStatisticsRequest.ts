// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Format: yyyyMMdd. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201003
   */
  endDate?: string;
  /**
   * @remarks
   * The site from where the message is sent. Valid values:
   * 
   * *   **1**: China site
   * *   **2**: international site
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
   * The page number. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1 to 50**.
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
   * Aliyun
   */
  signName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Format: yyyyMMdd. Example: 20181225.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201002
   */
  startDate?: string;
  /**
   * @remarks
   * The type of the message template. Valid values: Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification
   * *   **2**: promotional message (Enterprise users only)
   * *   **3**: international purpose (Enterprise users only)
   * *   **7**: digital message
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

