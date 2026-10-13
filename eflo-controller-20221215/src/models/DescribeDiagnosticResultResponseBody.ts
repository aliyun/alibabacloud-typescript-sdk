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
   * The time when the device was created. The time is in ISO 8601 format.
   * 
   * @example
   * 2024-06-15T10:17:56
   */
  createdTime?: string;
  /**
   * @remarks
   * The diagnostic ID.
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
   * The diagnostic type.
   * 
   * @example
   * CheckByAiJobLogs
   */
  diagnosticType?: string;
  /**
   * @remarks
   * The time when the node exception ended. The time is in ISO 8601 format with a time zone, in the yyyy-MM-ddTHH:mm:ss+0800 format.
   * 
   * @example
   * 2024-06-11T10:00:30
   */
  endTime?: string;
  /**
   * @remarks
   * The list of node IDs.
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

