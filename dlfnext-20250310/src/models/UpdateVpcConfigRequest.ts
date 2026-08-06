// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpcConfigRequestUpdates extends $dara.Model {
  /**
   * @remarks
   * The list of configuration items.
   */
  extendedOptions?: { [key: string]: string };
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf67xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      extendedOptions: 'extendedOptions',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.extendedOptions) {
      $dara.Model.validateMap(this.extendedOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVpcConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of VPC IDs to delete.
   */
  removals?: string[];
  /**
   * @remarks
   * The list of VPCs to update.
   */
  updates?: UpdateVpcConfigRequestUpdates[];
  static names(): { [key: string]: string } {
    return {
      removals: 'removals',
      updates: 'updates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removals: { 'type': 'array', 'itemType': 'string' },
      updates: { 'type': 'array', 'itemType': UpdateVpcConfigRequestUpdates },
    };
  }

  validate() {
    if(Array.isArray(this.removals)) {
      $dara.Model.validateArray(this.removals);
    }
    if(Array.isArray(this.updates)) {
      $dara.Model.validateArray(this.updates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

