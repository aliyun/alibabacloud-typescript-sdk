// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssuesResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  affectedUserCount?: number;
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

