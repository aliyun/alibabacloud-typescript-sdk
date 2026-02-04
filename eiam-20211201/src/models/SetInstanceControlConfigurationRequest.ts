// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetInstanceControlConfigurationRequestControlElementsHumanVerificationConfig extends $dara.Model {
  /**
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
   * 实例控制项名称，如human_verification。
   * 
   * @example
   * human_verification
   */
  elementName?: string;
  humanVerificationConfig?: SetInstanceControlConfigurationRequestControlElementsHumanVerificationConfig;
  /**
   * @remarks
   * 实例控制项状态。
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
   * 实例控制项。
   */
  controlElements?: SetInstanceControlConfigurationRequestControlElements[];
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
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

