// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyGroupInstancesResponseBodyResourcesResource extends $dara.Model {
  aliUid?: number;
  category?: string;
  id?: number;
  instanceId?: string;
  instanceName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      category: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

