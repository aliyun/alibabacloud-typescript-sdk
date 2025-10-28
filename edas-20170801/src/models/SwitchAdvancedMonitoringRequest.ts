// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchAdvancedMonitoringRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application for which you want to query or configure the advanced application monitoring feature.
   * 
   * This parameter is required.
   * 
   * @example
   * 9e224bc6-a646-4484-****-e617b7e7****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to enable the advanced application monitoring feature. Valid values:
   * 
   * *   true: enables the advanced application monitoring feature.
   * *   false: disables the advanced application monitoring feature.
   * 
   * If you call this operation to query the status of the advanced application monitoring feature, you do not need to specify this parameter.
   * 
   * @example
   * true
   */
  enableAdvancedMonitoring?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableAdvancedMonitoring: 'EnableAdvancedMonitoring',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableAdvancedMonitoring: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

