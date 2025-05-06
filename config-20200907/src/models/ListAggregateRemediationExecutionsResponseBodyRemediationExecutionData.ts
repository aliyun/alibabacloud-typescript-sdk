// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions } from "./ListAggregateRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions";


export class ListAggregateRemediationExecutionsResponseBodyRemediationExecutionData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned for a single request.
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
   * cNclqNaKs0Ds7zSNip0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried remediation records.
   */
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

