// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWebApplicationScalingConfigInput } from "./UpdateWebApplicationScalingConfigInput";


export class UpdateWebApplicationScalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The information about scaling configurations.
   * 
   * This parameter is required.
   */
  body?: UpdateWebApplicationScalingConfigInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: UpdateWebApplicationScalingConfigInput,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

