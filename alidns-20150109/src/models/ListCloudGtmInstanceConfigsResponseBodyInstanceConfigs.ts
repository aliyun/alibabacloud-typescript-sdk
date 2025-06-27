// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig } from "./ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig";


export class ListCloudGtmInstanceConfigsResponseBodyInstanceConfigs extends $dara.Model {
  instanceConfig?: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceConfig: 'InstanceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConfig: { 'type': 'array', 'itemType': ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig },
    };
  }

  validate() {
    if(Array.isArray(this.instanceConfig)) {
      $dara.Model.validateArray(this.instanceConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

