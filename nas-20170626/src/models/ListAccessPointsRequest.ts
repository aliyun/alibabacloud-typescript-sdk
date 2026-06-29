// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessPointsRequestFilters extends $dara.Model {
  /**
   * @example
   * AccessPointId
   */
  name?: string;
  /**
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0913nx15amuix9a****
   */
  fileSystemId?: string;
  filters?: ListAccessPointsRequestFilters[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * MTY4NzcxOTcwMjAzMDk2Nzc0MyM4MDM4****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      filters: { 'type': 'array', 'itemType': ListAccessPointsRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

