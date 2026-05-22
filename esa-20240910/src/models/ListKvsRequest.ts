// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKvsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace that you specify when you call the [CreatevNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The page number. The product of PageNumber and PageSize cannot exceed 50,000.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The prefix to query.
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

