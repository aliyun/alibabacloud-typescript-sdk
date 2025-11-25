// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPostPayModuleSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the pay-as-you-go instance. This parameter is required.
   * 
   * >  You can call the [DescribeVersionConfig](https://help.aliyun.com/document_detail/421770.html) operation to obtain the ID.
   * 
   * @example
   * postpay-sas-**
   */
  postPayInstanceId?: string;
  /**
   * @remarks
   * The switch status of the pay-as-you-go module. The value is a JSON string. Valid values:
   * 
   * *   Key:
   * 
   *     *   **VUL**: vulnerability fixing module
   *     *   **CSPM**: cloud service configuration check module
   *     *   **AGENTLESS**: agentless detection module
   *     *   **SERVERLESS**: serverless asset module
   *     *   **CTDR**: Threat Analysis and Response Module
   *     *   **POST_HOST**: Host and Container Security Module
   *     *   **SDK**: Malicious File Detection SDK Module
   *     *   **RASP**: Application Protection Module
   * 
   * *   Value: A value of 0 specifies disabled. A value of 1 specifies enabled.
   * 
   * >  If you do not specify a value for a module, the original value of the module is retained.
   * 
   * @example
   * {"VUL":1,"CSPM":0}
   */
  postPayModuleSwitch?: string;
  static names(): { [key: string]: string } {
    return {
      postPayInstanceId: 'PostPayInstanceId',
      postPayModuleSwitch: 'PostPayModuleSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postPayInstanceId: 'string',
      postPayModuleSwitch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

