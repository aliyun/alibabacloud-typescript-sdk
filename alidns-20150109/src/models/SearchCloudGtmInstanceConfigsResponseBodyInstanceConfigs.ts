// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig } from "./SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig";


export class SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigs extends $dara.Model {
  instanceConfig?: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceConfig: 'InstanceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConfig: { 'type': 'array', 'itemType': SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig },
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

