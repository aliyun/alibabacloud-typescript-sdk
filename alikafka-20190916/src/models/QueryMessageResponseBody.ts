// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageResponseBodyMessageList extends $dara.Model {
  /**
   * @remarks
   * The checksum value.
   * 
   * @example
   * 0
   */
  checksum?: number;
  /**
   * @remarks
   * The key of the message.
   * 
   * @example
   * this is key
   */
  key?: string;
  /**
   * @remarks
   * Indicates whether the key is truncated.
   * 
   * @example
   * false
   */
  keyTruncated?: boolean;
  /**
   * @remarks
   * The partition offset.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  /**
   * @remarks
   * The size of the serialized key. Unit: bytes.
   * 
   * @example
   * 11
   */
  serializedKeySize?: number;
  /**
   * @remarks
   * The size of the serialized value. Unit: bytes.
   * 
   * @example
   * 20
   */
  serializedValueSize?: number;
  /**
   * @remarks
   * The message creation time. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1705482172640
   */
  timestamp?: number;
  /**
   * @remarks
   * The timestamp type.
   * 
   * @example
   * CreateTime
   */
  timestampType?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * dqc_test2
   */
  topic?: string;
  /**
   * @remarks
   * The size of the truncated key message. Unit: bytes.
   * 
   * 
   * > Each queried message displays a maximum of 1 KB of content. Content that exceeds 1 KB is automatically truncated.
   * [For more information, refer to the documentation](https://help.aliyun.com/document_detail/113172.html).
   * 
   * @example
   * 0
   */
  truncatedKeySize?: number;
  /**
   * @remarks
   * The size of the truncated value message. Unit: bytes.
   * 
   * > Each queried message displays a maximum of 1 KB of content. Content that exceeds 1 KB is automatically truncated.
   * [For more information, refer to the documentation](https://help.aliyun.com/document_detail/113172.html).
   * 
   * @example
   * 0
   */
  truncatedValueSize?: number;
  /**
   * @remarks
   * The value of the message.
   * 
   * @example
   * Welcome to Ali kafka
   */
  value?: string;
  /**
   * @remarks
   * Indicates whether the value is truncated.
   * 
   * @example
   * false
   */
  valueTruncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      checksum: 'Checksum',
      key: 'Key',
      keyTruncated: 'KeyTruncated',
      offset: 'Offset',
      partition: 'Partition',
      serializedKeySize: 'SerializedKeySize',
      serializedValueSize: 'SerializedValueSize',
      timestamp: 'Timestamp',
      timestampType: 'TimestampType',
      topic: 'Topic',
      truncatedKeySize: 'TruncatedKeySize',
      truncatedValueSize: 'TruncatedValueSize',
      value: 'Value',
      valueTruncated: 'ValueTruncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'number',
      key: 'string',
      keyTruncated: 'boolean',
      offset: 'number',
      partition: 'number',
      serializedKeySize: 'number',
      serializedValueSize: 'number',
      timestamp: 'number',
      timestampType: 'string',
      topic: 'string',
      truncatedKeySize: 'number',
      truncatedValueSize: 'number',
      value: 'string',
      valueTruncated: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The query results of messages.
   */
  messageList?: QueryMessageResponseBodyMessageList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABA4A7FD-E10F-45C7-9774-A5236015****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      messageList: 'MessageList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      messageList: { 'type': 'array', 'itemType': QueryMessageResponseBodyMessageList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

