// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocalitySettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. To obtain the application ID, call the ListApplication operation. For more information, see [ListApplication](https://help.aliyun.com/document_detail/423162.html).
   * 
   * This parameter is required.
   * 
   * @example
   * dc190221-22b5-491c-a548-82f5fa1e3e26
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the microservices namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      namespaceId: 'NamespaceId',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      namespaceId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

