// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushDeviceNotificationRequestBodySendTarget } from "./PushDeviceNotificationRequestBodySendTarget";


export class PushDeviceNotificationRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1923792******8R7392
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @example
   * false
   */
  isDebug?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2iU81*****G9elJ
   */
  messageTemplateId?: string;
  /**
   * @example
   * 29837******2938
   */
  organizationId?: string;
  placeHolder?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  sendTarget?: PushDeviceNotificationRequestBodySendTarget;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      isDebug: 'IsDebug',
      messageTemplateId: 'MessageTemplateId',
      organizationId: 'OrganizationId',
      placeHolder: 'PlaceHolder',
      sendTarget: 'SendTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      isDebug: 'boolean',
      messageTemplateId: 'string',
      organizationId: 'string',
      placeHolder: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sendTarget: PushDeviceNotificationRequestBodySendTarget,
    };
  }

  validate() {
    if(this.placeHolder) {
      $dara.Model.validateMap(this.placeHolder);
    }
    if(this.sendTarget && typeof (this.sendTarget as any).validate === 'function') {
      (this.sendTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

