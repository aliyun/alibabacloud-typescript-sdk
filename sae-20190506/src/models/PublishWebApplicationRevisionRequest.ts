// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublishWebApplicationRevisionInput } from "./PublishWebApplicationRevisionInput";


export class PublishWebApplicationRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configurations of the version.
   * 
   * This parameter is required.
   */
  body?: PublishWebApplicationRevisionInput;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      body: PublishWebApplicationRevisionInput,
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

