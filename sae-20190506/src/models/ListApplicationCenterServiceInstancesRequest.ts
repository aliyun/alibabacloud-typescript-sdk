// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationCenterServiceInstancesRequest extends $dara.Model {
  namespaceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
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

