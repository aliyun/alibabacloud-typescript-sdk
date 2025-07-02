// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppOtaTaskRequest extends $dara.Model {
  appVersionUid?: string;
  channel?: string;
  clientIdList?: string[];
  clientType?: number;
  creator?: string;
  description?: string;
  forceUpgrade?: number;
  label?: string;
  name?: string;
  project?: string;
  regions?: string[];
  status?: number;
  taskType?: number;
  tenantId?: string;
  tenantIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      appVersionUid: 'AppVersionUid',
      channel: 'Channel',
      clientIdList: 'ClientIdList',
      clientType: 'ClientType',
      creator: 'Creator',
      description: 'Description',
      forceUpgrade: 'ForceUpgrade',
      label: 'Label',
      name: 'Name',
      project: 'Project',
      regions: 'Regions',
      status: 'Status',
      taskType: 'TaskType',
      tenantId: 'TenantId',
      tenantIdList: 'TenantIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionUid: 'string',
      channel: 'string',
      clientIdList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'number',
      creator: 'string',
      description: 'string',
      forceUpgrade: 'number',
      label: 'string',
      name: 'string',
      project: 'string',
      regions: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      taskType: 'number',
      tenantId: 'string',
      tenantIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIdList)) {
      $dara.Model.validateArray(this.clientIdList);
    }
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    if(Array.isArray(this.tenantIdList)) {
      $dara.Model.validateArray(this.tenantIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

