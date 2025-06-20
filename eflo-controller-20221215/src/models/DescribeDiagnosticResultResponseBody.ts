// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i118913031696573280136
   */
  clusterId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-06-15T10:17:56
   */
  createdTime?: string;
  /**
   * @remarks
   * The diagnostic task ID.
   * 
   * @example
   * diag-i155363241720059671316
   */
  diagnosticId?: string;
  /**
   * @remarks
   * The diagnostic information.
   */
  diagnosticResults?: any[];
  /**
   * @remarks
   * The diagnostic status.
   * 
   * @example
   * Fault
   */
  diagnosticState?: string;
  /**
   * @remarks
   * The type of the diagnostic task.
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * The end time of the instance exception. The time format with time zone based on the ISO8601 standard. The format is yyyy-MM-ddTHH:mm:ss +0800.
   * 
   * @example
   * 2024-06-11T10:00:30
   */
  endTime?: string;
  /**
   * @remarks
   * The node IDs.
   */
  nodeIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F065DDD-6996-5973-9691-9EC57BD0072E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createdTime: 'CreatedTime',
      diagnosticId: 'DiagnosticId',
      diagnosticResults: 'DiagnosticResults',
      diagnosticState: 'DiagnosticState',
      diagnosticType: 'DiagnosticType',
      endTime: 'EndTime',
      nodeIds: 'NodeIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createdTime: 'string',
      diagnosticId: 'string',
      diagnosticResults: { 'type': 'array', 'itemType': 'any' },
      diagnosticState: 'string',
      diagnosticType: 'string',
      endTime: 'string',
      nodeIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosticResults)) {
      $dara.Model.validateArray(this.diagnosticResults);
    }
    if(Array.isArray(this.nodeIds)) {
      $dara.Model.validateArray(this.nodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

