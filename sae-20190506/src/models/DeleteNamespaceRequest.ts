// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The short-format ID of the namespace. You do not need to specify the region. We recommend that you use this parameter.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The long-format ID of the namespace. If you specify this parameter, NameSpaceShortId is ignored. This parameter is for backward compatibility. We recommend that you use the short-format namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
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

