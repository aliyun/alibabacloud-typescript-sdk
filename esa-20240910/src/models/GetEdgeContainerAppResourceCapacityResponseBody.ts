// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceCapacityResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The carrier. This parameter is returned only for regions in the Chinese mainland. Valid values:
   * 
   * - cmcc: China Mobile
   * 
   * - chinanet: China Telecom
   * 
   * - unicom: China Unicom
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The Chinese mainland:
   * 
   * - huadong: East China
   * 
   * - huanan: South China
   * 
   * - huazhong: Central China
   * 
   * - huabei: North China
   * 
   * - xibei: Northwest China
   * 
   * - xinan: Southwest China
   * 
   * - dongbei: Northeast China
   * 
   * Special administrative regions and regions outside the Chinese mainland:
   * 
   * - tw: Taiwan (China)
   * 
   * - mo: Macao (China)
   * 
   * - hk: Hong Kong (China)
   * 
   * - jp: Japan
   * 
   * - us: US
   * 
   * - th: Thailand
   * 
   * - kr: South Korea
   * 
   * - ru: Russia
   * 
   * - sg: Singapore
   * 
   * - fr: France
   * 
   * - es: Spain
   * 
   * - it: Italy
   * 
   * - se: Sweden
   * 
   * - ae: UAE
   * 
   * - id: Indonesia
   * 
   * - cl: Chile
   * 
   * - ph: Philippines
   * 
   * - my: Malaysia
   * 
   * - vn: Vietnam
   * 
   * - ar: Argentina
   * 
   * - au: Australia
   * 
   * - br: Brazil
   * 
   * - co: Colombia
   * 
   * - de: Germany
   * 
   * - gb: UK
   * 
   * - pe: Peru
   * 
   * - sa: Saudi Arabia
   * 
   * - nl: Netherlands
   * 
   * - za: South Africa
   * 
   * @example
   * huadong
   */
  region?: string;
  /**
   * @remarks
   * The number of container replicas that can be deployed.
   * 
   * @example
   * 16
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
      region: 'Region',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: 'string',
      region: 'string',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppResourceCapacityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available regions.
   */
  regions?: GetEdgeContainerAppResourceCapacityResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50423A7F-A83D-1E24-B80E-86DD25790759
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': GetEdgeContainerAppResourceCapacityResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

