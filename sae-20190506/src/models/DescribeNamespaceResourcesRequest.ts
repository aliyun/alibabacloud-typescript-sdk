// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The short namespace ID. The region ID is not required. This parameter is recommended.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The long namespace ID. If this parameter is specified, it takes effect and NameSpaceShortId is ignored. This parameter is retained for compatibility. Use the short namespace ID to simplify parameters.
   * 
   * @example
   * cn-shanghai:test
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

