// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppDownloadHistoryHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  bizModuleCode?: string;
  tenantProxyUid?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      bizModuleCode: 'biz-module-code',
      tenantProxyUid: 'tenant-proxy-uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      bizModuleCode: 'string',
      tenantProxyUid: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

