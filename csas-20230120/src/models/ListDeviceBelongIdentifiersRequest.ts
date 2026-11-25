// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceBelongIdentifiersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  currentPage?: number;
  identifierIds?: string[];
  identifierType?: string;
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      identifierIds: 'IdentifierIds',
      identifierType: 'IdentifierType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      identifierIds: { 'type': 'array', 'itemType': 'string' },
      identifierType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identifierIds)) {
      $dara.Model.validateArray(this.identifierIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

