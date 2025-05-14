// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveInputRequestInputSettings } from "./CreateMediaLiveInputRequestInputSettings";


export class CreateMediaLiveInputRequest extends $dara.Model {
  /**
   * @remarks
   * The input settings. An input can have up to two sources: primary and backup sources.
   * 
   * This parameter is required.
   */
  inputSettings?: CreateMediaLiveInputRequestInputSettings[];
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
  /**
   * @remarks
   * The input type. Valid values: RTMP_PUSH, RTMP_PULL, SRT_PUSH, and SRT_PULL.
   * 
   * This parameter is required.
   * 
   * @example
   * RTMP_PUSH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      inputSettings: 'InputSettings',
      name: 'Name',
      securityGroupIds: 'SecurityGroupIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputSettings: { 'type': 'array', 'itemType': CreateMediaLiveInputRequestInputSettings },
      name: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
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

