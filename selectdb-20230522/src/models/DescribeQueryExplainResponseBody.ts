// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Explain result.
   * 
   * @example
   * +-----------------------------------------------------------------------+
   * | Explain String|
   * +-----------------------------------------------------------------------+
   * | PLAN FRAGMENT 0                                                       |
   * |OUTPUT EXPRS:                                                        |
   * |    name[#1]                                                           |
   * |    age[#2]                                                            |
   * |  PARTITION: UNPARTITIONED                                |
   * |                                                                        |
   * |  VRESULT SINK                                                         |
   * |                                                                        |
   * |  1:VEXCHANGE                                                          |
   * |     offset: 0                                                        |
   * |                                                                        |
   * | PLAN FRAGMENT 1                                                       |
   * |                                                                        |
   * |  PARTITION: HASH_PARTITIONED: id[#0]                                  |
   * |                                                                        |
   * |  STREAM DATA SINK                                                     |
   * |    EXCHANGE ID: 01|
   * |    UNPARTITIONED                                |
   * |                                                                        |
   * |  0:VOlapScanNode                                                      |
   * |     TABLE: example_db.example_tbl(example_tbl)                        |
   * |     PREAGGREGATION: ON                                                |
   * |     PREDICATES: (age[#2] > 18)                                        |
   * |     cardinality=1, avgRowSize=20.0, numNodes=1                        |
   * |     tablet list: 10023, 10025, 10027                |
   * +-----------------------------------------------------------------------+
   */
  explainResult?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8900A96-67F7-5274-A41B-7722E1ECF8C9
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement for which the execution plan is retrieved. Excessively long SQL statements in audit logs may be truncated.
   * 
   * @example
   * SELECT * FROM example_db.example_tbl
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      explainResult: 'ExplainResult',
      requestId: 'RequestId',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      explainResult: 'string',
      requestId: 'string',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

