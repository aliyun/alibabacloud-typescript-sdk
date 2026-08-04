// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadIdentityRegistrationDocConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  filePath?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
      filePath: 'FilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
      filePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

