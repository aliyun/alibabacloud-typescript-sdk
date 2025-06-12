// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPhoneNumberRequest extends $dara.Model {
  /**
   * @example
   * 78128960-bb00-4ddc-8a82-923a8c5bd22d
   */
  contactFlowId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0102134****
   */
  number?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Bidirection
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

