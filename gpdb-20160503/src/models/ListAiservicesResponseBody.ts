// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The time when the AI service was created.
   * 
   * @example
   * 2026-03-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the AI service.
   * 
   * @example
   * dramatest
   */
  description?: string;
  /**
   * @remarks
   * The private endpoint for API debugging.
   * 
   * @example
   * 192.168.0.1/api-docs
   */
  privateApiDevUrl?: string;
  /**
   * @remarks
   * The private endpoint of the Workbench.
   * 
   * @example
   * 192.168.0.1
   */
  privateWorkbenchUrl?: string;
  /**
   * @remarks
   * The public endpoint for API debugging.
   * 
   * @example
   * 8.8.8.8/api-docs
   */
  publicApiDevUrl?: string;
  /**
   * @remarks
   * The public endpoint of the Workbench.
   * 
   * @example
   * 8.8.8.8
   */
  publicWorkbenchUrl?: string;
  /**
   * @remarks
   * The list of IP addresses in the IP address whitelist group. Separate multiple IP addresses with commas.
   * 
   * @example
   * 127.0.0.1
   */
  securityIpList?: string;
  /**
   * @remarks
   * The service account.
   * 
   * @example
   * dramauser
   */
  serviceAccount?: string;
  /**
   * @remarks
   * The ID of the AI service.
   * 
   * @example
   * drama-123456
   */
  serviceId?: string;
  /**
   * @remarks
   * The status of the AI service. Valid values:
   * 
   * - deploying
   * 
   * - active
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      privateApiDevUrl: 'PrivateApiDevUrl',
      privateWorkbenchUrl: 'PrivateWorkbenchUrl',
      publicApiDevUrl: 'PublicApiDevUrl',
      publicWorkbenchUrl: 'PublicWorkbenchUrl',
      securityIpList: 'SecurityIpList',
      serviceAccount: 'ServiceAccount',
      serviceId: 'ServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      privateApiDevUrl: 'string',
      privateWorkbenchUrl: 'string',
      publicApiDevUrl: 'string',
      publicWorkbenchUrl: 'string',
      securityIpList: 'string',
      serviceAccount: 'string',
      serviceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The list of AI services.
   */
  services?: ListAIServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      services: 'Services',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListAIServicesResponseBodyServices },
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

