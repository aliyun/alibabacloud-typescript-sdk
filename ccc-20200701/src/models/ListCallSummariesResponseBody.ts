// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallSummariesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Call ID.
   * 
   * @example
   * job-544789******759424
   */
  contactId?: string;
  /**
   * @remarks
   * Summary information.
   * 
   * @example
   * {
   *     "_sys_field_config": [
   *         {
   *             "Array": false,
   *             "Required": true,
   *             "DisplayName": "主题",
   *             "Attributes": "{}",
   *             "DataType": "TEXT",
   *             "EditorType": "TEXT",
   *             "MaxLength": 30,
   *             "System": true,
   *             "Name": "summaryTitle"
   *         },
   *         {
   *             "Array": false,
   *             "DisplayName": "小结",
   *             "Attributes": "{}",
   *             "DataType": "TEXT",
   *             "EditorType": "TEXTAREA",
   *             "MaxLength": 1000,
   *             "System": true,
   *             "Name": "summaryContent"
   *         },
   *         {
   *             "Array": true,
   *             "DisplayName": "标签",
   *             "Attributes": "{}",
   *             "DataType": "TEXT",
   *             "EditorType": "SELECT",
   *             "System": true,
   *             "Name": "keywords"
   *         }
   *     ],
   *     "summaryContent": "小结内容",
   *     "creator": "creator@ccc-test",
   *     "bizType": "Summary",
   *     "keywords": [
   *         "标签1"
   *     ],
   *     "source": "Console",
   *     "summaryTitle": "测试会话小结",
   *     "instanceId": "ccc-test",
   *     "externalInput": "{\\"summaryTitle\\":\\"测试会话小结\\",\\"summaryContent\\":\\"小结内容\\",\\"keywords\\":[\\"标签1\\"],\\"_sys_field_config\\":[{\\"DisplayName\\":\\"主题\\",\\"Name\\":\\"summaryTitle\\",\\"Required\\":true,\\"EditorType\\":\\"TEXT\\",\\"Array\\":false,\\"DataType\\":\\"TEXT\\",\\"System\\":true,\\"MaxLength\\":30,\\"Attributes\\":\\"{}\\"},{\\"DisplayName\\":\\"小结\\",\\"Name\\":\\"summaryContent\\",\\"EditorType\\":\\"TEXTAREA\\",\\"Array\\":false,\\"DataType\\":\\"TEXT\\",\\"System\\":true,\\"MaxLength\\":1000,\\"Attributes\\":\\"{}\\"},{\\"DisplayName\\":\\"标签\\",\\"Name\\":\\"keywords\\",\\"EditorType\\":\\"SELECT\\",\\"Array\\":true,\\"DataType\\":\\"TEXT\\",\\"System\\":true,\\"Attributes\\":\\"{}\\"}]}",
   *     "templateName": "Summary-Ticket",
   *     "bizId": "job-544789******759424",
   *     "ticketStartTime": 1723449513735,
   *     "ticketId": "ac0dd304-****-****-****-4a90010f0d38",
   *     "definitionId": "Summary-Ticket:2:6881f43a-****-11ee-*****-6eb35a90a7a6"
   * }
   */
  context?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1723449513735
   */
  createdTime?: number;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * creator@ccc-test
   */
  creator?: string;
  /**
   * @remarks
   * Editor.
   * 
   * @example
   * editor@ccc-test
   */
  editor?: string;
  /**
   * @remarks
   * Summary ID.
   * 
   * @example
   * ac0dd304-****-****-****-4a90010f0d38
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      context: 'Context',
      createdTime: 'CreatedTime',
      creator: 'Creator',
      editor: 'Editor',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      context: 'string',
      createdTime: 'number',
      creator: 'string',
      editor: 'string',
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCallSummariesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data.
   */
  data?: ListCallSummariesResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * List of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 932579BC-811A-503D-B322-4C2E57087CAA
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
      data: { 'type': 'array', 'itemType': ListCallSummariesResponseBodyData },
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

