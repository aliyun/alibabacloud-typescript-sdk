// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForSwimmingLaneResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @example
   * demo-app
   */
  appName?: string;
  /**
   * @example
   * 8c573618-8d72-4407-baf4-f7b64b******
   */
  baseAppId?: string;
  /**
   * @example
   * demo
   */
  baseAppName?: string;
  /**
   * @example
   * mse-cn-hvm47******
   */
  mseAppId?: string;
  /**
   * @example
   * test
   */
  mseAppName?: string;
  /**
   * @example
   * sae-test
   */
  mseNamespaceId?: string;
  serviceTags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      baseAppId: 'BaseAppId',
      baseAppName: 'BaseAppName',
      mseAppId: 'MseAppId',
      mseAppName: 'MseAppName',
      mseNamespaceId: 'MseNamespaceId',
      serviceTags: 'ServiceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      baseAppId: 'string',
      baseAppName: 'string',
      mseAppId: 'string',
      mseAppName: 'string',
      mseNamespaceId: 'string',
      serviceTags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.serviceTags) {
      $dara.Model.validateMap(this.serviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

