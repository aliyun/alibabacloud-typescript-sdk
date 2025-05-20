// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionConditionStringNotLike extends $dara.Model {
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcId)) {
      $dara.Model.validateArray(this.vpcId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

