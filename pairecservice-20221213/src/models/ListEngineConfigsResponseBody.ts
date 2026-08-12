// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEngineConfigsResponseBodyEngineConfigs extends $dara.Model {
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
   * The description.
   * 
   * @example
   * what
   */
  description?: string;
  /**
   * @remarks
   * The engine configuration ID.
   * 
   * @example
   * 2
   */
  engineConfigId?: string;
  /**
   * @remarks
   * The runtime environment.
   * 
   * - Daily: daily environment.
   * 
   * - Pre: staging environment.
   * 
   * - Prod: production environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-08-07T01:43:42Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2023-08-27T12:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The release time.
   * 
   * @example
   * 2023-08-29 12:00:00
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
   * The status.
   * 
   * - Released: released.
   * 
   * - UnReleased: not released.
   * 
   * @example
   * Released
   */
  status?: string;
  /**
   * @remarks
   * The engine configuration type.
   * 
   * @example
   * Normal
   */
  type?: string;
  /**
   * @remarks
   * The version number of the currently released or most recently updated version.
   * 
   * @example
   * 20230509161300
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      description: 'Description',
      engineConfigId: 'EngineConfigId',
      environment: 'Environment',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtReleasedTime: 'GmtReleasedTime',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
      description: 'string',
      engineConfigId: 'string',
      environment: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      gmtReleasedTime: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of engine configurations.
   */
  engineConfigs?: ListEngineConfigsResponseBodyEngineConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of elements in the list.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      engineConfigs: 'EngineConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineConfigs: { 'type': 'array', 'itemType': ListEngineConfigsResponseBodyEngineConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.engineConfigs)) {
      $dara.Model.validateArray(this.engineConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

