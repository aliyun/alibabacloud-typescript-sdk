// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeIOResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the ancestor or descendant node.
   * 
   * @example
   * dataworks_a.1234_out
   */
  data?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 123123
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the input or output table.
   * 
   * @example
   * dataworks_a.datastudio_tenant_waitres_alarm
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nodeId: 'NodeId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      nodeId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeIOResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node information.
   */
  data?: ListNodeIOResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ProjectNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The project does not exist.
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * E6F0DBDD-5AD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListNodeIOResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

