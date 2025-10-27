// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchedulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the flow that is associated with the time-based schedules. The name is unique within the region and cannot be modified after the flow is created. The name must meet the following conventions:
   * 
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must start with a letter or an underscore (_).
   * *   The name is case-sensitive.
   * *   The name must be 1 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testFlowName
   */
  flowName?: string;
  /**
   * @remarks
   * The number of schedules that you want to query. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  limit?: number;
  /**
   * @remarks
   * For the first query, you do not need to specify this parameter. The system uses the value of the **FlowName** parameter as the value of the **NextToken** parameter. When the query ends, no value is returned for this parameter.
   * 
   * @example
   * testNextToken
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'FlowName',
      limit: 'Limit',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      limit: 'number',
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

