// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return. Maximum value: 200.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the association entry. Valid values: logCorrelation: application log association.
   * 
   * This parameter is required.
   * 
   * @example
   * logCorrelation
   */
  recordType?: string;
  /**
   * @remarks
   * The filter information for service association entries.
   * 
   * @example
   * {
   *   "serviceName": "my-service",
   *   "storeName": "my-logstore"
   * }
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      recordType: 'recordType',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      recordType: 'string',
      search: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

