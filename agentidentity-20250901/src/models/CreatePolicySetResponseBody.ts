// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicySetResponseBodyPolicySet extends $dara.Model {
  createTime?: string;
  description?: string;
  policySetArn?: string;
  policySetName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      policySetArn: 'PolicySetArn',
      policySetName: 'PolicySetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      policySetArn: 'string',
      policySetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicySetResponseBody extends $dara.Model {
  policySet?: CreatePolicySetResponseBodyPolicySet;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policySet: 'PolicySet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policySet: CreatePolicySetResponseBodyPolicySet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policySet && typeof (this.policySet as any).validate === 'function') {
      (this.policySet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

