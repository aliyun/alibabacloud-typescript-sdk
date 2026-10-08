// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { File } from "./File";


export class SimpleQueryResponseBodyAggregationsGroups extends $dara.Model {
  /**
   * @remarks
   * The total count of the grouping and aggregation.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The value of the grouping and aggregation.
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
   * The name of the aggregation field.
   * 
   * @example
   * Size
   */
  field?: string;
  /**
   * @remarks
   * The list of grouping and aggregation results. This parameter is returned only when an Operation of the group type exists in Aggregations of the request.
   */
  groups?: SimpleQueryResponseBodyAggregationsGroups[];
  /**
   * @remarks
   * The aggregation operation for the aggregation field.
   * 
   * @example
   * sum
   */
  operation?: string;
  /**
   * @remarks
   * The statistical result of the aggregation.
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
   * The list of aggregation field information. This parameter is returned only when Aggregations in the request is not empty.
   */
  aggregations?: SimpleQueryResponseBodyAggregations[];
  /**
   * @remarks
   * The list of file information. This parameter is returned only when Aggregations in the request is empty.
   */
  files?: File[];
  /**
   * @remarks
   * The token used for pagination when the total number of files exceeds the value of MaxResults.
   * 
   * When you list file information next time, set NextToken to this value to return the remaining results.
   * 
   * This parameter has a value only when not all files are returned.
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
   * The number of matched records.
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

