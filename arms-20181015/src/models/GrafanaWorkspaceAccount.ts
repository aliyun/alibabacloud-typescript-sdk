// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GrafanaWorkspaceUserOrg } from "./GrafanaWorkspaceUserOrg";


export class GrafanaWorkspaceAccount extends $dara.Model {
  /**
   * @example
   * 1
   */
  accountId?: number;
  accountNotes?: string;
  /**
   * @example
   * 131243781293
   */
  aliyunUid?: string;
  /**
   * @example
   * test
   */
  aliyunUserName?: string;
  /**
   * @example
   * 创建时间
   */
  gmtCreate?: number;
  orgs?: GrafanaWorkspaceUserOrg[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountNotes: 'accountNotes',
      aliyunUid: 'aliyunUid',
      aliyunUserName: 'aliyunUserName',
      gmtCreate: 'gmtCreate',
      orgs: 'orgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountNotes: 'string',
      aliyunUid: 'string',
      aliyunUserName: 'string',
      gmtCreate: 'number',
      orgs: { 'type': 'array', 'itemType': GrafanaWorkspaceUserOrg },
    };
  }

  validate() {
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

