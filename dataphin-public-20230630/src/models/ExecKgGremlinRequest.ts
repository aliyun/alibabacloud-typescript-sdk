// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecKgGremlinRequestExecCommandParams extends $dara.Model {
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

export class ExecKgGremlinRequestExecCommand extends $dara.Model {
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
  params?: ExecKgGremlinRequestExecCommandParams[];
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
      params: { 'type': 'array', 'itemType': ExecKgGremlinRequestExecCommandParams },
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

export class ExecKgGremlinRequest extends $dara.Model {
  /**
   * @remarks
   * The custom Cypher query command.
   * 
   * This parameter is required.
   */
  execCommand?: ExecKgGremlinRequestExecCommand;
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
   * @remarks
   * The ID of the operator user.
   * 
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
      execCommand: ExecKgGremlinRequestExecCommand,
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

