// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions } from "./ListRemediationExecutionsResponseBodyRemediationExecutionDataRemediationExecutions";


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

