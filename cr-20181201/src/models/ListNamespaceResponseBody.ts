// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNamespaceResponseBodyNamespaces } from "./ListNamespaceResponseBodyNamespaces";


export class ListNamespaceResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  namespaces?: ListNamespaceResponseBodyNamespaces[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7E5FCA5-55ED-451C-9649-0BB2B93387D0
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaces: 'Namespaces',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      namespaces: { 'type': 'array', 'itemType': ListNamespaceResponseBodyNamespaces },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

