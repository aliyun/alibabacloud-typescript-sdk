// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp14bnftyqhxg9ij****
   */
  instanceId?: string;
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
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The user data of the instance.
   * 
   * >  If no user data is configured for the instance, an empty string is returned.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY321ABC
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      requestId: 'RequestId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      requestId: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

