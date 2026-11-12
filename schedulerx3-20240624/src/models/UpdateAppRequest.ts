// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * demo-app-key-20261109
   */
  accessToken?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
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
   * Specifies whether to enable logging.
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The label routing strategy.
   * 
   * @example
   * 1
   */
  labelRouteStrategy?: number;
  /**
   * @remarks
   * The size of the task execution queue.
   * > The maximum number of task instances that can run concurrently for an application. Task instances that exceed the concurrency limit are not discarded, but are placed in a queue to wait for execution.
   * 
   * @example
   * 10
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The title.
   * 
   * This parameter is required.
   * 
   * @example
   * Test application
   */
  title?: string;
  /**
   * @remarks
   * The primary key ID of the worker group.
   * 
   * @example
   * 1
   */
  workerId?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
      clusterId: 'ClusterId',
      enableLog: 'EnableLog',
      labelRouteStrategy: 'LabelRouteStrategy',
      maxConcurrency: 'MaxConcurrency',
      title: 'Title',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
      clusterId: 'string',
      enableLog: 'boolean',
      labelRouteStrategy: 'number',
      maxConcurrency: 'number',
      title: 'string',
      workerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

