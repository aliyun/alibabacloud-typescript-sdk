// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowRequest extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * xxl-job-executor-sample
   */
  appName?: string;
  /**
   * @remarks
   * The custom calendar. This parameter is optional when the time type is cron.
   * 
   * @example
   * workday
   */
  calendar?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client and ensure that the value is unique across different requests. The client token can contain only ASCII characters. Note: If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId may be different for each API request.
   * 
   * @example
   * 123456789
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * my first workflow for data analyse
   */
  description?: string;
  /**
   * @remarks
   * The maximum concurrency of the workflow.
   * 
   * @example
   * 1
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The workflow name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-workflow
   */
  name?: string;
  /**
   * @remarks
   * The workflow status. Default value: 0. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The time expression. Set the time expression based on the selected time type.
   * - **none**: Not required.
   * - **cron**: Enter a standard cron expression. Online validation is supported.
   * - **api**: Not required.
   * 
   * @example
   * 0 0 4 ? * Mon/1
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type. Valid values:
   * - -1: none<br/>
   * - 1: cron<br/>
   * - 100: api
   * 
   * @example
   * 1
   */
  timeType?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * GMT+8
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      calendar: 'Calendar',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      description: 'Description',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      calendar: 'string',
      clientToken: 'string',
      clusterId: 'string',
      description: 'string',
      maxConcurrency: 'number',
      name: 'string',
      status: 'number',
      timeExpression: 'string',
      timeType: 'number',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

