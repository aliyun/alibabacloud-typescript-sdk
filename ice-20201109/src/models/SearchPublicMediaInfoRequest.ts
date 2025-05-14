// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPublicMediaInfoRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @example
   * "ApprovalStatus=\\"Available\\"&amp;MaterialBags=\\"boutiquemusic\\"&amp;Mood=\\"Nervous\\""
   */
  dynamicMetaDataMatchFields?: string;
  /**
   * @example
   * Copyright_Music
   */
  entityId?: string;
  /**
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @example
   * ****20b48fb04483915d4f2cd8ac****,****15d4a4b0448391508f2cb486****
   */
  mediaIds?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

