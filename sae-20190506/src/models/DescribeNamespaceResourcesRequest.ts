// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace. The region ID is not included. We recommend that you use this parameter.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The ID of the namespace. The format is `Region ID:Namespace name`. This parameter is retained for backward compatibility. If you specify this parameter, `NameSpaceShortId` is ignored. We recommend that you use `NameSpaceShortId` to simplify the request.
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

