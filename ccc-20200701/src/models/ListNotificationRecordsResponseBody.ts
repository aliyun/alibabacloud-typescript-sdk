// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNotificationRecordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * {
   * 	"agentId": "agent@ccc-test",
   * 	"callType": "OUTBOUND",
   * 	"callee": "13****00",
   * 	"caller": "05****81",
   * 	"channelId": "ch-user-13****00-05****81-1772619731285-job-*****",
   * 	"contactId": "job-*****",
   * 	"eventTime": "2026-03-04T10:22:11.309Z",
   * 	"eventType": "Dialing",
   * 	"instanceId": "ccc-test",
   * 	"mediaType": "AUDIO",
   * 	"skillGroupId": "skill@ccc-test"
   * }
   */
  content?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * job-468a63a2-****-****-****-b1ecf726d4be
   */
  notificationKey?: string;
  /**
   * @example
   * Dialing
   */
  notificationType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      instanceId: 'InstanceId',
      notificationKey: 'NotificationKey',
      notificationType: 'NotificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      instanceId: 'string',
      notificationKey: 'string',
      notificationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNotificationRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListNotificationRecordsResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * 0630E5DF-CEB0-445B-8626-D5C7481181C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListNotificationRecordsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

