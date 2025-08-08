// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportMappCenterAppConfigResponseBodyExportMappCenterAppConfigResult extends $dara.Model {
  configDownloadUrl?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configDownloadUrl: 'ConfigDownloadUrl',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDownloadUrl: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigResponseBody extends $dara.Model {
  exportMappCenterAppConfigResult?: ExportMappCenterAppConfigResponseBodyExportMappCenterAppConfigResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      exportMappCenterAppConfigResult: 'ExportMappCenterAppConfigResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportMappCenterAppConfigResult: ExportMappCenterAppConfigResponseBodyExportMappCenterAppConfigResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.exportMappCenterAppConfigResult && typeof (this.exportMappCenterAppConfigResult as any).validate === 'function') {
      (this.exportMappCenterAppConfigResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

