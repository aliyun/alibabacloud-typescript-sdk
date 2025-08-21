// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserMessageResponseBodyResult extends $dara.Model {
  content?: string;
  deviceName?: string;
  /**
   * @example
   * 2022-07-27 14:06:27.000
   */
  gmtCreate?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * http://xx
   */
  pic?: string;
  /**
   * @example
   * app
   */
  source?: string;
  /**
   * @example
   * AF188**065EE4B**DD68CE**951D84D4
   */
  sourceUuid?: string;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * audio
   */
  type?: string;
  /**
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
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
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

