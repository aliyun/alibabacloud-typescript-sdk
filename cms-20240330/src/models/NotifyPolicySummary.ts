// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyDetail } from "./NotifyStrategyDetail";


export class NotifyPolicySummary extends $dara.Model {
  createTime?: string;
  description?: string;
  enabled?: boolean;
  name?: string;
  notifyStrategy?: NotifyStrategyDetail;
  updateTime?: string;
  userId?: string;
  uuid?: string;
  version?: number;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      enabled: 'enabled',
      name: 'name',
      notifyStrategy: 'notifyStrategy',
      updateTime: 'updateTime',
      userId: 'userId',
      uuid: 'uuid',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      notifyStrategy: NotifyStrategyDetail,
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      version: 'number',
      workspace: 'string',
    };
  }

  validate() {
    if(this.notifyStrategy && typeof (this.notifyStrategy as any).validate === 'function') {
      (this.notifyStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

