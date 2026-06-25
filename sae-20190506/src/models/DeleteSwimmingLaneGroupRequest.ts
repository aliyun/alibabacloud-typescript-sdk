// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSwimmingLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the swimming lane group.
   * 
   * @example
   * 2074
   */
  groupId?: number;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:demo
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
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

