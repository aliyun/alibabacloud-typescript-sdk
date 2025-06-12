// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGroupsResponseBodyGroups } from "./ListGroupsResponseBodyGroups";


export class ListGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the RAM user groups.
   */
  groups?: ListGroupsResponseBodyGroups;
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when `IsTruncated` is `true`.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 065527AA-2F2E-AD7C-7484-F2626CFE4934
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListGroupsResponseBodyGroups,
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.groups && typeof (this.groups as any).validate === 'function') {
      (this.groups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

