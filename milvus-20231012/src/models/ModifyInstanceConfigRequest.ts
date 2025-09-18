// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The reason for the update.
   * 
   * This parameter is required.
   * 
   * @example
   * for test
   */
  reason?: string;
  /**
   * @remarks
   * User-defined configuration.
   * 
   * @example
   * dataCoord:\\n  segment:\\n    maxSize: 1024
   */
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      reason: 'Reason',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      reason: 'string',
      userConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

