// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancePackageStatesResponseBodyPackageStates } from "./ListInstancePackageStatesResponseBodyPackageStates";


export class ListInstancePackageStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 50
   */
  maxResults?: string;
  /**
   * @remarks
   * Token string for pagination.
   * 
   * @example
   * MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctzxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * List of extensions
   */
  packageStates?: ListInstancePackageStatesResponseBodyPackageStates[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 1306108F-610C-40FD-AAD5-XXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      packageStates: 'PackageStates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      packageStates: { 'type': 'array', 'itemType': ListInstancePackageStatesResponseBodyPackageStates },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.packageStates)) {
      $dara.Model.validateArray(this.packageStates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

