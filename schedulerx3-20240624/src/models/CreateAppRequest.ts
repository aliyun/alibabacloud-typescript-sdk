// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppRequest extends $dara.Model {
  /**
   * @example
   * ltk1ZXHv6LvibZypFkPHzRA
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * true
   */
  enableLog?: boolean;
  labelRouteStrategy?: number;
  /**
   * @example
   * 10
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * This parameter is required.
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

