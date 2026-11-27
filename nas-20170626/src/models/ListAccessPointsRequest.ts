// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessPointsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter key. Valid values:
   * - AccessGroup (not supported by agentic)
   * - AccessPointId
   * - AgenticSpaceId
   * 
   * @example
   * AccessPointId
   */
  name?: string;
  /**
   * @remarks
   * The value of the filter key.
   * 
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
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 0913nx15amuix9a****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The filter key information.
   */
  filters?: ListAccessPointsRequestFilters[];
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * - Maximum value: 100.
   * - Minimum value: 10.
   * - Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. The value is the NextToken parameter value returned by the previous API call.
   * 
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

