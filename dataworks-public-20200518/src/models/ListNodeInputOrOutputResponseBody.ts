// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeInputOrOutputResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the ancestor or descendant node.
   * 
   * @example
   * xxxx.123141254_out
   */
  data?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 1234667
   */
  nodeId?: number;
  /**
   * @remarks
   * This parameter does not take effect. You cannot obtain the parameter settings.
   * 
   * @example
   * dwd_xxx_table
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

export class ListNodeInputOrOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ancestor or descendant nodes.
   */
  data?: ListNodeInputOrOutputResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListNodeInputOrOutputResponseBodyData },
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

