// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataBoxPrivileges } from "./DataBoxPrivileges";


export class PersonalRightsInfoResponse extends $dara.Model {
  expiresTime?: string;
  historyLatestRights?: PersonalRightsInfoResponse;
  icon?: string;
  isExpires?: boolean;
  name?: string;
  otherRights?: PersonalRightsInfoResponse;
  privileges?: DataBoxPrivileges[];
  spuId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      expiresTime: 'expires_time',
      historyLatestRights: 'history_latest_rights',
      icon: 'icon',
      isExpires: 'is_expires',
      name: 'name',
      otherRights: 'other_rights',
      privileges: 'privileges',
      spuId: 'spu_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresTime: 'string',
      historyLatestRights: PersonalRightsInfoResponse,
      icon: 'string',
      isExpires: 'boolean',
      name: 'string',
      otherRights: PersonalRightsInfoResponse,
      privileges: { 'type': 'array', 'itemType': DataBoxPrivileges },
      spuId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.historyLatestRights && typeof (this.historyLatestRights as any).validate === 'function') {
      (this.historyLatestRights as any).validate();
    }
    if(this.otherRights && typeof (this.otherRights as any).validate === 'function') {
      (this.otherRights as any).validate();
    }
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

