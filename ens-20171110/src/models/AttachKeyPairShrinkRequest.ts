// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKeyPairShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["i-50f8q9mbfjzlkuk9znjglnne3"]
   * 
   * **if can be null:**
   * false
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The unique ID of the key pair.
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
   * The key pair name.
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
      instanceIdsShrink: 'InstanceIds',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      keyPairId: 'string',
      keyPairName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

