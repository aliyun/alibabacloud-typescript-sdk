// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecureTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace, such as cn-beijing or cn-beijing:prod````.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen:x*****
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

