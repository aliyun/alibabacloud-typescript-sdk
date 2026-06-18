// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsRequestQueryArgs extends $dara.Model {
  /**
   * @remarks
   * If true, sorts the results in descending order.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * Filters by a partial match on the list description.
   * 
   * @example
   * a custom list
   */
  descriptionLike?: string;
  /**
   * @remarks
   * Filters by a partial match on the list ID.
   * 
   * @example
   * 40000001
   */
  idLike?: string;
  /**
   * @remarks
   * Filters by a partial match on a list item.
   * 
   * @example
   * 10.1.1.1
   */
  itemLike?: string;
  /**
   * @remarks
   * Filters by the list kind.
   * 
   * @example
   * ip
   */
  kind?: string;
  /**
   * @remarks
   * Filters by a partial match on both the list name and list items.
   * 
   * @example
   * 10.1.1.1
   */
  nameItemLike?: string;
  /**
   * @remarks
   * Filters by a partial match on the list name.
   * 
   * @example
   * example
   */
  nameLike?: string;
  /**
   * @remarks
   * Specifies the sort field.
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
   * Specifies the page number for paginated results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Specifies the number of results to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * A JSON object containing query parameters to filter the results.
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

