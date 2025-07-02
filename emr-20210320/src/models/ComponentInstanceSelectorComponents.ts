// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ComponentInstanceSelectorComponents extends $dara.Model {
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
   * 组件名称。
   * 
   * @example
   * DataNode
   */
  componentName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      componentName: 'ComponentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      componentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

