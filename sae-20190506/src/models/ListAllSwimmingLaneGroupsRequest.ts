// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSwimmingLaneGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a namespace.
   * 
   * @example
   * cn-beijing:test
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

