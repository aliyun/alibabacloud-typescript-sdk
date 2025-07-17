// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceDashboardSync extends $dara.Model {
  /**
   * @example
   * testTitle
   */
  dashboardTitle?: string;
  /**
   * @example
   * https://g.console.aliyun.com/d/1098370038733503-14960236-422-3/ack-pro-apiserver
   */
  dashboardURL?: string;
  /**
   * @example
   * xxxdvxsea
   */
  dashboardUid?: string;
  /**
   * @example
   * 123456
   */
  folderId?: string;
  /**
   * @example
   * test
   */
  folderTitle?: string;
  /**
   * @example
   * https://g.console.aliyun.com/d/1098370038733503-14960236-422-3/ack-pro-apiserver
   */
  folderURL?: string;
  /**
   * @example
   * vxeupqn
   */
  folderUid?: string;
  /**
   * @example
   * 1
   */
  orgId?: string;
  /**
   * @example
   * user123
   */
  orgName?: string;
  /**
   * @example
   * normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardTitle: 'dashboardTitle',
      dashboardURL: 'dashboardURL',
      dashboardUid: 'dashboardUid',
      folderId: 'folderId',
      folderTitle: 'folderTitle',
      folderURL: 'folderURL',
      folderUid: 'folderUid',
      orgId: 'orgId',
      orgName: 'orgName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardTitle: 'string',
      dashboardURL: 'string',
      dashboardUid: 'string',
      folderId: 'string',
      folderTitle: 'string',
      folderURL: 'string',
      folderUid: 'string',
      orgId: 'string',
      orgName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

