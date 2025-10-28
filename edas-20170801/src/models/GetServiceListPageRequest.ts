// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListPageRequest extends $dara.Model {
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * cn-hangzhou:doc-test
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the data. Valid values:
   * 
   * *   `agent`: Use this value if you use the service query feature of the latest version to pass the query result.
   * *   `registry`: Use this value if you use the service query feature of the earlier version to pass the query result.
   * 
   * @example
   * Agent
   */
  origin?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from Page 0.
   * 
   * @example
   * 0
   */
  page?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   `app`: searches by application.
   * *   `service`: searches by service.
   * *   `providerIp`: searches by IP address.
   * 
   * @example
   * App
   */
  searchType?: string;
  /**
   * @remarks
   * The keyword used for the search.
   * 
   * *   Set this parameter to the ID of the application if you set the searchType parameter to app.``
   * *   Set this parameter to the name of the service if you set the serachType parameter to service.``
   * *   Set this parameter to the IP address of the application if you set the searchType parameter to providerIp.
   * 
   * @example
   * com.alibaba.edas.HelloService
   */
  searchValue?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   `dubbo`
   * *   `springCloud`
   * *   `hsf`
   * *   `istio`
   * 
   * @example
   * SpringCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * Specifies the provider side or the consumer side. Valid values:
   * 
   * *   provider
   * *   consumer
   * 
   * @example
   * provider
   */
  side?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      origin: 'origin',
      page: 'page',
      region: 'region',
      searchType: 'searchType',
      searchValue: 'searchValue',
      serviceType: 'serviceType',
      side: 'side',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      origin: 'string',
      page: 'number',
      region: 'string',
      searchType: 'string',
      searchValue: 'string',
      serviceType: 'string',
      side: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

