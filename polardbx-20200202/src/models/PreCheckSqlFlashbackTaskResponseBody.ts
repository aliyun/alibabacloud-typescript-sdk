// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckSqlFlashbackTaskResponseBodyDataCheckResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether valid binary log files exist. This value is used to determine whether operations such as flashback and synchronization can be performed.
   */
  binlogExists?: boolean;
  /**
   * @remarks
   * Indicates whether the recording of original SQL query events is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
   */
  binlogRowQueryEventEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the upgrade can succeed.
   */
  canUpgradeSupportBinlogRowQueryEvents?: boolean;
  /**
   * @remarks
   * Indicates whether the table exists. Valid values: true and false.
   */
  hasTable?: boolean;
  /**
   * @remarks
   * Indicates whether log recording is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   */
  supportBinlogRowQueryEvents?: boolean;
  static names(): { [key: string]: string } {
    return {
      binlogExists: 'BinlogExists',
      binlogRowQueryEventEnabled: 'BinlogRowQueryEventEnabled',
      canUpgradeSupportBinlogRowQueryEvents: 'CanUpgradeSupportBinlogRowQueryEvents',
      hasTable: 'HasTable',
      supportBinlogRowQueryEvents: 'SupportBinlogRowQueryEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binlogExists: 'boolean',
      binlogRowQueryEventEnabled: 'boolean',
      canUpgradeSupportBinlogRowQueryEvents: 'boolean',
      hasTable: 'boolean',
      supportBinlogRowQueryEvents: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckSqlFlashbackTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The check result.
   */
  checkResult?: PreCheckSqlFlashbackTaskResponseBodyDataCheckResult;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'CheckResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: PreCheckSqlFlashbackTaskResponseBodyDataCheckResult,
    };
  }

  validate() {
    if(this.checkResult && typeof (this.checkResult as any).validate === 'function') {
      (this.checkResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreCheckSqlFlashbackTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set.
   */
  data?: PreCheckSqlFlashbackTaskResponseBodyData;
  /**
   * @remarks
   * The response message. This parameter is empty when the request succeeds. If the request fails, an exception message is returned, such as an error code.
   * 
   * @example
   * successs
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14036EBE-***-44DB-ACE9-AC6157D3A6FC
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PreCheckSqlFlashbackTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

