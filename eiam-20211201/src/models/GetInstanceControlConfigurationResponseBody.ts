// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceControlConfigurationResponseBodyInstanceControlConfigurationControlElementsHumanVerificationConfig extends $dara.Model {
  /**
   * @example
   * urn:alibaba:idaas:humanverification:alibaba-cloud-jigsaw-verification
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

export class GetInstanceControlConfigurationResponseBodyInstanceControlConfigurationControlElements extends $dara.Model {
  /**
   * @remarks
   * 实例控制项名称，如human_verification。
   * 
   * @example
   * human_verification
   */
  elementName?: string;
  humanVerificationConfig?: GetInstanceControlConfigurationResponseBodyInstanceControlConfigurationControlElementsHumanVerificationConfig;
  /**
   * @remarks
   * 实例控制项状态，enabled或者disabled。
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
      humanVerificationConfig: GetInstanceControlConfigurationResponseBodyInstanceControlConfigurationControlElementsHumanVerificationConfig,
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

export class GetInstanceControlConfigurationResponseBodyInstanceControlConfiguration extends $dara.Model {
  /**
   * @remarks
   * 实例控制配置项
   */
  controlElements?: GetInstanceControlConfigurationResponseBodyInstanceControlConfigurationControlElements[];
  static names(): { [key: string]: string } {
    return {
      controlElements: 'ControlElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlElements: { 'type': 'array', 'itemType': GetInstanceControlConfigurationResponseBodyInstanceControlConfigurationControlElements },
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

export class GetInstanceControlConfigurationResponseBody extends $dara.Model {
  instanceControlConfiguration?: GetInstanceControlConfigurationResponseBodyInstanceControlConfiguration;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceControlConfiguration: 'InstanceControlConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceControlConfiguration: GetInstanceControlConfigurationResponseBodyInstanceControlConfiguration,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceControlConfiguration && typeof (this.instanceControlConfiguration as any).validate === 'function') {
      (this.instanceControlConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

