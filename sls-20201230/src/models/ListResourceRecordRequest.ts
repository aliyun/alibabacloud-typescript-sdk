// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Filters records by ID. Separate multiple IDs with commas (,). A maximum of 200 IDs are supported.
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
   * The JSON field path. Use this parameter together with jsonPathValue.
   * 
   * @example
   * $.status
   */
  jsonPath?: string;
  /**
   * @remarks
   * The filter value of the JSON field. Use this parameter together with jsonPath.
   * 
   * @example
   * enabled
   */
  jsonPathValue?: string;
  /**
   * @remarks
   * The start position of the query.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Searches for the specified string in record content.
   * 
   * @example
   * example
   */
  search?: string;
  /**
   * @remarks
   * The maximum number of records to return. Valid values: 1 to 200.
   * 
   * @example
   * 100
   */
  size?: number;
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
   * Filters records by label.
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
      offset: 'offset',
      search: 'search',
      size: 'size',
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
      offset: 'number',
      search: 'string',
      size: 'number',
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

