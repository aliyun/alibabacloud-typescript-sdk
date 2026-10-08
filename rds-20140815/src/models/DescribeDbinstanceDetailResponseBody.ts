// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The activation state.
   * 
   * @example
   * Invalid
   */
  activationState?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The license type.
   * 
   * @example
   * Normal
   */
  licenseType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06B220E2-EAC5-4DBE-A1FC-1B62DB6A****
   */
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

