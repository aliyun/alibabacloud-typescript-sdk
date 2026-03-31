// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions extends $dara.Model {
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
   * The IDs of the resources to which the remediation belongs. Separate multiple resource IDs with commas (,).
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
   * The status of the remediation record. Valid values:
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

export class ListRemediationExecutionsResponseBodyRemediationExecutionData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * cMbjqNaYs0Ps7zSNiu37****
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried remediation records.
   */
  remediationExecutions?: ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      remediationExecutions: 'RemediationExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      remediationExecutions: { 'type': 'array', 'itemType': ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions },
    };
  }

  validate() {
    if(Array.isArray(this.remediationExecutions)) {
      $dara.Model.validateArray(this.remediationExecutions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried remediation records.
   */
  remediationExecutionData?: ListRemediationExecutionsResponseBodyRemediationExecutionData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 13E67493-3165-529A-A961-BE9E4B11BA11
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationExecutionData: 'RemediationExecutionData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationExecutionData: ListRemediationExecutionsResponseBodyRemediationExecutionData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.remediationExecutionData && typeof (this.remediationExecutionData as any).validate === 'function') {
      (this.remediationExecutionData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

