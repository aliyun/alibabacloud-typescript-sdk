// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPublicMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the User has purchased a resource plan that includes this media asset.
   * 
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @remarks
   * Dynamic metadata search matching conditions.
   * 
   * @example
   * "ApprovalStatus=\\"Available\\"&amp;MaterialBags=\\"boutiquemusic\\"&amp;Mood=\\"Nervous\\""
   */
  dynamicMetaDataMatchFields?: string;
  /**
   * @remarks
   * Entity ID, used to identify different types of public copyright media assets. Valid values:
   * 
   * - Copyright_Music: Public copyright music
   * 
   * @example
   * Copyright_Music
   */
  entityId?: string;
  /**
   * @remarks
   * Indicates whether the User has collected this media asset.
   * 
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @remarks
   * IMS media asset IDs.
   * 
   * - Separate multiple IDs with commas.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****,****15d4a4b0448391508f2cb486****
   */
  mediaIds?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Result sorting method: :. Valid values:
   * 
   * field:
   * 
   * - "UsageCount": usage
   * 
   * - "UnitPrice": unit price
   * 
   * order:
   * 
   * - "Desc": descending
   * 
   * - "Asc": ascending
   * 
   * @example
   * UsageCount:Desc,UnitPrice:Asc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      dynamicMetaDataMatchFields: 'DynamicMetaDataMatchFields',
      entityId: 'EntityId',
      favorite: 'Favorite',
      mediaIds: 'MediaIds',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      dynamicMetaDataMatchFields: 'string',
      entityId: 'string',
      favorite: 'boolean',
      mediaIds: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

