// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceNotificationRequestTenantInfo extends $dara.Model {
  /**
   * @example
   * 12797******304102
   */
  subjectId?: string;
  static names(): { [key: string]: string } {
    return {
      subjectId: 'SubjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subjectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushDeviceNotificationRequestBodySendTarget extends $dara.Model {
  /**
   * @example
   * 2VpiDQ6aMjxz******Eo7r6e08oIVZ3fKrm5TyEfY=
   */
  targetIdentity?: string;
  /**
   * @example
   * DEVICE_OPEN_ID
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetIdentity: 'TargetIdentity',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIdentity: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class PushDeviceNotificationRequest extends $dara.Model {
  tenantInfo?: PushDeviceNotificationRequestTenantInfo;
  body?: PushDeviceNotificationRequestBody;
  static names(): { [key: string]: string } {
    return {
      tenantInfo: 'TenantInfo',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantInfo: PushDeviceNotificationRequestTenantInfo,
      body: PushDeviceNotificationRequestBody,
    };
  }

  validate() {
    if(this.tenantInfo && typeof (this.tenantInfo as any).validate === 'function') {
      (this.tenantInfo as any).validate();
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

