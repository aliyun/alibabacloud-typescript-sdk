// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindingPolicy } from "./BindingPolicy";


export class NodeSpec extends $dara.Model {
  bindingPolicy?: BindingPolicy;
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindingPolicy: 'BindingPolicy',
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingPolicy: BindingPolicy,
      count: 'number',
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

