// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud phone instance ID list. You can specify up to 50 instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The ID of the ADB key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * kp-6v2q33ae4tw3a****
   */
  keyPairId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPairId: 'KeyPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

