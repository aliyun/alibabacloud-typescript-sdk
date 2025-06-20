// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestComponentsComponentConfig } from "./CreateClusterRequestComponentsComponentConfig";


export class CreateClusterRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The component configurations.
   */
  componentConfig?: CreateClusterRequestComponentsComponentConfig;
  /**
   * @remarks
   * The component type.
   * 
   * Valid values:
   * 
   * *   ARMS
   * *   ACKEdge
   * 
   * @example
   * ACKEdge
   */
  componentType?: string;
  static names(): { [key: string]: string } {
    return {
      componentConfig: 'ComponentConfig',
      componentType: 'ComponentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentConfig: CreateClusterRequestComponentsComponentConfig,
      componentType: 'string',
    };
  }

  validate() {
    if(this.componentConfig && typeof (this.componentConfig as any).validate === 'function') {
      (this.componentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

