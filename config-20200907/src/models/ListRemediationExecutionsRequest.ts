// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  configRuleId?: string;
  executionStatus?: string;
  maxResults?: number;
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

