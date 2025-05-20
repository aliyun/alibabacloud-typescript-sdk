// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutonomousNotifyEventContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the notification events.
   * 
   * @example
   * {\\"taskId\\":\\"7e1ba595-0889-48ff-a6ff-010f54991d****\\",\\"taskType\\":\\"SQL_OPTIMIZE\\",\\"advisorId\\":\\"636dc5f34664dd56ff0****\\",\\"sqlId\\":\\"e2b1d6c1ee1bb29555a828b59f16****\\",\\"indexAdviceCount\\":1,\\"indexAdvices\\":[{\\"schemaName\\":\\"das\\",\\"tableName\\":\\"students\\",\\"indexName\\":\\"idx_name\\",\\"columns\\":[\\"name\\"],\\"unique\\":false,\\"ddlAddIndex\\":\\"ALTER TABLE `das`.`students` ADD INDEX `idx_name` (`name`)\\",\\"priority\\":0,\\"optimizeId\\":\\"96232794517277511\\"}],\\"tuningAdvices\\":[],\\"improvement\\":8127.25,\\"supportLevel\\":3,\\"priority\\":\\"HIGH\\"}
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

