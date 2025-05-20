// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuditLogDetail } from "./AuditLogDetail";


export class AuditLog extends $dara.Model {
  actedAt?: string;
  actionCategory?: string;
  actionType?: string;
  actorId?: string;
  actorName?: string;
  actorType?: string;
  clientDevice?: string;
  clientIp?: string;
  clientType?: string;
  clientVersion?: string;
  detail?: AuditLogDetail;
  filePathType?: string;
  logId?: string;
  objectId?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      actedAt: 'acted_at',
      actionCategory: 'action_category',
      actionType: 'action_type',
      actorId: 'actor_id',
      actorName: 'actor_name',
      actorType: 'actor_type',
      clientDevice: 'client_device',
      clientIp: 'client_ip',
      clientType: 'client_type',
      clientVersion: 'client_version',
      detail: 'detail',
      filePathType: 'file_path_type',
      logId: 'log_id',
      objectId: 'object_id',
      objectName: 'object_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actedAt: 'string',
      actionCategory: 'string',
      actionType: 'string',
      actorId: 'string',
      actorName: 'string',
      actorType: 'string',
      clientDevice: 'string',
      clientIp: 'string',
      clientType: 'string',
      clientVersion: 'string',
      detail: AuditLogDetail,
      filePathType: 'string',
      logId: 'string',
      objectId: 'string',
      objectName: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

