// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNamespaceRequestTag } from "./CreateNamespaceRequestTag";


export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  describe?: string;
  /**
   * @example
   * myNamespace
   */
  name?: string;
  tag?: CreateNamespaceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      describe: 'Describe',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      describe: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': CreateNamespaceRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

