// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindingPolicy } from "./BindingPolicy";


export class NodeSpec extends $dara.Model {
  /**
   * @remarks
   * The resource node binding policy.
   */
  bindingPolicy?: BindingPolicy;
  /**
   * @remarks
   * The number of resource node specifications.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The supernode specifications in use. When you specify a specification, you cannot specify both the node specifications and the supernode at the same time.
   * 
   * @example
   * efg3.GN9A.ch72
   */
  hyperType?: string;
  /**
   * @remarks
   * The resource node specifications type.
   * 
   * @example
   * ecs.g6.4xlarge
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindingPolicy: 'BindingPolicy',
      count: 'Count',
      hyperType: 'HyperType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingPolicy: BindingPolicy,
      count: 'number',
      hyperType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.bindingPolicy && typeof (this.bindingPolicy as any).validate === 'function') {
      (this.bindingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

