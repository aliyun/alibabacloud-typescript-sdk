// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiAppRiskEventByPageResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the AI application.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the AI application.
   * 
   * @example
   * name-xxx
   */
  appName?: string;
  /**
   * @remarks
   * The source channel.
   * 
   * @example
   * bailian
   */
  channel?: string;
  /**
   * @remarks
   * The time when the event processing was completed. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-01-10 11:42:31
   */
  endTime?: string;
  /**
   * @remarks
   * The code of the event, which identifies the type or category of the event.
   * 
   * @example
   * de_aamexg3015
   */
  eventCode?: string;
  /**
   * @remarks
   * The description of the event, which details the content of the risk event.
   * 
   * @example
   * Sensitive information detected in model output
   */
  eventDesc?: string;
  /**
   * @remarks
   * The English description of the event, which details the content of the risk event.
   * 
   * @example
   * Sensitive information detected in model output
   */
  eventDescEn?: string;
  /**
   * @remarks
   * The ID of the event, which uniquely identifies a risk event.
   * 
   * @example
   * e-a7gvnv3vid536dfxj
   */
  eventId?: string;
  /**
   * @remarks
   * The name of the event, which provides a brief description of the risk event.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the event was processed. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-01-10 11:42:31
   */
  handleTime?: string;
  /**
   * @remarks
   * The label used to mark or classify the event.
   * 
   * @example
   * label-03
   */
  label?: string;
  /**
   * @remarks
   * The description of the label, which provides detailed information about the label.
   * 
   * @example
   * Sensitive data label
   */
  labelDesc?: string;
  /**
   * @remarks
   * The risk level, which indicates the severity of the event, such as high, medium, or low.
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * The time when the event started. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-12-21 15:30:19
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the event, which indicates the processing status of the current event, such as pending or processed.
   * 
   * @example
   * resolved
   */
  status?: string;
  /**
   * @remarks
   * The event type, which indicates the category of the risk event, such as security or performance.
   * 
   * @example
   * 0
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      channel: 'Channel',
      endTime: 'EndTime',
      eventCode: 'EventCode',
      eventDesc: 'EventDesc',
      eventDescEn: 'EventDescEn',
      eventId: 'EventId',
      eventName: 'EventName',
      handleTime: 'HandleTime',
      label: 'Label',
      labelDesc: 'LabelDesc',
      level: 'Level',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      channel: 'string',
      endTime: 'string',
      eventCode: 'string',
      eventDesc: 'string',
      eventDescEn: 'string',
      eventId: 'string',
      eventName: 'string',
      handleTime: 'string',
      label: 'string',
      labelDesc: 'string',
      level: 'string',
      startTime: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAiAppRiskEventByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned data.
   */
  items?: ListAiAppRiskEventByPageResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of results returned per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that there are no more pages.
   * 
   * @example
   * 1a320d468c75e987f297484532c16e34d0ab6e7e43f8b73d
   */
  nextToken?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListAiAppRiskEventByPageResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

