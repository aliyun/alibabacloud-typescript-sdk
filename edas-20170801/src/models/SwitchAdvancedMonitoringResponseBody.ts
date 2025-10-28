// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchAdvancedMonitoringResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the advanced application monitoring feature is enabled. Valid values:
   * 
   * *   true: The advanced application monitoring feature is enabled.
   * *   false: The advanced application monitoring feature is disabled.
   * 
   * @example
   * false
   */
  advancedMonitoringEnabled?: boolean;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * The advanced monitoring status is disabled already for application which app_id is 9e224bc6-a646-4484-ae31-e617b7e7****
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 577AED12-32D8-40B6-991F-17D7A601****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedMonitoringEnabled: 'AdvancedMonitoringEnabled',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedMonitoringEnabled: 'boolean',
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

