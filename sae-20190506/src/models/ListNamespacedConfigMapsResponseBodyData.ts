// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNamespacedConfigMapsResponseBodyDataConfigMaps } from "./ListNamespacedConfigMapsResponseBodyDataConfigMaps";


export class ListNamespacedConfigMapsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ConfigMap instances.
   */
  configMaps?: ListNamespacedConfigMapsResponseBodyDataConfigMaps[];
  static names(): { [key: string]: string } {
    return {
      configMaps: 'ConfigMaps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMaps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMaps },
    };
  }

  validate() {
    if(Array.isArray(this.configMaps)) {
      $dara.Model.validateArray(this.configMaps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

