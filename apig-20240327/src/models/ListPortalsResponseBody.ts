// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketPortalDomainConfig } from "./HiMarketPortalDomainConfig";
import { HiMarketPortalSettingConfig } from "./HiMarketPortalSettingConfig";


export class ListPortalsResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The creation time in ISO 8601 (RFC 3339) format in the UTC time zone, such as 2026-05-15T10:00:00Z.
   * 
   * @example
   * 2026-05-15T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The portal description, which is the Description property of the portal resource.
   * 
   * @example
   * HiMarket portal for internal developers
   */
  description?: string;
  /**
   * @remarks
   * The portal name, which is the Name property of the portal resource.
   * 
   * @example
   * developer-portal
   */
  name?: string;
  /**
   * @remarks
   * The portal domain name configuration list. The list element is named domainConfig.
   */
  portalDomainConfig?: HiMarketPortalDomainConfig[];
  /**
   * @remarks
   * The portal ID, which is the primary ID of the portal resource. It can be used in GetPortal, UpdatePortal, and DeletePortal to locate the portal at /himarket/v1/portals/{portalId}.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The portal settings, including whether to enable username and password authentication, whether to automatically approve developer registrations, and whether to automatically approve subscription requests.
   */
  portalSettingConfig?: HiMarketPortalSettingConfig;
  /**
   * @remarks
   * The region ID, which corresponds to the RegionId property of the portal resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      name: 'name',
      portalDomainConfig: 'portalDomainConfig',
      portalId: 'portalId',
      portalSettingConfig: 'portalSettingConfig',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      name: 'string',
      portalDomainConfig: { 'type': 'array', 'itemType': HiMarketPortalDomainConfig },
      portalId: 'string',
      portalSettingConfig: HiMarketPortalSettingConfig,
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portalDomainConfig)) {
      $dara.Model.validateArray(this.portalDomainConfig);
    }
    if(this.portalSettingConfig && typeof (this.portalSettingConfig as any).validate === 'function') {
      (this.portalSettingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The portal list. The list element is named portalConfig, and each element contains the information of a HiMarket developer portal.
   */
  content?: ListPortalsResponseBodyDataContent[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListPortalsResponseBodyDataContent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortalsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListPortalsResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * next-token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListPortalsResponseBodyData,
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

