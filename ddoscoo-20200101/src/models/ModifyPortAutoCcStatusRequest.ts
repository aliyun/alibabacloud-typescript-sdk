// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortAutoCcStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The mode of the Intelligent Protection policy. Valid values:
   * 
   * *   **normal**
   * *   **loose**
   * *   **strict**
   * 
   * This parameter is required.
   * 
   * @example
   * normal
   */
  mode?: string;
  /**
   * @remarks
   * Specifies the status of the Intelligent Protection policy. Valid values:
   * 
   * *   **on**: enables the policy.
   * *   **off**: disables the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * on
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      switch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

