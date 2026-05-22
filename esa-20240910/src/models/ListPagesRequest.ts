// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPagesRequestQueryArgs extends $dara.Model {
  /**
   * @example
   * application/json
   */
  contentType?: string;
  nameDescriptionLike?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      nameDescriptionLike: 'NameDescriptionLike',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      nameDescriptionLike: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPagesRequest extends $dara.Model {
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
  queryArgs?: ListPagesRequestQueryArgs;
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
      queryArgs: ListPagesRequestQueryArgs,
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

