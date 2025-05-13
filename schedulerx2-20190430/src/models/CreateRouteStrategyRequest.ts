// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group. You can obtain the ID on the **Application Management** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID. You can obtain the ID on the **Task Management** page in the SchedulerX console.
   * 
   * @example
   * 54978
   */
  jobId?: number;
  /**
   * @remarks
   * The name of the routing policy.
   * 
   * This parameter is required.
   * 
   * @example
   * test-strategy
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the **Namespace** page in the SchedulerX console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable the routing policy. Valid values:
   * 
   * *   **0**: disables the routing policy.
   * *   **1**: enables the routing policy.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The details of the routing policy. The value is a JSON string. For more information about this parameter, see **the additional information about request parameters** below this table.
   * 
   * @example
   * [{"percentage":20,"target":"[\\"version1\\"]","targetType":"label"}]
   */
  strategyContent?: string;
  /**
   * @remarks
   * The type of the routing policy. Valid value:
   * 
   * *   **3**: routes by proportion.
   * 
   * @example
   * 3
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      name: 'Name',
      namespace: 'Namespace',
      regionId: 'RegionId',
      status: 'Status',
      strategyContent: 'StrategyContent',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      name: 'string',
      namespace: 'string',
      regionId: 'string',
      status: 'number',
      strategyContent: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

