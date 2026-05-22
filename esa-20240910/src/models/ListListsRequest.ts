// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the returned data in descending order.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * The list description for fuzzy search.
   * 
   * @example
   * a custom list
   */
  descriptionLike?: string;
  /**
   * @remarks
   * The list ID for fuzzy search.
   * 
   * @example
   * 40000001
   */
  idLike?: string;
  /**
   * @remarks
   * The list content for fuzzy search.
   * 
   * @example
   * 10.1.1.1
   */
  itemLike?: string;
  /**
   * @remarks
   * The type of the custom list.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * The list name and content for fuzzy search.
   * 
   * @example
   * 10.1.1.1
   */
  nameItemLike?: string;
  /**
   * @remarks
   * The list name for fuzzy search.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * The column by which you want to sort the returned data.
   * 
   * @example
   * id
   */
  orderBy?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      descriptionLike: 'DescriptionLike',
      idLike: 'IdLike',
      itemLike: 'ItemLike',
      kind: 'Kind',
      nameItemLike: 'NameItemLike',
      nameLike: 'NameLike',
      orderBy: 'OrderBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'boolean',
      descriptionLike: 'string',
      idLike: 'string',
      itemLike: 'string',
      kind: 'string',
      nameItemLike: 'string',
      nameLike: 'string',
      orderBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The query arguments in the JSON format, which contain filter conditions.
   * 
   * @example
   * ListLists
   */
  queryArgs?: ListListsRequestQueryArgs;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryArgs: 'QueryArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      queryArgs: ListListsRequestQueryArgs,
    };
  }

  validate() {
    if(this.queryArgs && typeof (this.queryArgs as any).validate === 'function') {
      (this.queryArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

