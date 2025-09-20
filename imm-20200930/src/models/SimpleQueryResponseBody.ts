// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class SimpleQueryResponseBodyAggregationsGroups extends $dara.Model {
  /**
   * @remarks
   * The number of results in the grouped aggregation.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The value for the grouped aggregation.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class SimpleQueryResponseBodyAggregations extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * Size
   */
  field?: string;
  /**
   * @remarks
   * The grouped aggregations. This parameter is returned only when the group operator is specified in the Aggregations request parameter.
   */
  groups?: SimpleQueryResponseBodyAggregationsGroups[];
  /**
   * @remarks
   * The operator.
   * 
   * @example
   * sum
   */
  operation?: string;
  /**
   * @remarks
   * The statistical result.
   * 
   * @example
   * 200
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      groups: 'Groups',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      groups: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregationsGroups },
      operation: 'string',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The aggregations. This parameter is returned only when the value of the Aggregations request parameter is not empty.
   */
  aggregations?: SimpleQueryResponseBodyAggregations[];
  /**
   * @remarks
   * The files. This parameter is returned only when the value of the Aggregations request parameter is empty.
   */
  files?: File[];
  /**
   * @remarks
   * The pagination token is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter.
   * 
   * It can be used in the next request to retrieve a new page of results.
   * 
   * If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2C5C1E0F-D8B8-4DA0-8127-EC32C771****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of total hits.
   * 
   * @example
   * 10
   */
  totalHits?: number;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'Aggregations',
      files: 'Files',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalHits: 'TotalHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregations },
      files: { 'type': 'array', 'itemType': File },
      nextToken: 'string',
      requestId: 'string',
      totalHits: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aggregations)) {
      $dara.Model.validateArray(this.aggregations);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

