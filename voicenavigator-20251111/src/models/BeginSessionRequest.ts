// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginSessionRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @example
   * 0a88e269-01f5-49ac-97af-5830f0ccb271
   */
  scriptId?: string;
  /**
   * @example
   * {"key1":"value1"}
   */
  vendorParams?: string;
  static names(): { [key: string]: string } {
    return {
      draftVersion: 'DraftVersion',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      vendorParams: 'VendorParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draftVersion: 'boolean',
      instanceId: 'string',
      scriptId: 'string',
      vendorParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

