// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Cluster ID
   * 
   * @example
   * i118913031696573280136
   */
  clusterId?: string;
  /**
   * @remarks
   * Device creation time.
   * 
   * @example
   * 2024-06-15T10:17:56
   */
  createdTime?: string;
  /**
   * @remarks
   * Diagnostic ID
   * 
   * @example
   * diag-i155363241720059671316
   */
  diagnosticId?: string;
  /**
   * @remarks
   * Diagnostic Information
   */
  diagnosticResults?: any[];
  /**
   * @remarks
   * Diagnostic State
   * 
   * @example
   * Fault
   */
  diagnosticState?: string;
  /**
   * @remarks
   * Diagnostic Type
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * End time of node anomaly issues. Represented according to the ISO8601 standard, in a timezone-aware format, formatted as yyyy-MM-ddTHH:mm:ss+0800
   * 
   * @example
   * 2024-06-11T10:00:30
   */
  endTime?: string;
  /**
   * @remarks
   * List of Node IDs
   */
  nodeIds?: string[];
  /**
   * @remarks
   * Request ID
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

