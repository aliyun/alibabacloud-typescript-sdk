// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNamespacesResponseBodyDataNamespaces } from "./DescribeNamespacesResponseBodyDataNamespaces";


export class DescribeNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The namespaces.
   */
  namespaces?: DescribeNamespacesResponseBodyDataNamespaces[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of namespaces.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      namespaces: 'Namespaces',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      namespaces: { 'type': 'array', 'itemType': DescribeNamespacesResponseBodyDataNamespaces },
      pageSize: 'number',
      totalSize: 'number',
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

