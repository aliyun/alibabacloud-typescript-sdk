// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSkillAuditRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The batch ID.
   * 
   * @example
   * 20001
   */
  batchId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 12313
   */
  cid?: string;
  /**
   * @remarks
   * The dry run status.
   * 
   * @example
   * success
   */
  dryRunStatus?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {}
   */
  extInfo?: string;
  /**
   * @remarks
   * The record type.
   * 
   * @example
   * logCorrelation
   */
  recordType?: string;
  /**
   * @remarks
   * The conversion result.
   * 
   * @example
   * success
   */
  scriptTransformResult?: string;
  /**
   * @remarks
   * The conversion status.
   * 
   * @example
   * end
   */
  scriptTransformStatus?: string;
  /**
   * @remarks
   * The source dialect.
   * 
   * @example
   * hive
   */
  sourceDialect?: string;
  /**
   * @remarks
   * The source dialect content.
   * 
   * @example
   * SELECT * FROM t;
   */
  sourceSqlScript?: string;
  /**
   * @remarks
   * The target dialect.
   * 
   * @example
   * bigquery
   */
  targetDialect?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      cid: 'cid',
      dryRunStatus: 'dryRunStatus',
      extInfo: 'extInfo',
      recordType: 'recordType',
      scriptTransformResult: 'scriptTransformResult',
      scriptTransformStatus: 'scriptTransformStatus',
      sourceDialect: 'sourceDialect',
      sourceSqlScript: 'sourceSqlScript',
      targetDialect: 'targetDialect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      cid: 'string',
      dryRunStatus: 'string',
      extInfo: 'string',
      recordType: 'string',
      scriptTransformResult: 'string',
      scriptTransformStatus: 'string',
      sourceDialect: 'string',
      sourceSqlScript: 'string',
      targetDialect: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

