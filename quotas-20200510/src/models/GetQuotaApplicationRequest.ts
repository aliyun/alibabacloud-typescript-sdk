// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * d314d6ae-867d-484c-9009-3d421a80****
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

