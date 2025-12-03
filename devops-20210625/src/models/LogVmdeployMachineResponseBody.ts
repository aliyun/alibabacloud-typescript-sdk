// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogVMDeployMachineResponseBodyDeployMachineLog extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  aliyunRegion?: string;
  /**
   * @example
   * 11111111111
   */
  deployBeginTime?: number;
  /**
   * @example
   * 12222222
   */
  deployEndTime?: number;
  /**
   * @example
   * success
   */
  deployLog?: string;
  /**
   * @example
   * /tmp/log
   */
  deployLogPath?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunRegion: 'aliyunRegion',
      deployBeginTime: 'deployBeginTime',
      deployEndTime: 'deployEndTime',
      deployLog: 'deployLog',
      deployLogPath: 'deployLogPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunRegion: 'string',
      deployBeginTime: 'number',
      deployEndTime: 'number',
      deployLog: 'string',
      deployLogPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogVMDeployMachineResponseBody extends $dara.Model {
  deployMachineLog?: LogVMDeployMachineResponseBodyDeployMachineLog;
  /**
   * @example
   * ”“
   */
  errorCode?: string;
  /**
   * @example
   * ”“
   */
  errorMessage?: string;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true 接口调用成功，false 接口调用失败
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      deployMachineLog: 'deployMachineLog',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployMachineLog: LogVMDeployMachineResponseBodyDeployMachineLog,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.deployMachineLog && typeof (this.deployMachineLog as any).validate === 'function') {
      (this.deployMachineLog as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

