// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions extends $dara.Model {
  executionCreateDate?: string;
  executionInvocationId?: string;
  executionResourceIds?: string;
  executionResourceType?: string;
  executionStatus?: string;
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

export class ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  remediationExecutions?: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions[];
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
      remediationExecutions: { 'type': 'array', 'itemType': ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions },
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

export class ListAggregateRemediationExecutionsResponseBody extends $dara.Model {
  remediationExecutionData?: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remediationExecutionData: 'RemediationExecutionData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationExecutionData: ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData,
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

