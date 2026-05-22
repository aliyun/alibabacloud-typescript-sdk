// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppResourceReserveRequestReserveSet extends $dara.Model {
  /**
   * @remarks
   * The ISP. The following types are supported. You do not need to enter the ISP in regions outside the Chinese mainland:
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
   * Information about the region. The Chinese mainland supports the input of regions and special administrative regions, and the regions outside the Chinese mainland support the input of countries. The following is the corresponding parameter mapping:
   * 
   * Chinese mainland:
   * 
   * *   East China: huadong
   * *   South China: huanan
   * *   Central China: huazhong
   * *   North China: huabei
   * *   Northwest China: xibei
   * *   Southwest China: xinan
   * *   Northeast China: dongbei
   * 
   * Special Administrative Regions and overseas:
   * 
   * *   Taiwan, China: tw
   * *   Macau, China: mo
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
   * *   Argentina: AR
   * *   Australia: au
   * *   Brazil: br
   * *   Colombia: co
   * *   Germany: de
   * *   UK: GB
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

export class UpdateEdgeContainerAppResourceReserveRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The end time of the reservation. The input time is UTC. It takes +8 hours to enter Beijing time. For example, if the current time is 2006-01-02 06:04:05, you need to enter "2006-01-02T14:04:05Z".
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
   * Whether to permanently enable the reservation. Once it is enabled, you are not allowed to set the reservation deadline.
   * 
   * @example
   * true
   */
  forever?: boolean;
  /**
   * @remarks
   * Reserved resource list.
   */
  reserveSet?: UpdateEdgeContainerAppResourceReserveRequestReserveSet[];
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      durationTime: 'DurationTime',
      enable: 'Enable',
      forever: 'Forever',
      reserveSet: 'ReserveSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      durationTime: 'string',
      enable: 'boolean',
      forever: 'boolean',
      reserveSet: { 'type': 'array', 'itemType': UpdateEdgeContainerAppResourceReserveRequestReserveSet },
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

