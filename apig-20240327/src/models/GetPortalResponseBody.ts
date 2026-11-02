// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HiMarketPortalDomainConfig } from "./HiMarketPortalDomainConfig";
import { HiMarketPortalSettingConfig } from "./HiMarketPortalSettingConfig";


export class GetPortalResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time in ISO 8601 format (RFC 3339) in UTC, such as 2026-05-15T10:00:00Z.
   * 
   * @example
   * 2026-05-15T10:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The description of the portal, which corresponds to the Description property of the portal resource.
   * 
   * @example
   * HiMarket portal for internal developers
   */
  description?: string;
  /**
   * @remarks
   * The name of the portal, which corresponds to the Name property of the portal resource.
   * 
   * @example
   * developer-portal
   */
  name?: string;
  /**
   * @remarks
   * The list of portal domain configurations. Each element in the list is named domainConfig.
   */
  portalDomainConfig?: HiMarketPortalDomainConfig[];
  /**
   * @remarks
   * The primary ID of the portal resource. This ID points to the same portal as the portalId request parameter.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The portal settings, including whether account and password authentication is enabled, whether developer registrations are automatically approved, and whether subscription requests are automatically approved.
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

export class GetPortalResponseBody extends $dara.Model {
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
  data?: GetPortalResponseBodyData;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPortalResponseBodyData,
      message: 'string',
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

