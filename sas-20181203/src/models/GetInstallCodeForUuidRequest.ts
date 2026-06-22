// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstallCodeForUuidRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the server whose agent installation code you want to query.
   * 
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * eae0b46e-2155-422e-9565-ecc52c69****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

