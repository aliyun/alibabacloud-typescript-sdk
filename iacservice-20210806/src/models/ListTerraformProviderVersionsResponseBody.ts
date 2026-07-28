// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerraformProviderVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The publish time.
   * 
   * @example
   * 2025-01-24T05:06:51Z
   */
  publishedTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 1.242.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      publishedTime: 'publishedTime',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishedTime: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTerraformProviderVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records retrieved in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more pages are available.
   * 
   * @example
   * rnD7wyAII+yDi0UGlV519J4dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73588ebb-9d40-4660-a59f-764636ae6034
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of versions.
   */
  versions?: ListTerraformProviderVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListTerraformProviderVersionsResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

