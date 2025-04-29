// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstancesRequestSecurityOptions extends $dara.Model {
  /**
   * @remarks
   * The confidential computing mode. Set the value to Enclave.
   * 
   * A value of Enclave indicates that an enclave-based confidential computing environment is built on the instance. When you call the `RunInstances` operation, you can set this parameter only for c7, g7, or r7 instances to use enclave-based confidential computing. Take note of the following items:
   * 
   * *   The confidential computing feature is in invitational preview.
   * *   When you use the ECS API to create instances that support enclave-based confidential computing, you can call only the `RunInstances` operation. The `CreateInstance` operation does not support the `SecurityOptions.ConfidentialComputingMode` parameter.
   * *   Enclave-based confidential computing is implemented based on Alibaba Cloud Trusted System (vTPM). When you build a confidential computing environment on an instance by using Enclave, Alibaba Cloud Trusted System is enabled for the instance. If you set `SecurityOptions.ConfidentialComputingMode` to Enclave when you call this operation, the created instances use enclave-based confidential computing and Alibaba Cloud Trusted System regardless of whether `SecurityOptions.TrustedSystemMode` is set to vTPM.
   * 
   * For more information about confidential computing, see [Build a confidential computing environment by using Enclave](https://help.aliyun.com/document_detail/203433.html).
   * 
   * @example
   * Enclave
   */
  confidentialComputingMode?: string;
  /**
   * @remarks
   * The trusted system mode. Set the value to vTPM.
   * 
   * The trusted system mode supports the following instance families:
   * 
   * *   g7, c7, and r7
   * *   Security-enhanced instance families: g7t, c7t, and r7t
   * 
   * When you create instances of the preceding instance families, you must set this parameter. Take note of the following items:
   * 
   * *   To use the Alibaba Cloud trusted system, set this parameter to vTPM. Then, the Alibaba Cloud trusted system performs trust verifications when the instances start.
   * *   If you do not want to use the Alibaba Cloud trusted system, leave this parameter empty. Note that if your created instances use an enclave-based confidential computing environment (with `SecurityOptions.ConfidentialComputingMode` set to Enclave), the Alibaba Cloud trusted system is enabled for the instances.
   * *   When you use the ECS API to create instances that use the trusted system, you can call only the `RunInstances` operation. The `CreateInstance` operation does not support the `SecurityOptions.TrustedSystemMode` parameter.
   * 
   * > If you have configured an instance as a trusted one when you created the instance, you can use only an image that support the trusted system to replace the system disk of the instance.
   * 
   * For more information about the trusted system, see [Overview](https://help.aliyun.com/document_detail/201394.html).
   * 
   * @example
   * vTPM
   */
  trustedSystemMode?: string;
  static names(): { [key: string]: string } {
    return {
      confidentialComputingMode: 'ConfidentialComputingMode',
      trustedSystemMode: 'TrustedSystemMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidentialComputingMode: 'string',
      trustedSystemMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

