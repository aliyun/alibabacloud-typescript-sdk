// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance is in the active state.
   * 
   * @example
   * Invalid
   */
  activationState?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-bp6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The type of the license.
   * 
   * @example
   * Normal
   */
  licenseType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
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

