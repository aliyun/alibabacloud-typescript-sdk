// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEngineConfigsResponseBodyEngineConfigs extends $dara.Model {
  /**
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * 2
   */
  engineConfigId?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * 2023-08-07T01:43:42Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-08-27T12:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2023-08-29 12:00:00
   */
  gmtReleasedTime?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @example
   * Released
   */
  status?: string;
  /**
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

