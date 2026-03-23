// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDetailResponseBody extends $dara.Model {
  activationState?: string;
  DBInstanceId?: string;
  licenseType?: string;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      activationState: 'ActivationState',
      DBInstanceId: 'DBInstanceId',
      licenseType: 'LicenseType',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activationState: 'string',
      DBInstanceId: 'string',
      licenseType: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

