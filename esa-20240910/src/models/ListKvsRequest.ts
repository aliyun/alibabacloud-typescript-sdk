// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKvsRequest extends $dara.Model {
  /**
   * @remarks
   * The name specified when you called [CreatevNamespace](https://help.aliyun.com/document_detail/2850317.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The page number. The product of PageNumber and PageSize cannot exceed 50000.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: **50**. Maximum value: **100**.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The prefix used to filter keys.
   * 
   * @example
   * prefix-
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

