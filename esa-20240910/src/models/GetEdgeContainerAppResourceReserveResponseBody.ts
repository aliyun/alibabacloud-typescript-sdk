// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceReserveResponseBodyReserveSet extends $dara.Model {
  /**
   * @remarks
   * The following Internet service providers (ISPs) are supported. This parameter is not required for regions outside the Chinese mainland.
   * Valid values:
   * - cmcc: China Mobile
   * - chinanet: China Telecom
   * - unicom: China Unicom.
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The Chinese mainland:
   * - East China: huadong
   * - South China: huanan
   * - Central China: huazhong
   * - North China: huabei
   * - Northwest China: xibei
   * - Southwest China: xinan
   * - Northeast China: dongbei
   * 
   * Special administrative regions and outside China:
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
   * - South Africa: za.
   * 
   * @example
   * huazhong
   */
  region?: string;
  /**
   * @remarks
   * The number of container replicas.
   * 
   * @example
   * 1
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

export class GetEdgeContainerAppResourceReserveResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reservation expiration time. This parameter uses UTC time. To convert from UTC+8, add 8 hours. For example, if the current UTC+8 time is 2006-01-02 06:04:05, enter "2006-01-02T14:04:05Z".
   * 
   * @example
   * 2006-01-02T15:04:05Z
   */
  durationTime?: string;
  /**
   * @remarks
   * Indicates whether resource reservation is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether the reservation is permanently enabled.
   * 
   * @example
   * true
   */
  forever?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The list of reserved resources.
   */
  reserveSet?: GetEdgeContainerAppResourceReserveResponseBodyReserveSet[];
  static names(): { [key: string]: string } {
    return {
      durationTime: 'DurationTime',
      enable: 'Enable',
      forever: 'Forever',
      requestId: 'RequestId',
      reserveSet: 'ReserveSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationTime: 'string',
      enable: 'boolean',
      forever: 'boolean',
      requestId: 'string',
      reserveSet: { 'type': 'array', 'itemType': GetEdgeContainerAppResourceReserveResponseBodyReserveSet },
    };
  }

  validate() {
    if(Array.isArray(this.reserveSet)) {
      $dara.Model.validateArray(this.reserveSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

