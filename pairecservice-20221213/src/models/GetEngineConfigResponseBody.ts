// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEngineConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the engine configuration.
   * 
   * @example
   * {}
   */
  configValue?: string;
  /**
   * @remarks
   * The description of the engine configuration.
   */
  description?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * - Daily: The daily environment.
   * 
   * - Pre: The pre-production environment.
   * 
   * - Prod: The production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The time the engine configuration was created.
   * 
   * @example
   * 2024-01-03T02:28:00.000Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the engine configuration was last modified.
   * 
   * @example
   * 2024-08-27T12:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The time the engine configuration was published.
   * 
   * @example
   * 2024-01-03 02:28:00
   */
  gmtReleasedTime?: string;
  /**
   * @remarks
   * The engine configuration name.
   * 
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - Released: Published
   * 
   * - UnReleased: Unpublished
   * 
   * @example
   * Released
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      environment: 'Environment',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtReleasedTime: 'GmtReleasedTime',
      name: 'Name',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      environment: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      gmtReleasedTime: 'string',
      name: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

