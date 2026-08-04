// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindingPolicy } from "./BindingPolicy";


export class NodeSpec extends $dara.Model {
  /**
   * @remarks
   * Rule for attaching resource nodes.
   */
  bindingPolicy?: BindingPolicy;
  /**
   * @remarks
   * Number of resource nodes with this specification.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Type of supernode to use. You cannot specify both a node specification and a supernode type.
   */
  hyperType?: string;
  /**
   * @remarks
   * Type of the resource node specification.
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

