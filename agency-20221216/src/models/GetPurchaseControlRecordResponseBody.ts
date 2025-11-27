// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPurchaseControlRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * ban
   */
  changedType?: string;
  /**
   * @example
   * ACPN
   */
  operationPath?: string;
  /**
   * @example
   * 2023-12-15 10:34:36
   */
  operationTime?: string;
  /**
   * @example
   * 292828565558721922
   */
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      changedType: 'ChangedType',
      operationPath: 'OperationPath',
      operationTime: 'OperationTime',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changedType: 'string',
      operationPath: 'string',
      operationTime: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPurchaseControlRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetPurchaseControlRecordResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetPurchaseControlRecordResponseBodyData },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
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

