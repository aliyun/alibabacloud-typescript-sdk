// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cr-5392626622af0000****
   */
  configRuleId?: string;
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
   * The maximum number of entries to return for a single request. Valid values: 10 to 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * aVCjqNaSy0Ps7zSMGu25****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      executionStatus: 'ExecutionStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      executionStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

