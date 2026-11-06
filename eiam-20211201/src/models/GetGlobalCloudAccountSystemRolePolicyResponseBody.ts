// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGlobalCloudAccountSystemRolePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Version":"1","Statement":[]}
   */
  policyDocument?: string;
  /**
   * @remarks
   * 本次请求的唯一标识。
   * 
   * This parameter is required.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyDocument: 'PolicyDocument',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDocument: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

