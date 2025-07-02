// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ComponentInstanceSelectorComponentInstances } from "./ComponentInstanceSelectorComponentInstances";
import { ComponentInstanceSelectorComponents } from "./ComponentInstanceSelectorComponents";


export class ComponentInstanceSelector extends $dara.Model {
  /**
   * @deprecated
   */
  actionScope?: string;
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
   * 组件实例列表。actionScope为COPONENT_INSTANCE时使用。
   */
  componentInstances?: ComponentInstanceSelectorComponentInstances[];
  /**
   * @remarks
   * 组件列表。
   * actionScope为COPONENT时使用。
   */
  components?: ComponentInstanceSelectorComponents[];
  /**
   * @remarks
   * 动作执行范围。取值范围：
   * - APPLICATION：应用级别。
   * - COMPONENT：组件级别。
   * - COMPONENT_INSTANCE：组件实例级别。
   * 
   * This parameter is required.
   * 
   * @example
   * APPLICATION
   */
  runActionScope?: string;
  static names(): { [key: string]: string } {
    return {
      actionScope: 'ActionScope',
      applicationName: 'ApplicationName',
      componentInstances: 'ComponentInstances',
      components: 'Components',
      runActionScope: 'RunActionScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionScope: 'string',
      applicationName: 'string',
      componentInstances: { 'type': 'array', 'itemType': ComponentInstanceSelectorComponentInstances },
      components: { 'type': 'array', 'itemType': ComponentInstanceSelectorComponents },
      runActionScope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentInstances)) {
      $dara.Model.validateArray(this.componentInstances);
    }
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

