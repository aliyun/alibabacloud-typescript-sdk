// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBillingResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The billing ID.
   * 
   * @example
   * exampleBillingId
   */
  billingId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * exampleBizId
   */
  bizId?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * string_value
   */
  bizType?: string;
  /**
   * @remarks
   * costSource
   * 
   * @example
   * string_value
   */
  costSource?: string[];
  /**
   * @remarks
   * costSourceDisplayName
   * 
   * @example
   * string_value
   */
  costSourceDisplayName?: string[];
  /**
   * @remarks
   * The end timestamp, in milliseconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The entry object ID.
   * 
   * @example
   * exampleEntryObjectId
   */
  entryObjectId?: string;
  /**
   * @remarks
   * The entry object type.
   * 
   * @example
   * string_value
   */
  entryObjectType?: string;
  /**
   * @remarks
   * Indicates whether the bill is a shadow bill.
   * 
   * @example
   * true
   */
  isShadow?: boolean;
  /**
   * @remarks
   * The operation type.
   * 
   * @example
   * string_value
   */
  operation?: string;
  /**
   * @remarks
   * The display name of the operation.
   * 
   * @example
   * string_value
   */
  operationDisplayName?: string;
  /**
   * @remarks
   * The start timestamp, in milliseconds.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task status. Running is returned upon submission.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The display name of the status.
   * 
   * @example
   * string_value
   */
  statusDisplayName?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * The total credit consumption.
   * 
   * @example
   * string_value
   */
  totalCreditCost?: string;
  /**
   * @remarks
   * The WINNEXO platform user ID.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      billingId: 'billingId',
      bizId: 'bizId',
      bizType: 'bizType',
      costSource: 'costSource',
      costSourceDisplayName: 'costSourceDisplayName',
      endTime: 'endTime',
      entryObjectId: 'entryObjectId',
      entryObjectType: 'entryObjectType',
      isShadow: 'isShadow',
      operation: 'operation',
      operationDisplayName: 'operationDisplayName',
      startTime: 'startTime',
      status: 'status',
      statusDisplayName: 'statusDisplayName',
      tenantId: 'tenantId',
      totalCreditCost: 'totalCreditCost',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingId: 'string',
      bizId: 'string',
      bizType: 'string',
      costSource: { 'type': 'array', 'itemType': 'string' },
      costSourceDisplayName: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      entryObjectId: 'string',
      entryObjectType: 'string',
      isShadow: 'boolean',
      operation: 'string',
      operationDisplayName: 'string',
      startTime: 'string',
      status: 'string',
      statusDisplayName: 'string',
      tenantId: 'number',
      totalCreditCost: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.costSource)) {
      $dara.Model.validateArray(this.costSource);
    }
    if(Array.isArray(this.costSourceDisplayName)) {
      $dara.Model.validateArray(this.costSourceDisplayName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBillingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the list.
   */
  list?: ListBillingResponseBodyList[];
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of bills.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      list: 'list',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListBillingResponseBodyList },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

