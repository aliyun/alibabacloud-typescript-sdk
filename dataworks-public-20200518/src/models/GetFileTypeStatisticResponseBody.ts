// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileTypeStatisticResponseBodyProgramTypeAndCounts extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The type of the node.
   * 
   * Valid values:
   * 
   * 6 (Shell node), 10 (ODPS SQL node), 11 (ODPS MR node), 23 (Data Integration node), 24 (ODPS Script node), 99 (zero load node), 221 (PyODPS 2 node), 225 (ODPS Spark node), 227 (EMR Hive node), 228 (EMR Spark node), 229 (EMR Spark SQL node), 230 (EMR MR node), 239 (OSS object inspection node), 257 (EMR Shell node), 258 (EMR Spark Shell node), 259 (EMR Presto node), 260 (EMR Impala node), 900 (real-time data synchronization node), 1089 (cross-tenant collaboration node), 1091 (Hologres development node), 1093 (Hologres SQL node), 1100 (assignment node), and 1221 (PyODPS 3 node).
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      programType: 'ProgramType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      programType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTypeStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of node types and quantity.
   */
  programTypeAndCounts?: GetFileTypeStatisticResponseBodyProgramTypeAndCounts[];
  /**
   * @remarks
   * The ID of the request. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      programTypeAndCounts: 'ProgramTypeAndCounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programTypeAndCounts: { 'type': 'array', 'itemType': GetFileTypeStatisticResponseBodyProgramTypeAndCounts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.programTypeAndCounts)) {
      $dara.Model.validateArray(this.programTypeAndCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

