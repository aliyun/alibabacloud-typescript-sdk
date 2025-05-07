// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWebApplicationInput } from "./CreateWebApplicationInput";


export class CreateWebApplicationRequest extends $dara.Model {
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
   * The information about the application.
   * 
   * This parameter is required.
   */
  body?: CreateWebApplicationInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: CreateWebApplicationInput,
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

