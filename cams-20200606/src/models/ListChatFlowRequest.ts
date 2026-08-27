// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The business tenant code. Default value: ALICOM_OPAAS.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: an empty collection.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * flowCode
   * 
   * @example
   * SampleValueSampleValue
   */
  flowCode?: string;
  /**
   * @remarks
   * The flow status.
   * 
   * @example
   * SampleValueSampleValue
   */
  flowStatus?: string;
  /**
   * @remarks
   * The flow trigger type. Valid values:
   * - TriggeredManually
   * - TriggeredByWhatsApp
   * - TriggeredByInstagram
   * - TriggeredByViber
   * - TriggeredByMessenger
   * 
   * @example
   * TriggeredByWhatsApp
   */
  flowTriggerType?: string;
  /**
   * @remarks
   * The search keyword. This parameter is used for fuzzy match of flow names.
   * 
   * @example
   * LLM
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * SampleValue
   */
  phoneNumber?: string;
  /**
   * @example
   * 1
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to return the online status. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * true
   */
  returnWithOnlineVersion?: boolean;
  /**
   * @remarks
   * The flow status. Default value: NORMAL.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * SampleValueSampleValue
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      flowCode: 'FlowCode',
      flowStatus: 'FlowStatus',
      flowTriggerType: 'FlowTriggerType',
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      returnWithOnlineVersion: 'ReturnWithOnlineVersion',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      flowCode: 'string',
      flowStatus: 'string',
      flowTriggerType: 'string',
      keyword: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      returnWithOnlineVersion: 'boolean',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

