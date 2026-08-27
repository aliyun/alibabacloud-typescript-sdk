// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AgentTeams instance.
   * 
   * This parameter is required.
   * 
   * @example
   * at-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page size. Default value: `100`. Valid values: `1` to `100`.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. Do not specify this parameter for the first request.
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * The task status filter.
   * 
   * @example
   * PAUSED
   */
  status?: string;
  /**
   * @remarks
   * The task code. If not specified, all asynchronous tasks are queried. You can pass in a `TaskCode` to filter results. To query multiple task types, submit separate requests.
   * 
   * Currently supported `taskCode` values include: `CreateInstance`, `RenewInstance`, `UpdateInstance`, `ReleaseInstance`, `ConfigureNatGateway`, `UpgradeInstance`, `CreateWorkerEndpoint`, and `DeleteWorkerEndpoint`.
   * 
   * Legacy task codes such as `LIFECYCLE_MAGIC_PAY_ORDER_CALLBACK_CREATE` are supported for backward compatibility, but `CreateInstance` is recommended.
   * 
   * @example
   * LIFECYCLE_MAGIC_PAY_ORDER_CALLBACK_CREATE
   */
  taskCode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      status: 'Status',
      taskCode: 'TaskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      taskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

