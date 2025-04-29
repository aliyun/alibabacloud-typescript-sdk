// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkInterfaceAttributeResponseBodyAttachmentMemberNetworkInterfaceIds extends $dara.Model {
  memberNetworkInterfaceId?: string[];
  static names(): { [key: string]: string } {
    return {
      memberNetworkInterfaceId: 'MemberNetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberNetworkInterfaceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.memberNetworkInterfaceId)) {
      $dara.Model.validateArray(this.memberNetworkInterfaceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

