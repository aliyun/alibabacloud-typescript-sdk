// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The short namespace ID. This ID does not require a region prefix. Use this parameter.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The long namespace ID. If specified, this parameter takes precedence and NameSpaceShortId is ignored. This parameter is retained for backward compatibility. Use the short namespace ID to simplify the request.
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

