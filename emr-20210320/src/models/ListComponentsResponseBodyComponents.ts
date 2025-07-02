// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Attribute } from "./Attribute";


export class ListComponentsResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * 应用名称。
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * 属性列表。
   */
  attributes?: Attribute[];
  /**
   * @remarks
   * 组件名称。
   * 
   * @example
   * DataNode
   */
  componentName?: string;
  /**
   * @remarks
   * 命名空间。
   */
  namespace?: string;
  /**
   * @remarks
   * 安装该组件的机器总数。
   * 
   * @example
   * 1
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      attributes: 'Attributes',
      componentName: 'ComponentName',
      namespace: 'Namespace',
      replica: 'Replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      attributes: { 'type': 'array', 'itemType': Attribute },
      componentName: 'string',
      namespace: 'string',
      replica: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

