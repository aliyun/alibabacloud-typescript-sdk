// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadExcelListRequest extends $dara.Model {
  /**
   * @example
   * 示例值示例值示例值
   */
  bizCode?: string;
  bizExtend?: { [key: string]: any };
  /**
   * @example
   * 示例值示例值
   */
  condition?: string;
  countryNames?: string[];
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
  groupIds?: string[];
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
      bizExtend: 'BizExtend',
      condition: 'Condition',
      countryNames: 'CountryNames',
      endDate: 'EndDate',
      groupId: 'GroupId',
      groupIds: 'GroupIds',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      condition: 'string',
      countryNames: { 'type': 'array', 'itemType': 'string' },
      endDate: 'string',
      groupId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startDate: 'string',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    if(Array.isArray(this.countryNames)) {
      $dara.Model.validateArray(this.countryNames);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

