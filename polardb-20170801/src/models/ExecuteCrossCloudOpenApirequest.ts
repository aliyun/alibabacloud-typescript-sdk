// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteCrossCloudOpenAPIRequest extends $dara.Model {
  /**
   * @remarks
   * The information required to call the cross-cloud OpenAPI.
   * 
   * @example
   * {"Action":"DescribeDBClusters"}
   */
  proxyInfo?: string;
  static names(): { [key: string]: string } {
    return {
      proxyInfo: 'ProxyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proxyInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

