// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParameterResponseBodyParameterProperties extends $dara.Model {
  /**
   * @remarks
   * The project environment. Valid values:
   * 
   * - `Prod`: production.
   * 
   * - `Dev`: development.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
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
   * @remarks
   * The time when the parameter was created.
   * 
   * @example
   * 1640000000000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator of the parameter.
   * 
   * @example
   * 123456789
   */
  createUser?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * This is a test parameter.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the parameter.
   * 
   * @example
   * 12345
   */
  id?: number;
  /**
   * @remarks
   * The time when the parameter was last modified.
   * 
   * @example
   * 1640000000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The modifier of the parameter.
   * 
   * @example
   * 123456789
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * workspace.para
   */
  name?: string;
  /**
   * @remarks
   * The owner of the parameter.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The value configurations of the parameter.
   */
  properties?: GetParameterResponseBodyParameterProperties[];
  /**
   * @remarks
   * The scope of the parameter.
   * 
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
   * The type of the parameter. Valid values:
   * 
   * - `PlainConstant`: a constant in plaintext.
   * 
   * - `SecretConstant`: a constant in ciphertext.
   * 
   * - `Variable`: a variable.
   * 
   * @example
   * PlainConstant
   */
  type?: string;
  /**
   * @remarks
   * The version of the parameter.
   * 
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
  /**
   * @remarks
   * The details of the parameter.
   */
  parameter?: GetParameterResponseBodyParameter;
  /**
   * @remarks
   * The request ID.
   * 
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

