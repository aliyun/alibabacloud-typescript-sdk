// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrivateAccessApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the internal network access application. You can get this value from:
   * 
   * - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): List internal network access applications.
   * 
   * - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): Create an internal network access application.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

