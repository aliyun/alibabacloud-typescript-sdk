// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaLiveInputsResponseBodyInputsInputInfos } from "./ListMediaLiveInputsResponseBodyInputsInputInfos";


export class ListMediaLiveInputsResponseBodyInputs extends $dara.Model {
  /**
   * @remarks
   * The IDs of the channels associated with the input.
   */
  channelIds?: string[];
  /**
   * @remarks
   * The time when the input was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-12-03T06:56:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the input.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  inputId?: string;
  /**
   * @remarks
   * The input configurations.
   */
  inputInfos?: ListMediaLiveInputsResponseBodyInputsInputInfos[];
  /**
   * @remarks
   * The name of the input.
   * 
   * @example
   * myinput
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the security groups associated with the input.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The input type.
   * 
   * @example
   * RTMP_PUSH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channelIds: 'ChannelIds',
      createTime: 'CreateTime',
      inputId: 'InputId',
      inputInfos: 'InputInfos',
      name: 'Name',
      securityGroupIds: 'SecurityGroupIds',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      inputId: 'string',
      inputInfos: { 'type': 'array', 'itemType': ListMediaLiveInputsResponseBodyInputsInputInfos },
      name: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelIds)) {
      $dara.Model.validateArray(this.channelIds);
    }
    if(Array.isArray(this.inputInfos)) {
      $dara.Model.validateArray(this.inputInfos);
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

