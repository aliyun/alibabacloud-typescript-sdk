// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * pxc-i-xxxx
   */
  CNname?: string;
  /**
   * @example
   * dcdev
   */
  DBName?: string;
  /**
   * @example
   * tddl:5.4.19-20240927
   */
  extension?: string;
  /**
   * @example
   * 0
   */
  fail?: string;
  /**
   * @example
   * 1
   */
  frows?: string;
  /**
   * @example
   * ****[****] @ [1XX.XX.XX.XX]
   */
  hostAddress?: string;
  /**
   * @example
   * pxc-xdb-s-xxxx
   */
  insName?: string;
  /**
   * @example
   * 0
   */
  isBind?: string;
  /**
   * @example
   * 1
   */
  lockTimeMS?: string;
  /**
   * @example
   * ["1"]
   */
  params?: string;
  /**
   * @example
   * 10
   */
  parseRowCounts?: string;
  /**
   * @example
   * 2024-11-22T02:22:22.444Z
   */
  queryStartTime?: string;
  /**
   * @example
   * 3.000
   */
  queryTime?: string;
  /**
   * @example
   * 3000.000
   */
  queryTimeMS?: string;
  /**
   * @example
   * 20
   */
  returnRowCounts?: string;
  /**
   * @example
   * 1
   */
  rows?: string;
  /**
   * @example
   * 1
   */
  SCNT?: string;
  /**
   * @example
   * c8df07e5d45cd68da8b4771c2016e20b
   */
  SQLHash?: string;
  /**
   * @example
   * select * from test
   */
  SQLText?: string;
  /**
   * @example
   * select
   */
  sqlType?: string;
  templateId?: string;
  /**
   * @example
   * 0
   */
  tooLong?: string;
  /**
   * @example
   * 17a5c5c840006000
   */
  traceId?: string;
  /**
   * @example
   * XA
   */
  transactionPolicy?: string;
  /**
   * @example
   * 17a5c5c840006000
   */
  trxId?: string;
  /**
   * @example
   * TP
   */
  WT?: string;
  static names(): { [key: string]: string } {
    return {
      CNname: 'CNname',
      DBName: 'DBName',
      extension: 'Extension',
      fail: 'Fail',
      frows: 'Frows',
      hostAddress: 'HostAddress',
      insName: 'InsName',
      isBind: 'IsBind',
      lockTimeMS: 'LockTimeMS',
      params: 'Params',
      parseRowCounts: 'ParseRowCounts',
      queryStartTime: 'QueryStartTime',
      queryTime: 'QueryTime',
      queryTimeMS: 'QueryTimeMS',
      returnRowCounts: 'ReturnRowCounts',
      rows: 'Rows',
      SCNT: 'SCNT',
      SQLHash: 'SQLHash',
      SQLText: 'SQLText',
      sqlType: 'SqlType',
      templateId: 'TemplateId',
      tooLong: 'TooLong',
      traceId: 'TraceId',
      transactionPolicy: 'TransactionPolicy',
      trxId: 'TrxId',
      WT: 'WT',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CNname: 'string',
      DBName: 'string',
      extension: 'string',
      fail: 'string',
      frows: 'string',
      hostAddress: 'string',
      insName: 'string',
      isBind: 'string',
      lockTimeMS: 'string',
      params: 'string',
      parseRowCounts: 'string',
      queryStartTime: 'string',
      queryTime: 'string',
      queryTimeMS: 'string',
      returnRowCounts: 'string',
      rows: 'string',
      SCNT: 'string',
      SQLHash: 'string',
      SQLText: 'string',
      sqlType: 'string',
      templateId: 'string',
      tooLong: 'string',
      traceId: 'string',
      transactionPolicy: 'string',
      trxId: 'string',
      WT: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

