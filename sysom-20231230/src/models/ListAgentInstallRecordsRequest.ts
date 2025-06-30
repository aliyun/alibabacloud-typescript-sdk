// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstallRecordsRequest extends $dara.Model {
  current?: number;
  instanceId?: string;
  pageSize?: number;
  pluginId?: string;
  pluginVersion?: string;
  region?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      instanceId: 'instance_id',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      instanceId: 'string',
      pageSize: 'number',
      pluginId: 'string',
      pluginVersion: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

