// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BeginSessionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the draft version.
   * 
   * @example
   * false
   */
  draftVersion?: boolean;
  /**
   * @remarks
   * The instance identity.
   * 
   * @example
   * instance-example-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * script-example-001
   */
  scriptId?: string;
  /**
   * @remarks
   * The accompanying variables for the scenario.
   * 
   * @example
   * {"city":"Tangshan"}
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

