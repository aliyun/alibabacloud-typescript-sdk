// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecKgCypherRequestExecCommandParams extends $dara.Model {
  /**
   * @remarks
   * The data type of paramValue.
   * 
   * @example
   * STRING
   */
  dataType?: string;
  /**
   * @remarks
   * paramKey
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * paramValue
   * 
   * @example
   * Alibaba
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      key: 'string',
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

export class ExecKgCypherRequestExecCommand extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The input parameters of the query statement.
   */
  params?: ExecKgCypherRequestExecCommandParams[];
  /**
   * @remarks
   * The custom Cypher query statement.
   * 
   * @example
   * MATCH (n) RETURN n LIMIT 10
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      params: 'Params',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      params: { 'type': 'array', 'itemType': ExecKgCypherRequestExecCommandParams },
      query: 'string',
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

export class ExecKgCypherRequest extends $dara.Model {
  /**
   * @remarks
   * The custom Cypher query instruction.
   * 
   * This parameter is required.
   */
  execCommand?: ExecKgCypherRequestExecCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      execCommand: 'ExecCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execCommand: ExecKgCypherRequestExecCommand,
      opTenantId: 'number',
      opUserId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.execCommand && typeof (this.execCommand as any).validate === 'function') {
      (this.execCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

