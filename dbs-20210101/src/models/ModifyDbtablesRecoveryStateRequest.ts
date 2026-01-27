// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBTablesRecoveryStateRequest extends $dara.Model {
  category?: string;
  clusterName?: string;
  instanceId?: string;
  regionCode?: string;
  retention?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clusterName: 'ClusterName',
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
      retention: 'Retention',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clusterName: 'string',
      instanceId: 'string',
      regionCode: 'string',
      retention: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

