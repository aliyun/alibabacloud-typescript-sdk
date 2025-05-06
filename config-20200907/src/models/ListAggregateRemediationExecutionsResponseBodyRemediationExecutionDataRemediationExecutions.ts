// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions extends $dara.Model {
  /**
   * @remarks
   * The time when the remediation record was created.
   * 
   * @example
   * 2023-06-25T11:48:15Z
   */
  executionCreateDate?: string;
  /**
   * @remarks
   * The invocation ID of the remediation record.
   * 
   * @example
   * exec-befded3781994ccf****
   */
  executionInvocationId?: string;
  /**
   * @remarks
   * The IDs of the remediated resources. Multiple resource IDs are separated with commas (,).
   * 
   * @example
   * rm-0jlk629z240l8****
   */
  executionResourceIds?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::RDS::DBInstance
   */
  executionResourceType?: string;
  /**
   * @remarks
   * The status of the remediation. Valid values:
   * 
   * *   Success
   * *   Failed
   * 
   * @example
   * Success
   */
  executionStatus?: string;
  /**
   * @remarks
   * The error message returned when the remediation fails.
   * 
   * @example
   * Invocation time out.
   */
  executionStatusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      executionCreateDate: 'ExecutionCreateDate',
      executionInvocationId: 'ExecutionInvocationId',
      executionResourceIds: 'ExecutionResourceIds',
      executionResourceType: 'ExecutionResourceType',
      executionStatus: 'ExecutionStatus',
      executionStatusMessage: 'ExecutionStatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionCreateDate: 'string',
      executionInvocationId: 'string',
      executionResourceIds: 'string',
      executionResourceType: 'string',
      executionStatus: 'string',
      executionStatusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

