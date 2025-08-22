// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnOriginSiteHealthStatusResponseBodyOriginSiteStatus extends $dara.Model {
  /**
   * @remarks
   * The health status of the origin server. Each point of presence (POP) periodically initiates a probe request to the configured origin domain name. If the POP receives a response from the origin server in 5 seconds, the probe is considered successful. After the probe data for each POP is collected, the health status of the origin server is calculated based on the proportion of successful probes. Valid values:
   * 
   * *   unknown: The probe data of the origin server is not obtained because the configurations of the origin server have been changed recently. Try again later.
   * *   healthy: The proportion of successful probes is higher than 80%.
   * *   degraded: The proportion of successful probes is higher than 0% and lower than or equal to 80%.
   * *   critical: All probing requests to the origin server failed.
   * 
   * @example
   * healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * The origin domain name that you configured in the DCDN console, which can be an IPv4 address, IPv6 address, common domain name, or Object Storage Service (OSS) domain name.
   * 
   * @example
   * host.com
   */
  host?: string;
  static names(): { [key: string]: string } {
    return {
      healthStatus: 'HealthStatus',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthStatus: 'string',
      host: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOriginSiteHealthStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the origin server of the accelerated domain name.
   */
  originSiteStatus?: DescribeDcdnOriginSiteHealthStatusResponseBodyOriginSiteStatus[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      originSiteStatus: 'OriginSiteStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originSiteStatus: { 'type': 'array', 'itemType': DescribeDcdnOriginSiteHealthStatusResponseBodyOriginSiteStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.originSiteStatus)) {
      $dara.Model.validateArray(this.originSiteStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

