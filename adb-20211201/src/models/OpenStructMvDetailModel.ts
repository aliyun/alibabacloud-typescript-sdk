// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructMvDetailModelBaseTableInfos } from "./OpenStructMvDetailModelBaseTableInfos";


export class OpenStructMvDetailModel extends $dara.Model {
  baseTableInfos?: OpenStructMvDetailModelBaseTableInfos[];
  baseTableNames?: string[][];
  explicitHit?: number;
  firstRefreshTime?: string;
  implicitHit?: number;
  isInactive?: boolean;
  localSize?: number;
  queryRewriteEnabled?: boolean;
  refreshInterval?: string;
  refreshState?: string;
  remoteSize?: number;
  resourceGroup?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      baseTableInfos: 'BaseTableInfos',
      baseTableNames: 'BaseTableNames',
      explicitHit: 'ExplicitHit',
      firstRefreshTime: 'FirstRefreshTime',
      implicitHit: 'ImplicitHit',
      isInactive: 'IsInactive',
      localSize: 'LocalSize',
      queryRewriteEnabled: 'QueryRewriteEnabled',
      refreshInterval: 'RefreshInterval',
      refreshState: 'RefreshState',
      remoteSize: 'RemoteSize',
      resourceGroup: 'ResourceGroup',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseTableInfos: { 'type': 'array', 'itemType': OpenStructMvDetailModelBaseTableInfos },
      baseTableNames: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      explicitHit: 'number',
      firstRefreshTime: 'string',
      implicitHit: 'number',
      isInactive: 'boolean',
      localSize: 'number',
      queryRewriteEnabled: 'boolean',
      refreshInterval: 'string',
      refreshState: 'string',
      remoteSize: 'number',
      resourceGroup: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baseTableInfos)) {
      $dara.Model.validateArray(this.baseTableInfos);
    }
    if(Array.isArray(this.baseTableNames)) {
      $dara.Model.validateArray(this.baseTableNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

