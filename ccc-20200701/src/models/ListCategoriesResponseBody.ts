// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data. The category node information, in the format of a JSON string.
   * 
   * @example
   * [{\\"categoryId\\":\\"43c2671b-8939-4223-****-6bd187905cc8\\",\\"childCategoryList\\":[{\\"categoryId\\":\\"120816ad-4392-4edf-****-6d053d5cfa5a\\",\\"childCategoryList\\":[],\\"deleted\\":0,\\"editor\\":\\"283277706217028904\\",\\"editorName\\":\\"283277706217028904\\",\\"instanceId\\":\\"cccV2-kmz\\",\\"itemCount\\":0,\\"level\\":2,\\"name\\":\\"客户反馈\\",\\"parentCategoryId\\":\\"43c2671b-8939-****-86d0-6bd187905cc8\\",\\"type\\":\\"Ticket\\"}],\\"deleted\\":0,\\"editor\\":\\"283277706217028904\\",\\"editorName\\":\\"283277706217028904\\",\\"instanceId\\":\\"cccV2-kmz\\",\\"itemCount\\":10,\\"level\\":1,\\"name\\":\\"测试一01类目\\",\\"type\\":\\"Ticket\\"},{\\"categoryId\\":\\"4948fcd0-2972-****-81c6-1a00927e1802\\",\\"childCategoryList\\":[],\\"deleted\\":0,\\"editor\\":\\"283277706217028904\\",\\"editorName\\":\\"283277706217028904\\",\\"instanceId\\":\\"cccV2-kmz\\",\\"itemCount\\":0,\\"level\\":1,\\"name\\":\\"生产环境验证\\",\\"type\\":\\"Ticket\\"},{\\"categoryId\\":\\"c426bd7f-9661-47c3-****-2508f1a32f66\\",\\"childCategoryList\\":[],\\"deleted\\":0,\\"editor\\":\\"269801834095770945\\",\\"editorName\\":\\"269801834095770945\\",\\"instanceId\\":\\"cccV2-kmz\\",\\"itemCount\\":4,\\"level\\":1,\\"name\\":\\"测试环境测试\\",\\"type\\":\\"Ticket\\"}]
   */
  data?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The list of incorrect parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE803553-8AA9-4B9D-9E4E-A82BC69EDCEE
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

