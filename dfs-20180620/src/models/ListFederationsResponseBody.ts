// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFederationsResponseBodyFederations extends $dara.Model {
  federationId?: string;
  fileSystemIds?: string;
  static names(): { [key: string]: string } {
    return {
      federationId: 'FederationId',
      fileSystemIds: 'FileSystemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federationId: 'string',
      fileSystemIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFederationsResponseBody extends $dara.Model {
  federations?: ListFederationsResponseBodyFederations[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      federations: 'Federations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federations: { 'type': 'array', 'itemType': ListFederationsResponseBodyFederations },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.federations)) {
      $dara.Model.validateArray(this.federations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

