// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceBelongIdentifiersResponseBodyIdentifiers extends $dara.Model {
  createTime?: string;
  identifierId?: string;
  identifierType?: string;
  identifierValue?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      identifierId: 'IdentifierId',
      identifierType: 'IdentifierType',
      identifierValue: 'IdentifierValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      identifierId: 'string',
      identifierType: 'string',
      identifierValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeviceBelongIdentifiersResponseBody extends $dara.Model {
  identifiers?: ListDeviceBelongIdentifiersResponseBodyIdentifiers[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identifiers: 'Identifiers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifiers: { 'type': 'array', 'itemType': ListDeviceBelongIdentifiersResponseBodyIdentifiers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identifiers)) {
      $dara.Model.validateArray(this.identifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

