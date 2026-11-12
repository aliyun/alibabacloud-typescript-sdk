// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The access token of the application.
   * 
   * @example
   * ltk1ZXHv6LvibZypFkPHzRA
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
   * The application type.
   * 
   * @example
   * 1
   */
  appType?: number;
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
   * > The maximum number of task instances that can run concurrently for an application. Task instances that exceed the concurrency limit are not discarded but are placed in a queue for execution.
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
   * Test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
      appType: 'AppType',
      clusterId: 'ClusterId',
      enableLog: 'EnableLog',
      labelRouteStrategy: 'LabelRouteStrategy',
      maxConcurrency: 'MaxConcurrency',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
      appType: 'number',
      clusterId: 'string',
      enableLog: 'boolean',
      labelRouteStrategy: 'number',
      maxConcurrency: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

