// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParameterSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for exact match search. The search is case-insensitive.
   * 
   * @example
   * vpc
   */
  keyword?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 21a90f5d-a469-4ac4-a8ea-f6e1e7470e6f
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results returned per page. Default value: 20. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      kmsKeyId: 'kmsKeyId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      kmsKeyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

