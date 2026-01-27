// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SupportDBTableRecoveryRequest extends $dara.Model {
  clusterName?: string;
  instanceId?: string;
  regionCode?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      instanceId: 'InstanceId',
      regionCode: 'RegionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      instanceId: 'string',
      regionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

