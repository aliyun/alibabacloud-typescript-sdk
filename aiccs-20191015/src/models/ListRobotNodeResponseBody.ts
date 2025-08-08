// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRobotNodeResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  isOutput?: number;
  modelName?: string;
  /**
   * @example
   * 123456
   */
  nodeIdentifier?: string;
  nodeName?: string;
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
   * @example
   * Ok
   */
  code?: string;
  data?: ListRobotNodeResponseBodyData[];
  /**
   * @example
   * Ok
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
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

