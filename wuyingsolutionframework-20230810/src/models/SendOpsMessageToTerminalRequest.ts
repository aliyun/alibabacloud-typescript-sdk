// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class SendOpsMessageToTerminalRequest extends $dara.Model {
  /**
   * @example
   * text
   */
  messageBody?: string;
  /**
   * @example
   * cn-hangzhou
   */
  officeRegionId?: string;
  /**
   * @example
   * reboot
   */
  opsAction?: string;
  /**
   * @example
   * AAAAAAAAAAAA
   */
  serialNo?: string;
  /**
   * @example
   * true
   */
  waitForAck?: boolean;
  /**
   * @example
   * false
   */
  waitForMsg?: boolean;
  static names(): { [key: string]: string } {
    return {
      messageBody: 'MessageBody',
      officeRegionId: 'OfficeRegionId',
      opsAction: 'OpsAction',
      serialNo: 'SerialNo',
      waitForAck: 'WaitForAck',
      waitForMsg: 'WaitForMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageBody: 'string',
      officeRegionId: 'string',
      opsAction: 'string',
      serialNo: 'string',
      waitForAck: 'boolean',
      waitForMsg: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

