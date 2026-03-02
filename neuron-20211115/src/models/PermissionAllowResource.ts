// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionAllowResource extends $dara.Model {
  requestId?: string;
  resourceList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceList: 'resourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

