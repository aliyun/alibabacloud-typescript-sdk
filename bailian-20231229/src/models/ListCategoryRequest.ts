// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdH70eOCSCKtacdomNzak4U=
   */
  nextToken?: string;
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryType: 'CategoryType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      parentCategoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

