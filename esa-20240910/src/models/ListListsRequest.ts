// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListsRequestQueryArgs extends $dara.Model {
  desc?: boolean;
  /**
   * @example
   * a custom list
   */
  descriptionLike?: string;
  /**
   * @example
   * 40000001
   */
  idLike?: string;
  /**
   * @example
   * 10.1.1.1
   */
  itemLike?: string;
  /**
   * @example
   * ip
   */
  kind?: string;
  /**
   * @example
   * 10.1.1.1
   */
  nameItemLike?: string;
  /**
   * @example
   * example
   */
  nameLike?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
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

