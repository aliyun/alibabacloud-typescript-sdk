// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSqlAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database for which you want to enable the SQL audit feature.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to backtrack historical SQL statements for auditing.
   * 
   * @example
   * true
   */
  isRecall?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the backtracking ends. Unit: milliseconds.
   * 
   * > The end time of the backtracking must be later than the start time of the backtracking.
   * 
   * @example
   * 1568875132000
   */
  recallEndTimestamp?: string;
  /**
   * @remarks
   * The timestamp that indicates when the backtracking starts. Unit: milliseconds.
   * 
   * @example
   * 1568875132000
   */
  recallStartTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      isRecall: 'IsRecall',
      recallEndTimestamp: 'RecallEndTimestamp',
      recallStartTimestamp: 'RecallStartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      isRecall: 'boolean',
      recallEndTimestamp: 'string',
      recallStartTimestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

