// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationVariablesResponseBodyDataVariableList extends $dara.Model {
  /**
   * @example
   * ecs.c6.4xlarge
   */
  value?: string;
  /**
   * @example
   * ${instance_type}
   */
  variable?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      variable: 'Variable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      variable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariablesResponseBodyData extends $dara.Model {
  /**
   * @example
   * ob5epf79uv****
   */
  instanceId?: string;
  variableList?: GetApplicationVariablesResponseBodyDataVariableList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      variableList: 'VariableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      variableList: { 'type': 'array', 'itemType': GetApplicationVariablesResponseBodyDataVariableList },
    };
  }

  validate() {
    if(Array.isArray(this.variableList)) {
      $dara.Model.validateArray(this.variableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationVariablesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetApplicationVariablesResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7036DDBE-0ABA-52D7-A39D-75E511970F07
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetApplicationVariablesResponseBodyData },
      message: 'string',
      requestId: 'string',
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

