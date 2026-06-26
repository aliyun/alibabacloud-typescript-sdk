// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicySetResponseBodyPolicySet extends $dara.Model {
  createTime?: string;
  description?: string;
  policySetArn?: string;
  policySetName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      policySetArn: 'PolicySetArn',
      policySetName: 'PolicySetName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      policySetArn: 'string',
      policySetName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicySetResponseBody extends $dara.Model {
  policySet?: GetPolicySetResponseBodyPolicySet;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policySet: 'PolicySet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policySet: GetPolicySetResponseBodyPolicySet,
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

