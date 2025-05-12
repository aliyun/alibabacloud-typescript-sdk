// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstallRecordsResponseBodyData extends $dara.Model {
  createdAt?: string;
  instanceId?: string;
  pluginId?: string;
  pluginVersion?: string;
  status?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      instanceId: 'instance_id',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      instanceId: 'string',
      pluginId: 'string',
      pluginVersion: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

