// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCacheConfigsResponseBodyDomainCacheConfigs } from "./DescribeWebCacheConfigsResponseBodyDomainCacheConfigs";


export class DescribeWebCacheConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of Static Page Caching configurations.
   */
  domainCacheConfigs?: DescribeWebCacheConfigsResponseBodyDomainCacheConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainCacheConfigs: 'DomainCacheConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCacheConfigs: { 'type': 'array', 'itemType': DescribeWebCacheConfigsResponseBodyDomainCacheConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainCacheConfigs)) {
      $dara.Model.validateArray(this.domainCacheConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

