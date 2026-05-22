// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceStatusResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * Whether smooth offline is being used.
   * 
   * @example
   * false
   */
  isOffline?: boolean;
  /**
   * @remarks
   * Whether it is a test environment.
   * 
   * @example
   * false
   */
  isStaging?: boolean;
  /**
   * @remarks
   * Supported ISPs are as follows. The parameter is left empty for regions outside the Chinese mainland. ISP:
   * 
   * *   China Mobile: cmcc
   * *   China Telecom: chinanet
   * *   China Unicom: unicom
   * 
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @remarks
   * The number of ready replicas.
   * 
   * @example
   * 1
   */
  ready?: number;
  /**
   * @remarks
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
   * Special Administrative Regions and Overseas:
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
   * huadong
   */
  region?: string;
  /**
   * @remarks
   * The number of replicas that are deployed.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      isOffline: 'IsOffline',
      isStaging: 'IsStaging',
      isp: 'Isp',
      ready: 'Ready',
      region: 'Region',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOffline: 'boolean',
      isStaging: 'boolean',
      isp: 'string',
      ready: 'number',
      region: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppResourceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Queries the regions of deployment.
   */
  regions?: GetEdgeContainerAppResourceStatusResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
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
      regions: { 'type': 'array', 'itemType': GetEdgeContainerAppResourceStatusResponseBodyRegions },
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

