// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserMessageResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Message text
   * 
   * @example
   * 哈哈哈
   */
  content?: string;
  /**
   * @remarks
   * Device name
   * 
   * @example
   * 卧室的小芳
   */
  deviceName?: string;
  /**
   * @remarks
   * Time when the message was sent
   * 
   * @example
   * 2022-07-27 14:06:27.000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Message ID
   * 
   * @example
   * 123456
   */
  id?: string;
  /**
   * @remarks
   * Device Image
   * 
   * @example
   * http://xx
   */
  pic?: string;
  /**
   * @remarks
   * Message source: app or box
   * 
   * @example
   * app
   */
  source?: string;
  /**
   * @remarks
   * Source Device ID
   * 
   * @example
   * AF188**065EE4B**DD68CE**951D84D4
   */
  sourceUuid?: string;
  /**
   * @remarks
   * Message status: 0 indicates unread, and 1 indicates read.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Currently only audio is supported.
   * 
   * @example
   * audio
   */
  type?: string;
  /**
   * @remarks
   * Audio message link
   * 
   * @example
   * http://xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      deviceName: 'DeviceName',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      pic: 'Pic',
      source: 'Source',
      sourceUuid: 'SourceUuid',
      status: 'Status',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      deviceName: 'string',
      gmtCreate: 'string',
      id: 'string',
      pic: 'string',
      source: 'string',
      sourceUuid: 'string',
      status: 'number',
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code returned by the service. SUCCESS indicates success; otherwise, it indicates failure.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 外部userId映射关系不存在
   */
  message?: string;
  /**
   * @remarks
   * List of user message query results
   */
  result?: ListUserMessageResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      result: { 'type': 'array', 'itemType': ListUserMessageResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

