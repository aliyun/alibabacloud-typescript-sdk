// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerraformProviderVersionsResponseBodyVersions extends $dara.Model {
  publishedTime?: string;
  status?: string;
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
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * 73588ebb-9d40-4660-a59f-764636ae6034
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalCount?: number;
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

