// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * >  After the cloud-native box is activated, the `hostname` is automatically modified. The `hostname` is prefixed with the model and the prefix is followed by a random string.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK-B-B010-****
   */
  hostname?: string;
  /**
   * @remarks
   * The model of the cloud-native box.
   * 
   * This parameter is required.
   * 
   * @example
   * ACK-V-B010
   */
  model?: string;
  /**
   * @remarks
   * The serial number of the cloud-native box.
   * 
   * This parameter is required.
   * 
   * @example
   * Q2CB5XZAFBFG****
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      hostname: 'hostname',
      model: 'model',
      sn: 'sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostname: 'string',
      model: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

