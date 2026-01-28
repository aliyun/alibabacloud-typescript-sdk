// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceIniBackup extends $dara.Model {
  ext?: string;
  /**
   * @example
   * 1680861352600
   */
  gmtCreate?: number;
  /**
   * @example
   * 1680861352600
   */
  gmtModified?: number;
  /**
   * @example
   * grafana-cn-**********
   */
  grafanaWorkspaceId?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  msg?: string;
  processName?: string;
  processStatus?: string;
  /**
   * @example
   * User
   */
  subType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'ext',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      grafanaWorkspaceId: 'grafanaWorkspaceId',
      id: 'id',
      msg: 'msg',
      processName: 'processName',
      processStatus: 'processStatus',
      subType: 'subType',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      grafanaWorkspaceId: 'string',
      id: 'number',
      msg: 'string',
      processName: 'string',
      processStatus: 'string',
      subType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

