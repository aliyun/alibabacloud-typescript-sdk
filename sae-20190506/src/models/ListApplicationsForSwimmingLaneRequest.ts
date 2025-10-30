// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group. You can call the [DescribeApplicationGroups](https://help.aliyun.com/document_detail/126249.html) operation to obtain the ID.
   * 
   * @example
   * b2a8a925-477a-eswa-b823-d5e22500****
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of a namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The canary tag
   * 
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

