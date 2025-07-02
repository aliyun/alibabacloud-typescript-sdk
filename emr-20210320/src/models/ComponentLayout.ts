// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ComponentLayoutNodeSelector } from "./ComponentLayoutNodeSelector";


export class ComponentLayout extends $dara.Model {
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
  /**
   * @remarks
   * 节点选择器。
   */
  nodeSelector?: ComponentLayoutNodeSelector;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      componentName: 'ComponentName',
      nodeSelector: 'NodeSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      componentName: 'string',
      nodeSelector: ComponentLayoutNodeSelector,
    };
  }

  validate() {
    if(this.nodeSelector && typeof (this.nodeSelector as any).validate === 'function') {
      (this.nodeSelector as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

