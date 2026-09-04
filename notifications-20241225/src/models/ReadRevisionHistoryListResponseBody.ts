// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadRevisionHistoryListResponseBodyDataRowsPageSpec extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of data.
   * 
   * @example
   * AAAAAT0x7j2M1Og+SpZ8n4WEjfo=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadRevisionHistoryListResponseBodyDataRows extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1305851476425884
   */
  aliUid?: number;
  /**
   * @remarks
   * The event type code.
   * 
   * @example
   * prod_edu_content
   */
  categoryCode?: string;
  /**
   * @remarks
   * The channel group.
   * 
   * @example
   * base
   */
  channelGroupCode?: string;
  /**
   * @remarks
   * The modified value.
   * 
   * @example
   * [
   *     {
   *         "channelType": "sms",
   *         "checkedState": "YES"
   *     },
   *     {
   *         "channelType": "pmsg",
   *         "checkedState": "NO"
   *     },
   *     {
   *         "channelType": "email",
   *         "checkedState": "NO"
   *     }
   * ]
   */
  newValue?: string;
  /**
   * @remarks
   * The revision item code. Valid values:
   * 
   * @example
   * receive_channel
   */
  operationItemCode?: string;
  /**
   * @remarks
   * The revision item name.
   * 
   * @example
   * Reception channel
   */
  operationItemName?: string;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1743583672981
   */
  operationTimestamp?: number;
  /**
   * @remarks
   * The IP address of the operator.
   * 
   * @example
   * /
   */
  operatorIp?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * 1662077279821892
   */
  operatorName?: string;
  /**
   * @remarks
   * The UID of the operator.
   * 
   * @example
   * 1062132414049864
   */
  operatorUid?: number;
  /**
   * @remarks
   * The original value.
   * 
   * @example
   * [
   *     {
   *         "channelType": "sms",
   *         "checkedState": "NO"
   *     },
   *     {
   *         "channelType": "pmsg",
   *         "checkedState": "NO"
   *     },
   *     {
   *         "channelType": "email",
   *         "checkedState": "NO"
   *     }
   * ]
   */
  originalValue?: string;
  /**
   * @remarks
   * The pagination information.
   */
  pageSpec?: ReadRevisionHistoryListResponseBodyDataRowsPageSpec;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * /
   */
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      categoryCode: 'CategoryCode',
      channelGroupCode: 'ChannelGroupCode',
      newValue: 'NewValue',
      operationItemCode: 'OperationItemCode',
      operationItemName: 'OperationItemName',
      operationTimestamp: 'OperationTimestamp',
      operatorIp: 'OperatorIp',
      operatorName: 'OperatorName',
      operatorUid: 'OperatorUid',
      originalValue: 'OriginalValue',
      pageSpec: 'PageSpec',
      remarks: 'Remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      categoryCode: 'string',
      channelGroupCode: 'string',
      newValue: 'string',
      operationItemCode: 'string',
      operationItemName: 'string',
      operationTimestamp: 'number',
      operatorIp: 'string',
      operatorName: 'string',
      operatorUid: 'number',
      originalValue: 'string',
      pageSpec: ReadRevisionHistoryListResponseBodyDataRowsPageSpec,
      remarks: 'string',
    };
  }

  validate() {
    if(this.pageSpec && typeof (this.pageSpec as any).validate === 'function') {
      (this.pageSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadRevisionHistoryListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of data.
   * 
   * @example
   * AAAAAT0x7j2M1Og+SpZ8n4WEjfo=
   */
  nextToken?: string;
  /**
   * @remarks
   * A single row of returned data.
   */
  rows?: ReadRevisionHistoryListResponseBodyDataRows[];
  /**
   * @remarks
   * The total number of messages in the category.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      rows: 'Rows',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      rows: { 'type': 'array', 'itemType': ReadRevisionHistoryListResponseBodyDataRows },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadRevisionHistoryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned by the system. For more information, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The execution result.
   */
  data?: ReadRevisionHistoryListResponseBodyData;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 2xx
   */
  httpCode?: number;
  /**
   * @remarks
   * The message returned when the call failed.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ReadRevisionHistoryListResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

