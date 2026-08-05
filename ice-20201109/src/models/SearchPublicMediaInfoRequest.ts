// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPublicMediaInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user has purchased a resource plan that includes this media asset.
   * 
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @remarks
   * The dynamic metadata search matching conditions.
   * 
   * @example
   * "ApprovalStatus=\\"Available\\"&amp;MaterialBags=\\"boutiquemusic\\"&amp;Mood=\\"Nervous\\""
   */
  dynamicMetaDataMatchFields?: string;
  /**
   * @remarks
   * The entity ID that identifies different types of public copyright media assets. Valid values:
   * - Copyright_Music: public copyright music
   * 
   * @example
   * Copyright_Music
   */
  entityId?: string;
  /**
   * @remarks
   * Specifies whether the user has added the media asset to favorites.
   * 
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @remarks
   * The IMS media asset IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****,****15d4a4b0448391508f2cb486****
   */
  mediaIds?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting method for results in the format of <field>:<order>. Valid values:
   * 
   * field:
   * - "UsageCount": usage count
   * - "UnitPrice": unit price
   * 
   * order:
   * - "Desc": descending order
   * - "Asc": ascending order
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

