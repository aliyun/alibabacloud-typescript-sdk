// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadExcelListShrinkRequest extends $dara.Model {
  /**
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @example
   * {}
   */
  bizExtendShrink?: string;
  /**
   * @example
   * aa
   */
  condition?: string;
  countryNamesShrink?: string;
  /**
   * @example
   * 2025-12-01
   */
  endDate?: string;
  /**
   * @example
   * 111
   */
  groupId?: string;
  groupIdsShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
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

