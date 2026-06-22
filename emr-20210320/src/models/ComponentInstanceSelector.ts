// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ComponentInstanceSelectorComponentInstances extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * DataNode
   */
  componentName?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      componentName: 'ComponentName',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      componentName: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ComponentInstanceSelectorComponents extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * The component name.
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

export class ComponentInstanceSelector extends $dara.Model {
  /**
   * @remarks
   * The action scope. Valid values:
   * 
   * - APPLICATION: The application level.
   * 
   * - COMPONENT: The component level.
   * 
   * - COMPONENT_INSTANCE: The component instance level.
   * 
   * @example
   * APPLICATION
   * 
   * @deprecated
   */
  actionScope?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * HDFS
   */
  applicationName?: string;
  /**
   * @remarks
   * A list of component instances. This parameter is used when `RunActionScope` is set to `COMPONENT_INSTANCE`.
   */
  componentInstances?: ComponentInstanceSelectorComponentInstances[];
  /**
   * @remarks
   * A list of components. This parameter is used when `RunActionScope` is set to `COMPONENT`.
   */
  components?: ComponentInstanceSelectorComponents[];
  /**
   * @remarks
   * The action scope. Valid values:
   * 
   * - APPLICATION: The application level.
   * 
   * - COMPONENT: The component level.
   * 
   * - COMPONENT_INSTANCE: The component instance level.
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

