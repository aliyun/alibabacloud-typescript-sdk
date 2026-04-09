// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParameterResponseBodyParameterProperties extends $dara.Model {
  /**
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @example
   * value123
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBodyParameter extends $dara.Model {
  /**
   * @example
   * 1640000000000
   */
  createTime?: number;
  /**
   * @example
   * 123456789
   */
  createUser?: string;
  /**
   * @example
   * 这是一个测试参数
   */
  description?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  /**
   * @example
   * 1640000000000
   */
  modifyTime?: number;
  /**
   * @example
   * 123456789
   */
  modifyUser?: string;
  /**
   * @example
   * workspace.para
   */
  name?: string;
  /**
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @example
   * 1000
   */
  projectId?: number;
  properties?: GetParameterResponseBodyParameterProperties[];
  /**
   * @example
   * Project
   */
  scope?: string;
  /**
   * @example
   * PlainConstant
   */
  type?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      properties: 'Properties',
      scope: 'Scope',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'number',
      properties: { 'type': 'array', 'itemType': GetParameterResponseBodyParameterProperties },
      scope: 'string',
      type: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterResponseBody extends $dara.Model {
  parameter?: GetParameterResponseBodyParameter;
  /**
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

