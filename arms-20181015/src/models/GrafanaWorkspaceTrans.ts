// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrafanaWorkspaceTransDetail } from "./GrafanaWorkspaceTransDetail";


export class GrafanaWorkspaceTrans extends $dara.Model {
  apiUrl?: string;
  authType?: string;
  gmtCreate?: number;
  gmtModified?: number;
  grafanaWorkspaceId?: string;
  id?: number;
  msg?: string;
  processStatus?: string;
  transDetails?: GrafanaWorkspaceTransDetail[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUrl: 'apiUrl',
      authType: 'authType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      grafanaWorkspaceId: 'grafanaWorkspaceId',
      id: 'id',
      msg: 'msg',
      processStatus: 'processStatus',
      transDetails: 'transDetails',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUrl: 'string',
      authType: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      grafanaWorkspaceId: 'string',
      id: 'number',
      msg: 'string',
      processStatus: 'string',
      transDetails: { 'type': 'array', 'itemType': GrafanaWorkspaceTransDetail },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transDetails)) {
      $dara.Model.validateArray(this.transDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

