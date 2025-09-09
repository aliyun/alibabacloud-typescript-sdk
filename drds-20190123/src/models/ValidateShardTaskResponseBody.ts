// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateShardTaskResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a check item.
   * 
   * @example
   * same_schema
   */
  item?: string;
  /**
   * @remarks
   * Indicates the result of the check item. Valid values:
   * 
   * *   **0**: indicates the task is valid.
   * *   **1**: indicates the task is invalid.
   * 
   * @example
   * 0
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShardTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the check results.
   */
  list?: ValidateShardTaskResponseBodyList[];
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 0B6B7BDC-575D-4A77-A4F8-24B7EFAS45FG
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ValidateShardTaskResponseBodyList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

