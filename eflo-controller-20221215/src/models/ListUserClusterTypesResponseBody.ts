// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserClusterTypesResponseBodyClusterTypes extends $dara.Model {
  /**
   * @remarks
   * The access type of cluster type
   * 
   * @example
   * Public
   */
  accessType?: string;
  /**
   * @remarks
   * The name of cluster type
   * 
   * @example
   * AckEdgePro
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClusterTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cluster types. Number of elements in the array: 1 to 100.
   */
  clusterTypes?: ListUserClusterTypesResponseBodyClusterTypes[];
  /**
   * @remarks
   * NextToken for the next page. Include this value when requesting the next page.
   * 
   * @example
   * 3a6b93229825ac667104463b56790c91
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTypes: 'ClusterTypes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypes: { 'type': 'array', 'itemType': ListUserClusterTypesResponseBodyClusterTypes },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterTypes)) {
      $dara.Model.validateArray(this.clusterTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

