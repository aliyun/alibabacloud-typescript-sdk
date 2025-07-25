// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDesktopOversoldUserGroupRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDesktopOversoldUserGroupRequest extends $dara.Model {
  imageId?: string;
  name?: string;
  oversoldGroupId?: string;
  policyGroupId?: string;
  tag?: AddDesktopOversoldUserGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      policyGroupId: 'PolicyGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      name: 'string',
      oversoldGroupId: 'string',
      policyGroupId: 'string',
      tag: { 'type': 'array', 'itemType': AddDesktopOversoldUserGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

