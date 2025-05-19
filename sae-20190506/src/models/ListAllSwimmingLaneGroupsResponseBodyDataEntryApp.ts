// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllSwimmingLaneGroupsResponseBodyDataEntryApp extends $dara.Model {
  /**
   * @example
   * 09805e5d-9b8d-42cd-9442-03c498******
   */
  appId?: string;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * mse
   */
  appType?: string;
  /**
   * @example
   * mse-cn-53y49******
   */
  mseAppId?: string;
  /**
   * @example
   * test
   */
  mseAppName?: string;
  /**
   * @example
   * demo
   */
  mseNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'MseNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appType: 'string',
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

