// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-50f8q9mbfjzlkuk9znjglnne3"]
   * 
   * **if can be null:**
   * false
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The key pair ID.
   * 
   * @example
   * ssh-xxx
   * 
   * **if can be null:**
   * true
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the SSH key pair.
   * 
   * @example
   * test-kp
   * 
   * **if can be null:**
   * true
   */
  keyPairName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairId: 'string',
      keyPairName: 'string',
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

