// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamTaskManagersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The communication address or host machine information of the TaskManager returned by the engine. This is not the log download URL.
   * 
   * @example
   * akka.tcp://flink@10.0.0.12:6122/user/rpc/taskmanager_0
   */
  path?: string;
  /**
   * @remarks
   * The identifier of the TaskManager. This corresponds to the TaskmanagerId input parameter of ListStreamTaskManagerLogs and GetStreamLogContent.
   * 
   * @example
   * dataphin-session-7db678957dc449aab0086b931c9f8218-taskmanazjkxq
   */
  taskmanagerId?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      taskmanagerId: 'TaskmanagerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      taskmanagerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStreamTaskManagersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The TaskManager information retrieved in real time. You can use the taskmanagerId to query the logs of the TaskManager.
   */
  data?: ListStreamTaskManagersResponseBodyData[];
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
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListStreamTaskManagersResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

