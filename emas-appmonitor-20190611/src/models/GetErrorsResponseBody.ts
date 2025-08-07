// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorsResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1740488561065
   */
  clientTime?: number;
  /**
   * @example
   * RANDOM-1729634758587856312DEVICE
   */
  did?: string;
  digestHash?: string;
  /**
   * @remarks
   * Utdid
   * 
   * @example
   * RANDOM-1729634758587856312DEVICE
   */
  utdid?: string;
  /**
   * @example
   * 9634758587856312DEV
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientTime: 'ClientTime',
      did: 'Did',
      digestHash: 'DigestHash',
      utdid: 'Utdid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientTime: 'number',
      did: 'string',
      digestHash: 'string',
      utdid: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorsResponseBodyModel extends $dara.Model {
  items?: GetErrorsResponseBodyModelItems[];
  /**
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  pages?: number;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetErrorsResponseBodyModelItems },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 500
   */
  errorCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  model?: GetErrorsResponseBodyModel;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * B3AD0FE4-36EF-1641-90B1-77618166F2ff
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      message: 'string',
      model: GetErrorsResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

