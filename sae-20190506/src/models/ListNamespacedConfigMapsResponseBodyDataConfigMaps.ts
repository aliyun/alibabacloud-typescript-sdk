// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps } from "./ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps";


export class ListNamespacedConfigMapsResponseBodyDataConfigMaps extends $dara.Model {
  /**
   * @remarks
   * The ID of the ConfigMap instance.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1593760185111
   */
  createTime?: number;
  /**
   * @remarks
   * The data of ConfigMap key-value pairs. Format:
   * 
   * {"k1":"v1", "k2":"v2"}
   * 
   * k specifies a key and v specifies a value. For more information, see [Manage and use configurations](https://help.aliyun.com/document_detail/171326.html).
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test-desc
   */
  description?: string;
  /**
   * @remarks
   * The name of the ConfigMap instance.
   * 
   * @example
   * test-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  /**
   * @remarks
   * The application that is associated with the instance.
   */
  relateApps?: ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps[];
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 1593760185111
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      relateApps: 'RelateApps',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
      createTime: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      relateApps: { 'type': 'array', 'itemType': ListNamespacedConfigMapsResponseBodyDataConfigMapsRelateApps },
      updateTime: 'number',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(Array.isArray(this.relateApps)) {
      $dara.Model.validateArray(this.relateApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

