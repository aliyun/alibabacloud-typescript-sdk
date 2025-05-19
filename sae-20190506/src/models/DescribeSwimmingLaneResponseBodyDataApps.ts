// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSwimmingLaneResponseBodyDataApps extends $dara.Model {
  /**
   * @example
   * 6b4c0f64-f679-4580-8105-91eac4******
   */
  appId?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @example
   * sae-test
   */
  mseAppName?: string;
  /**
   * @example
   * 6733e538-d52f-48e6-91a4-192f91******
   */
  mseNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'mseNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      mseAppId: 'string',
      mseAppName: 'string',
      mseNamespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

