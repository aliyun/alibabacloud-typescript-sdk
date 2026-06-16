// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetInstanceControlConfigurationRequestControlElementsHumanVerificationConfig extends $dara.Model {
  /**
   * @remarks
   * The CAPTCHA type.
   * 
   * @example
   * urn:alibaba:idaas:humanverification:alibaba-cloud-slider-verification
   */
  humanVerificationType?: string;
  static names(): { [key: string]: string } {
    return {
      humanVerificationType: 'HumanVerificationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      humanVerificationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceControlConfigurationRequestControlElements extends $dara.Model {
  /**
   * @remarks
   * The name of the control item.
   * 
   * @example
   * human_verification
   */
  elementName?: string;
  /**
   * @remarks
   * The CAPTCHA configuration.
   */
  humanVerificationConfig?: SetInstanceControlConfigurationRequestControlElementsHumanVerificationConfig;
  /**
   * @remarks
   * The status of the control item.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      elementName: 'ElementName',
      humanVerificationConfig: 'HumanVerificationConfig',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elementName: 'string',
      humanVerificationConfig: SetInstanceControlConfigurationRequestControlElementsHumanVerificationConfig,
      status: 'string',
    };
  }

  validate() {
    if(this.humanVerificationConfig && typeof (this.humanVerificationConfig as any).validate === 'function') {
      (this.humanVerificationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetInstanceControlConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The control items for the instance.
   */
  controlElements?: SetInstanceControlConfigurationRequestControlElements[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      controlElements: 'ControlElements',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlElements: { 'type': 'array', 'itemType': SetInstanceControlConfigurationRequestControlElements },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.controlElements)) {
      $dara.Model.validateArray(this.controlElements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

