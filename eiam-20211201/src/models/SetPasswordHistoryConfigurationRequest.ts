// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPasswordHistoryConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of recent password records to retain. This parameter is required when PasswordHistoryStatus is set to enabled.
   * 
   * @example
   * 3
   */
  passwordHistoryMaxRetention?: number;
  /**
   * @remarks
   * The status of the password history configuration. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordHistoryStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordHistoryMaxRetention: 'PasswordHistoryMaxRetention',
      passwordHistoryStatus: 'PasswordHistoryStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordHistoryMaxRetention: 'number',
      passwordHistoryStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

