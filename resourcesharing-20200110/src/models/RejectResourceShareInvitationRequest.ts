// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RejectResourceShareInvitationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource sharing invitation.
   * 
   * You can call the [ListResourceShareInvitations](https://help.aliyun.com/document_detail/450564.html) operation to obtain the ID of a resource sharing invitation.
   * 
   * This parameter is required.
   * 
   * @example
   * i-yyTWbkjHArYh****
   */
  resourceShareInvitationId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceShareInvitationId: 'ResourceShareInvitationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceShareInvitationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

