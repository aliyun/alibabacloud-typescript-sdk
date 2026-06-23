// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppResourceReserveRequestReserveSet extends $dara.Model {
  /**
   * @remarks
   * The Internet service provider (ISP). The following ISPs are supported. You do not need to specify an ISP for special administrative regions or areas outside China:
   * 
   * - China Mobile: cmcc
   * - China Telecom: chinanet
   * - China Unicom: unicom.
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The region information. For the Chinese mainland, you can specify a major region. For special administrative regions and areas outside China, you can specify a country or region. The following list shows the parameter mappings:
   * 
   * Chinese mainland:
   * 
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

export class UpdateEdgeContainerAppResourceReserveRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.
   * >Notice: The AppId format is the app- prefix followed by a numeric suffix, with a total length of 20 to 64 characters (example: app-8806886***83794688). Call ListEdgeContainerApps to obtain an existing AppId, or call CreateEdgeContainerApp to create an application first.</notice>.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The reservation end time. This parameter uses UTC time. To convert from UTC+8, add 8 hours. For example, if the current time is 2006-01-02 06:04:05 in UTC+8, enter "2006-01-02T14:04:05Z".
   * 
   * @example
   * 2006-01-02T15:04:05Z
   */
  durationTime?: string;
  /**
   * @remarks
   * Specifies whether to enable resource reservation.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to permanently enable reservation. Once enabled, you cannot set a reservation end time.
   * 
   * @example
   * true
   */
  forever?: boolean;
  /**
   * @remarks
   * The list of reserved resources.
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

