// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventDetailResponseBodyEventHandleInfoList extends $dara.Model {
  /**
   * @remarks
   * The account that is used to handle the anomalous event.
   * 
   * @example
   * sddp-test2
   */
  currentValue?: string;
  /**
   * @remarks
   * The time when the account is disabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  disableTime?: number;
  /**
   * @remarks
   * The time when the disabled account is enabled. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1611139155000
   */
  enableTime?: number;
  /**
   * @remarks
   * The handling method.
   * 
   * @example
   * Remove from the whitelist
   */
  handlerName?: string;
  /**
   * @remarks
   * The type of the handling method.
   * 
   * @example
   * rds_security_ip
   */
  handlerType?: string;
  /**
   * @remarks
   * The duration for which the handling operation takes effect. If you leave this parameter empty, the handling operation is permanently valid. Unit: minutes.
   * 
   * @example
   * 10
   */
  handlerValue?: number;
  /**
   * @remarks
   * The ID of the handling rule.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The status of the account that triggered the anomalous event. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * *   **-1**: failed to disable the account
   * *   **-2**: failed to enable the account
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      disableTime: 'DisableTime',
      enableTime: 'EnableTime',
      handlerName: 'HandlerName',
      handlerType: 'HandlerType',
      handlerValue: 'HandlerValue',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'string',
      disableTime: 'number',
      enableTime: 'number',
      handlerName: 'string',
      handlerType: 'string',
      handlerValue: 'number',
      id: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

