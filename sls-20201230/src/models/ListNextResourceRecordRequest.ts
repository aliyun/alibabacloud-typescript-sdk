// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNextResourceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Filters records by ID. Separate multiple IDs with commas. A maximum of 200 IDs are supported.
   * 
   * @example
   * record-001,record-002
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to include system built-in records.
   * 
   * @example
   * false
   */
  includeSystemRecords?: boolean;
  /**
   * @remarks
   * Specifies whether to enable JSON filter acceleration.
   * 
   * @example
   * false
   */
  jsonFilterAcc?: boolean;
  /**
   * @remarks
   * The JSON field path. Used together with jsonPathValue.
   * 
   * @example
   * $.status
   */
  jsonPath?: string;
  /**
   * @remarks
   * The filter value for the JSON field. Used together with jsonPath.
   * 
   * @example
   * enabled
   */
  jsonPathValue?: string;
  /**
   * @remarks
   * The maximum number of records to return in this request. Valid values: 1 to 200.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Do not pass this parameter for the first request. For subsequent requests, pass the nextToken value returned in the previous response.
   * 
   * @example
   * t7F6JzTNNTjkq2tRBH8hR0a_NcuVYQWjbVwdFeuFhkylsUhrDl0JSofT5mrbI0oV"
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether to traverse records in reverse order.
   * 
   * @example
   * false
   */
  reverse?: boolean;
  /**
   * @remarks
   * Searches for a specified string in record content.
   * 
   * @example
   * example
   */
  search?: string;
  /**
   * @remarks
   * Searches by JSON content.
   * 
   * @example
   * status
   */
  sjson?: string;
  /**
   * @remarks
   * Filters records by tag.
   * 
   * @example
   * production
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'ids',
      includeSystemRecords: 'includeSystemRecords',
      jsonFilterAcc: 'jsonFilterAcc',
      jsonPath: 'jsonPath',
      jsonPathValue: 'jsonPathValue',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      reverse: 'reverse',
      search: 'search',
      sjson: 'sjson',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      includeSystemRecords: 'boolean',
      jsonFilterAcc: 'boolean',
      jsonPath: 'string',
      jsonPathValue: 'string',
      maxResults: 'number',
      nextToken: 'string',
      reverse: 'boolean',
      search: 'string',
      sjson: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

