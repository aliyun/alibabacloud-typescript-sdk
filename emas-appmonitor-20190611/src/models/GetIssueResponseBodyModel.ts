// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIssueResponseBodyModel extends $dara.Model {
  affectedVersions?: string[];
  /**
   * @example
   * java.lang.NullPointerException: Attempt to invoke virtual method \\"java.lang.Object java.lang.ref.WeakReference.get()\\" on a null object reference
   * 	at e.l.a.a.d.h(BasePresenter.java:1)
   * 	at e.l.a.g.c.e.g.s1(GoodsPigLoadPresenter.java:1)
   * 	at e.l.a.h.d.a$a.a(AliOssManager.java:2)
   */
  cruxStack?: string;
  /**
   * @example
   * -6428474329608402395
   */
  digestHash?: string;
  /**
   * @example
   * 2
   */
  errorColumn?: number;
  /**
   * @example
   * 2
   */
  errorCount?: number;
  /**
   * @example
   * 0.2
   */
  errorCountGrowthRate?: number;
  /**
   * @example
   * 4
   */
  errorDeviceCount?: number;
  /**
   * @example
   * 0.2
   */
  errorDeviceCountGrowthRate?: number;
  /**
   * @example
   * 0.2
   */
  errorDeviceRate?: number;
  /**
   * @example
   * 0.2
   */
  errorDeviceRateGrowthRate?: number;
  /**
   * @example
   * test.js
   */
  errorFileName?: string;
  /**
   * @example
   * 1
   */
  errorLine?: string;
  /**
   * @example
   * Error
   */
  errorName?: string;
  /**
   * @example
   * 0
   */
  errorRate?: number;
  /**
   * @example
   * 0.2
   */
  errorRateGrowthRate?: number;
  /**
   * @example
   * ErrorType
   */
  errorType?: string;
  /**
   * @example
   * 1.0.0
   */
  firstVersion?: string;
  /**
   * @example
   * 1673423227000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1740489688615
   */
  gmtLatest?: number;
  /**
   * @example
   * 1
   */
  keyLine?: number;
  name?: string;
  /**
   * @example
   * java.lang.NullPointerException
   */
  stack?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: number;
  /**
   * @example
   * trustee instance
   */
  summary?: string;
  /**
   * @example
   * true
   */
  symbolicStatus?: boolean;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      affectedVersions: 'AffectedVersions',
      cruxStack: 'CruxStack',
      digestHash: 'DigestHash',
      errorColumn: 'ErrorColumn',
      errorCount: 'ErrorCount',
      errorCountGrowthRate: 'ErrorCountGrowthRate',
      errorDeviceCount: 'ErrorDeviceCount',
      errorDeviceCountGrowthRate: 'ErrorDeviceCountGrowthRate',
      errorDeviceRate: 'ErrorDeviceRate',
      errorDeviceRateGrowthRate: 'ErrorDeviceRateGrowthRate',
      errorFileName: 'ErrorFileName',
      errorLine: 'ErrorLine',
      errorName: 'ErrorName',
      errorRate: 'ErrorRate',
      errorRateGrowthRate: 'ErrorRateGrowthRate',
      errorType: 'ErrorType',
      firstVersion: 'FirstVersion',
      gmtCreate: 'GmtCreate',
      gmtLatest: 'GmtLatest',
      keyLine: 'KeyLine',
      name: 'Name',
      stack: 'Stack',
      status: 'Status',
      summary: 'Summary',
      symbolicStatus: 'SymbolicStatus',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedVersions: { 'type': 'array', 'itemType': 'string' },
      cruxStack: 'string',
      digestHash: 'string',
      errorColumn: 'number',
      errorCount: 'number',
      errorCountGrowthRate: 'number',
      errorDeviceCount: 'number',
      errorDeviceCountGrowthRate: 'number',
      errorDeviceRate: 'number',
      errorDeviceRateGrowthRate: 'number',
      errorFileName: 'string',
      errorLine: 'string',
      errorName: 'string',
      errorRate: 'number',
      errorRateGrowthRate: 'number',
      errorType: 'string',
      firstVersion: 'string',
      gmtCreate: 'number',
      gmtLatest: 'number',
      keyLine: 'number',
      name: 'string',
      stack: 'string',
      status: 'number',
      summary: 'string',
      symbolicStatus: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.affectedVersions)) {
      $dara.Model.validateArray(this.affectedVersions);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

