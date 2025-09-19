// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudVendorTrialConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Unique ID of the AK.
   * 
   * > You can call [DescribeCloudVendorAccountAKList](~~DescribeCloudVendorAccountAKList~~) to get the AuthId.
   * > -
   * 
   * This parameter is required.
   * 
   * @example
   * 23**
   */
  authId?: number;
  /**
   * @remarks
   * Cloud asset vendor. Values:
   * - **Tencent**: Tencent Cloud
   * - **AWS**: Amazon Web Services
   * 
   * This parameter is required.
   * 
   * @example
   * AWS
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      authId: 'AuthId',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authId: 'number',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

