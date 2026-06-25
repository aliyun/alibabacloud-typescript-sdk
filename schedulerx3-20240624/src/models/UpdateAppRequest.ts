// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppRequest extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * f312159702f4469585586ed5a6904163v3
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
   * - `true`: Enables logging.
   * 
   * - `false`: Disables logging.
   * 
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @example
   * 1
   */
  labelRouteStrategy?: number;
  /**
   * @remarks
   * The task execution queue size.
   * 
   * > Sets the maximum number of concurrent task instances in the application group. Additional task instances are queued for execution and not discarded.
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
   * 测试应用
   */
  title?: string;
  /**
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

