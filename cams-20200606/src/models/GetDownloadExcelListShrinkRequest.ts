// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadExcelListShrinkRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  bizCode?: string;
  bizExtendShrink?: string;
  /**
   * @example
   * 示例值示例值
   */
  condition?: string;
  countryNamesShrink?: string;
  /**
   * @example
   * 示例值示例值
   */
  endDate?: string;
  /**
   * @example
   * 示例值
   */
  groupId?: string;
  groupIdsShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
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

