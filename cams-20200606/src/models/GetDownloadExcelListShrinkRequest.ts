// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadExcelListShrinkRequest extends $dara.Model {
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
   * The business extension information. Default value: "{}".
   * 
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * aa
   */
  condition?: string;
  /**
   * @remarks
   * The country name.
   */
  countryNamesShrink?: string;
  /**
   * @remarks
   * The end date. Format: YYYY-MM-DD.
   * 
   * @example
   * 2025-12-01
   */
  endDate?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 111
   */
  groupId?: string;
  /**
   * @remarks
   * The contact group ID.
   */
  groupIdsShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start date. Format: YYYY-MM-DD.
   * 
   * @example
   * 2025-11-01
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtendShrink: 'BizExtend',
      condition: 'Condition',
      countryNamesShrink: 'CountryNames',
      endDate: 'EndDate',
      groupId: 'GroupId',
      groupIdsShrink: 'GroupIds',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtendShrink: 'string',
      condition: 'string',
      countryNamesShrink: 'string',
      endDate: 'string',
      groupId: 'string',
      groupIdsShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

