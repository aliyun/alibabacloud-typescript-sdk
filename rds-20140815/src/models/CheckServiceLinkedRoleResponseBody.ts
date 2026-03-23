// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleResponseBody extends $dara.Model {
  hasServiceLinkedRole?: string;
  requestId?: string;
  requireServiceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      hasServiceLinkedRole: 'HasServiceLinkedRole',
      requestId: 'RequestId',
      requireServiceLinkedRole: 'RequireServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasServiceLinkedRole: 'string',
      requestId: 'string',
      requireServiceLinkedRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

