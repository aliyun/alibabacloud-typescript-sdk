// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * ltk1ZXHv6LvibZypFkPHzRA
   */
  accessToken?: string;
  /**
   * @remarks
   * The app name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The app type.
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
   * Indicates whether to enable logging.
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @remarks
   * The label routing strategy.
   */
  labelRouteStrategy?: number;
  /**
   * @remarks
   * The maximum concurrency.
   * 
   * > This parameter specifies the maximum number of task instances that can run concurrently for the app. Task instances that exceed this limit are not discarded. They are queued for execution.
   * 
   * @example
   * 10
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * The title of the app.
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

