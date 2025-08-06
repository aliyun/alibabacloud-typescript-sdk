// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppPolicyResponseBody extends $dara.Model {
  nonExistPolicyNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistPolicyNames: 'NonExistPolicyNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistPolicyNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nonExistPolicyNames)) {
      $dara.Model.validateArray(this.nonExistPolicyNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

