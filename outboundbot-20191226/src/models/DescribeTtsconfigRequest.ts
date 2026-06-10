// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTTSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 0ec0c897-b92c-40e4-9ad7-e6e4f5ce13bb
   */
  instanceId?: string;
  /**
   * @remarks
   * Script ID
   * 
   * This parameter is required.
   * 
   * @example
   * d7fbd0a0-27bc-49c4-a456-ecb75e79122b
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

