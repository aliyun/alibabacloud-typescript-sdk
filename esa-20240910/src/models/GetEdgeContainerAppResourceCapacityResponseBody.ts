// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceCapacityResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The following Internet service providers (ISPs) are supported. This field is not returned for regions outside the Chinese mainland.
   * ISPs:
   * 
   * - China Mobile: cmcc
   * - China Telecom: chinanet
   * - China Unicom: unicom
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * Chinese mainland:
   * - East China: huadong
   * - South China: huanan
   * - Central China: huazhong
   * - North China: huabei
   * - Northwest China: xibei
   * - Southwest China: xinan
   * - Northeast China: dongbei
   * 
   * Special administrative regions and overseas:
   * 
   * - Taiwan (China): tw
   * - Macao (China): mo
   * - Hong Kong (China): hk
   * - Japan: jp
   * - United States: us
   * - Thailand: th
   * - South Korea: kr
   * - Russia: ru
   * - Singapore: sg
   * - France: fr
   * - Spain: es
   * - Italy: it
   * - Sweden: se
   * - United Arab Emirates: ae
   * - Indonesia: id
   * - Chile: cl
   * - Philippines: ph
   * - Malaysia: my
   * - Vietnam: vn
   * - Argentina: ar
   * - Australia: au
   * - Brazil: br
   * - Colombia: co
   * - Germany: de
   * - United Kingdom: gb
   * - Peru: pe
   * - Saudi Arabia: sa
   * - Netherlands: nl
   * - South Africa: za
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
   * The request ID.
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

