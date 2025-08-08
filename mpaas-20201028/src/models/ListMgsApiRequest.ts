// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMgsApiRequest extends $dara.Model {
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  format?: string;
  host?: string;
  needEncrypt?: string;
  needEtag?: string;
  needSign?: string;
  operationType?: string;
  optFuzzy?: string;
  pageIndex?: number;
  pageSize?: number;
  sysId?: number;
  sysName?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      format: 'Format',
      host: 'Host',
      needEncrypt: 'NeedEncrypt',
      needEtag: 'NeedEtag',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      optFuzzy: 'OptFuzzy',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      sysId: 'SysId',
      sysName: 'SysName',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      format: 'string',
      host: 'string',
      needEncrypt: 'string',
      needEtag: 'string',
      needSign: 'string',
      operationType: 'string',
      optFuzzy: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      sysId: 'number',
      sysName: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

