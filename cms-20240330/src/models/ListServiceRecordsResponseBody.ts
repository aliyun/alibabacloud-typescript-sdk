// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceRecordsResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The entry content in JSON string format. The format varies depending on the recordType.
   * 
   * @example
   * {
   *   "project": "proj-xtrace-16c988dcfe21fcb73c5e6f234927d998-cn-hangzhou",
   *   "storeName": "app-biz-log",
   *   "regionId": "cn-hangzhou",
   *   "bindType": "logstore",
   *   "traceIdRelateField": ""
   * }
   */
  recordContent?: string;
  /**
   * @remarks
   * The type of the linked entry. Currently supported:
   * logCorrelation, which indicates application log association.
   * 
   * @example
   * logCorrelation
   */
  recordType?: string;
  /**
   * @remarks
   * The unique identifier of the service.
   * 
   * @example
   * gaddp9ap8q@f8ca37734da3eda787dbb
   */
  serviceId?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      recordContent: 'recordContent',
      recordType: 'recordType',
      serviceId: 'serviceId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordContent: 'string',
      recordType: 'string',
      serviceId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
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
   * The list of ticket operation records.
   */
  records?: ListServiceRecordsResponseBodyRecords[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0CEC5375-XXXX-XXXX-XXXX-9A629907C1F0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      records: 'records',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': ListServiceRecordsResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

