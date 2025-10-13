// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceReserveResponseBodyReserveSet extends $dara.Model {
  /**
   * @remarks
   * The following ISPs are supported. You do not need to enter this field for overseas and special administrative regions. ISP:
   * 
   * *   China Mobile: cmcc
   * *   China Telecom: chinanet
   * *   China Unicom: unicom
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * Chinese mainland:
   * 
   * *   East China: huadong
   * *   South China: huanan
   * *   Central China: huazhong
   * *   North China: huabei
   * *   Northwest: xibei
   * *   Southwest: xinan
   * *   Northeast China: dongbei
   * 
   * Special Administrative Regions and Overseas:
   * 
   * *   Taiwan, China: tw
   * *   Macau China: mo
   * *   Hong Kong, China: hk
   * *   Japan: jp
   * *   United States: us
   * *   Thailand: th
   * *   Korea: kr
   * *   Russia: ru
   * *   Singapore: sg
   * *   France: fr
   * *   Spain: es
   * *   Italy: it
   * *   Sweden: se
   * *   UAE: ae
   * *   Indonesia: id
   * *   Chile: cl
   * *   Philippines: ph
   * *   Malaysia: my
   * *   Vietnam: vn
   * *   Argentina: ar
   * *   Australia: au
   * *   Brazil: br
   * *   Colombia: co
   * *   Germany: de
   * *   UK: gb
   * *   Peru: pe
   * *   Saudi Arabia: sa
   * *   Netherlands: nl
   * *   South Africa: za
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
   * The end time of the reservation. The input is UTC time. It takes +8 hours to enter Beijing time. For example, if the current time is 2006-01-02 06:04:05 , you need to enter "2006-01-02T14:04:05Z".
   * 
   * @example
   * 2006-01-02T15:04:05Z
   */
  durationTime?: string;
  /**
   * @remarks
   * Whether to enable resource reservation.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Whether to enable resource reservation permanently.
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
   * Reserved resource list.
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

