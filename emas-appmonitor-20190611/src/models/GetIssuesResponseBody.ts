// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssuesResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  affectedUserCount?: number;
  allocSizeMax?: number;
  allocSizePct50?: number;
  allocSizePct70?: number;
  allocSizePct90?: number;
  /**
   * @example
   * -3481243636390427020
   */
  digestHash?: string;
  /**
   * @example
   * 1
   */
  domScore?: string;
  /**
   * @example
   * 1
   */
  errorColumn?: number;
  /**
   * @example
   * 2
   */
  errorCount?: number;
  /**
   * @example
   * 1
   */
  errorDeviceCount?: number;
  /**
   * @example
   * 1.0
   */
  errorDeviceRate?: number;
  /**
   * @example
   * test.js
   */
  errorFileName?: string;
  /**
   * @example
   * 1
   */
  errorLine?: number;
  /**
   * @example
   * ErrorName
   */
  errorName?: string;
  /**
   * @example
   * 0
   */
  errorRate?: number;
  /**
   * @example
   * Error
   */
  errorType?: string;
  /**
   * @example
   * 1691745496851
   */
  eventTime?: string;
  /**
   * @example
   * 1.0.0
   */
  firstVersion?: string;
  /**
   * @example
   * ServiceType
   */
  name?: string;
  /**
   * @example
   * java.lang.NullPointerException: Attempt to invoke virtual method \\"java.lang.Object java.lang.ref.WeakReference.get()\\" on a null object reference
   * 	at e.l.a.a.d.h(BasePresenter.java:1)
   * 	at e.l.a.g.c.e.g.s1(GoodsPigLoadPresenter.java:1)
   * 	at e.l.a.h.d.a$a.a(AliOssManager.java:2)
   */
  stack?: string;
  /**
   * @example
   * CREATE_COMPLETE
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      affectedUserCount: 'AffectedUserCount',
      allocSizeMax: 'AllocSizeMax',
      allocSizePct50: 'AllocSizePct50',
      allocSizePct70: 'AllocSizePct70',
      allocSizePct90: 'AllocSizePct90',
      digestHash: 'DigestHash',
      domScore: 'DomScore',
      errorColumn: 'ErrorColumn',
      errorCount: 'ErrorCount',
      errorDeviceCount: 'ErrorDeviceCount',
      errorDeviceRate: 'ErrorDeviceRate',
      errorFileName: 'ErrorFileName',
      errorLine: 'ErrorLine',
      errorName: 'ErrorName',
      errorRate: 'ErrorRate',
      errorType: 'ErrorType',
      eventTime: 'EventTime',
      firstVersion: 'FirstVersion',
      name: 'Name',
      stack: 'Stack',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedUserCount: 'number',
      allocSizeMax: 'number',
      allocSizePct50: 'number',
      allocSizePct70: 'number',
      allocSizePct90: 'number',
      digestHash: 'string',
      domScore: 'string',
      errorColumn: 'number',
      errorCount: 'number',
      errorDeviceCount: 'number',
      errorDeviceRate: 'number',
      errorFileName: 'string',
      errorLine: 'number',
      errorName: 'string',
      errorRate: 'number',
      errorType: 'string',
      eventTime: 'string',
      firstVersion: 'string',
      name: 'string',
      stack: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesResponseBodyModel extends $dara.Model {
  items?: GetIssuesResponseBodyModelItems[];
  /**
   * @example
   * 2
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
   * 0
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
      items: { 'type': 'array', 'itemType': GetIssuesResponseBodyModelItems },
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

export class GetIssuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  model?: GetIssuesResponseBodyModel;
  /**
   * @example
   * 22111548-55D2-4258-9B18-273E4C134444
   */
  requestId?: string;
  /**
   * @example
   * True
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
      model: GetIssuesResponseBodyModel,
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

