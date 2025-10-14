// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreCheckSqlFlashbackTaskResponseBodyDataCheckResult extends $dara.Model {
  binlogExists?: boolean;
  binlogRowQueryEventEnabled?: boolean;
  canUpgradeSupportBinlogRowQueryEvents?: boolean;
  hasTable?: boolean;
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
  data?: PreCheckSqlFlashbackTaskResponseBodyData;
  /**
   * @example
   * successs
   */
  message?: string;
  /**
   * @example
   * 14036EBE-***-44DB-ACE9-AC6157D3A6FC
   */
  requestId?: string;
  /**
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

