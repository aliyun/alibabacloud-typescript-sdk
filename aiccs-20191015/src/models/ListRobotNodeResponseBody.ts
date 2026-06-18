// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotNodeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether it is an output. Valid values:
   * 
   * - **1**: Yes.
   * - **0**: No.
   * 
   * @example
   * 1
   */
  isOutput?: number;
  /**
   * @remarks
   * Model name.
   * 
   * @example
   * 模型一
   */
  modelName?: string;
  /**
   * @remarks
   * Output ID.
   * 
   * @example
   * 12****
   */
  nodeIdentifier?: string;
  /**
   * @remarks
   * Node name.
   * 
   * @example
   * 理财
   */
  nodeName?: string;
  /**
   * @remarks
   * Flow name.
   * 
   * @example
   * 开场白
   */
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      isOutput: 'IsOutput',
      modelName: 'ModelName',
      nodeIdentifier: 'NodeIdentifier',
      nodeName: 'NodeName',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOutput: 'number',
      modelName: 'string',
      nodeIdentifier: 'string',
      nodeName: 'string',
      processName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRobotNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code. A return value of OK indicates that the request succeeded.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * List of robot nodes.
   */
  data?: ListRobotNodeResponseBodyData[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * Ok
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the API invocation succeeded. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
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
      data: { 'type': 'array', 'itemType': ListRobotNodeResponseBodyData },
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

