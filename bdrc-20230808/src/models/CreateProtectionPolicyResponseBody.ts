// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProtectionPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the protection policy.
   * 
   * @example
   * p-123***7890
   */
  protectionPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      protectionPolicyId: 'ProtectionPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectionPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectionPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: CreateProtectionPolicyResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 34081B20-C4C0-514F-93F6-8EEC3D1A587E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateProtectionPolicyResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

