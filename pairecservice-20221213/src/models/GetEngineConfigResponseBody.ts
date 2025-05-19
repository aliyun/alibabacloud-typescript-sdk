// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEngineConfigResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  configValue?: string;
  description?: string;
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * 2024-01-03T02:28:00.000Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2024-08-27T12:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2024-01-03 02:28:00
   */
  gmtReleasedTime?: string;
  /**
   * @example
   * engine_config_v1
   */
  name?: string;
  /**
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  /**
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

