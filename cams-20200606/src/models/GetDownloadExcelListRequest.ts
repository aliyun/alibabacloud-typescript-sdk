// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadExcelListRequest extends $dara.Model {
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
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The query conditions.
   * 
   * @example
   * aa
   */
  condition?: string;
  /**
   * @remarks
   * The country names.
   */
  countryNames?: string[];
  /**
   * @remarks
   * The end time.
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
   * The contact group IDs.
   */
  groupIds?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-11-01
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

