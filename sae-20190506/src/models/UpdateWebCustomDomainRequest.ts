// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWebCustomDomainInput } from "./UpdateWebCustomDomainInput";


export class UpdateWebCustomDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  namespaceId?: string;
  /**
   * @remarks
   * The information about the custom domain name.
   * 
   * This parameter is required.
   */
  body?: UpdateWebCustomDomainInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: UpdateWebCustomDomainInput,
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

