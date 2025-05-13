// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForSwimmingLaneRequest extends $dara.Model {
  /**
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @example
   * {"alicloud.service.tag":"gray"}
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespaceId: 'NamespaceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      namespaceId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

