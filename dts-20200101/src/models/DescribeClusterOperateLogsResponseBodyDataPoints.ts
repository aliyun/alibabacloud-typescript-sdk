// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterOperateLogsResponseBodyDataPoints extends $dara.Model {
  /**
   * @remarks
   * Other description of the operation.
   * 
   * @example
   * null
   */
  content?: string;
  /**
   * @remarks
   * The primary key of the log table.
   * 
   * @example
   * 237827
   */
  id?: string;
  /**
   * @remarks
   * The time when the operation is recorded. The value is in the UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1642077211574
   */
  logDatetime?: number;
  /**
   * @remarks
   * The value of the parameter after the operation if the operation is an UPDATE operation.
   * 
   * @example
   * 105
   */
  newValue?: string;
  /**
   * @remarks
   * The value of the parameter before the operation if the operation is an UPDATE operation.
   * 
   * @example
   * 100
   */
  oldValue?: string;
  /**
   * @remarks
   * The type of the operation.
   * 
   * @example
   * modify-oversold-ratio
   */
  operationName?: string;
  /**
   * @remarks
   * The user who performed the operation.
   * 
   * @example
   * null
   */
  operationUser?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of **1** indicates that the request was successful.
   * 
   * @example
   * 1
   */
  success?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      logDatetime: 'LogDatetime',
      newValue: 'NewValue',
      oldValue: 'OldValue',
      operationName: 'OperationName',
      operationUser: 'OperationUser',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      logDatetime: 'number',
      newValue: 'string',
      oldValue: 'string',
      operationName: 'string',
      operationUser: 'string',
      success: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

