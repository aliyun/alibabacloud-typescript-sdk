// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsTopicStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The point in time when the latest message is ready in the topic. If no message exists in the topic, the return value of this parameter is 0.
   * 
   * The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * For information about the definition of ready messages and ready time, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * 1570864984364
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * Indicates the operations that you can perform on the topic. Valid values:
   * 
   * *   **2**: You can publish messages to the topic.
   * *   **4**: You can subscribe to the topic.
   * *   **6**: You can publish messages to and subscribe to the topic.
   * 
   * @example
   * 6
   */
  perm?: number;
  /**
   * @remarks
   * The total number of messages in all partitions of the topic.
   * 
   * @example
   * 2310
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimeStamp: 'LastTimeStamp',
      perm: 'Perm',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimeStamp: 'number',
      perm: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure of the queried topic.
   */
  data?: OnsTopicStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 427EE49D-D762-41FB-8F3D-9BAC96C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTopicStatusResponseBodyData,
      requestId: 'string',
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

