// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendListRequestTag } from "./DescribeBackendListRequestTag";


export class DescribeBackendListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the backend service. You can use \\* to perform fuzzy queries.
   * 
   * @example
   * test
   */
  backendName?: string;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * HTTP
   */
  backendType?: string;
  /**
   * @remarks
   * The number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The list of the tag.
   */
  tag?: DescribeBackendListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      backendName: 'BackendName',
      backendType: 'BackendType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendName: 'string',
      backendType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeBackendListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

