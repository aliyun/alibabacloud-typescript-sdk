// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateMediaLiveInputRequestInputSettings } from "./UpdateMediaLiveInputRequestInputSettings";


export class UpdateMediaLiveInputRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the input.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  inputId?: string;
  /**
   * @remarks
   * The input settings. An input can have up to two sources: primary and backup sources.
   * 
   * This parameter is required.
   */
  inputSettings?: UpdateMediaLiveInputRequestInputSettings[];
  /**
   * @remarks
   * The name of the input. Letters, digits, hyphens (-), and underscores (_) are supported. It can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myinput
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the security groups to be associated with the input. This parameter is required for PUSH inputs.
   * 
   * @example
   * ["G6G4X5T4SZYPSTT5"]
   */
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      inputId: 'InputId',
      inputSettings: 'InputSettings',
      name: 'Name',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputId: 'string',
      inputSettings: { 'type': 'array', 'itemType': UpdateMediaLiveInputRequestInputSettings },
      name: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.inputSettings)) {
      $dara.Model.validateArray(this.inputSettings);
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

