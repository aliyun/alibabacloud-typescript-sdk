// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 474bdef0-d149-4695-abfb-52912d91****
   */
  appId?: string;
  /**
   * @remarks
   * The current version number.
   * 
   * This parameter is required.
   * 
   * @example
   * v2-1
   */
  fromAppVersion?: string;
  /**
   * @remarks
   * The timeout period of the asynchronous rollback operation. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  /**
   * @remarks
   * The target version number. By default, the system automatically rolls back the container version to the previous version.
   * 
   * @example
   * v2
   */
  toAppVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fromAppVersion: 'FromAppVersion',
      timeout: 'Timeout',
      toAppVersion: 'ToAppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fromAppVersion: 'string',
      timeout: 'number',
      toAppVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

