// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 760bad53276431c499e30dc36f6b26be
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp1fg655nh68xyz9i***
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

