// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBusinessAccessPointsResponseBodyBusinessAccessPointsOpticalModuleModels extends $dara.Model {
  /**
   * @remarks
   * The optical module model supported by the Express Connect circuit access point. Valid values:
   * 1000Base-LX : 
   * SFP-GE-LR-SM1310,10KM
   * SFP-GE-ER-SM1310,40KM
   * SFP-GE-ZR-SM1550,80KM 
   * 10GBase-LR : 
   * SFP-10G-LR-SM1310,10KM
   * SFP-10G-ER-SM1550,40KM 
   * SFP-10G-ZR-SM1550,80KM  
   * 40GBase-LR : 
   * QSFP-40G-LR4-WDM1300,10KM
   * QSFP-40G-ER4-WDM1300,40KM
   * QSFP-40G-ZR4-WDM1300,80KM
   * 100GBase-LR : 
   * QSFP28-100G-LR4-WDM1300,10KM
   * QSFP28-100G-ER4-WDM1300,40KM
   * QSFP28-100G-ZR4-WDM1300,80KM.
   * 
   * @example
   * SFP-GE-LR-SM1310,10KM
   */
  opticalModuleModel?: string;
  /**
   * @remarks
   * The port type supported by the optical module at the Express Connect circuit access point. Valid values:
   * ● 1000Base-LX: GE single-mode optical port.
   * ● 10GBase-LR: 10 GE single-mode optical port.
   * ● 40GBase-LR: 40 GE single-mode optical port.
   * ● 100GBase-LR: 100 GE single-mode optical port.
   * 
   * @example
   * 1000Base-LX
   */
  portType?: string;
  static names(): { [key: string]: string } {
    return {
      opticalModuleModel: 'OpticalModuleModel',
      portType: 'PortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opticalModuleModel: 'string',
      portType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessAccessPointsResponseBodyBusinessAccessPoints extends $dara.Model {
  /**
   * @remarks
   * The ID of the Express Connect circuit access point.
   * 
   * @example
   * ap-cn-hangzhou-xs-B
   */
  accessPointId?: string;
  /**
   * @remarks
   * The name of the Express Connect circuit access point.
   * 
   * @example
   * 杭州-萧山-B
   */
  accessPointName?: string;
  /**
   * @remarks
   * The CloudBox instance ID.
   * 
   * > This parameter is available only when the queried Express Connect circuit and access point are CloudBox Express Connect circuits and CloudBox access points.
   * 
   * @example
   * cb-****
   */
  cloudBoxInstanceIds?: string;
  /**
   * @remarks
   * The latitude of the access point.
   * 
   * @example
   * 30.198416
   */
  latitude?: number;
  /**
   * @remarks
   * The longitude of the access point.
   * 
   * @example
   * 120.247514
   */
  longitude?: number;
  /**
   * @remarks
   * The collection of optical module models supported by the current access point.
   */
  opticalModuleModels?: ListBusinessAccessPointsResponseBodyBusinessAccessPointsOpticalModuleModels[];
  /**
   * @remarks
   * The telecommunications service providers that support physical line access. Valid values:
   * 
   * - **CT**: China Telecom.
   * - **CU**: China Unicom.
   * - **CM**: China Mobile.
   * - **CO**: Other Chinese providers.
   * - **Equinix**: Equinix.
   * - **Other**: Other providers outside the Chinese mainland.
   * 
   * @example
   * CT
   */
  supportLineOperator?: string;
  /**
   * @remarks
   * The port types available for purchase at the Express Connect circuit access point. Valid values:
   * 
   * - **100Base-T**: 100M Ethernet port.
   * - **1000Base-T**: 1 GE electrical port.
   * - **1000Base-LX**: GE single-mode optical port (10 km).
   * - **10GBase-T**: 10 GE electrical port.
   * - **10GBase-LR**: 10 GE single-mode optical port (10 km).
   * - **40GBase-LR**: 40 GE single-mode optical port.
   * - **100GBase-LR**: 100 GE single-mode optical port.
   * 
   * >  The creation of 40GBase-LR and 100GBase-LR ports depends on the actual backend port availability. Contact your account manager for details.
   * 
   * @example
   * 1000Base-T
   */
  supportPortTypes?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      accessPointName: 'AccessPointName',
      cloudBoxInstanceIds: 'CloudBoxInstanceIds',
      latitude: 'Latitude',
      longitude: 'Longitude',
      opticalModuleModels: 'OpticalModuleModels',
      supportLineOperator: 'SupportLineOperator',
      supportPortTypes: 'SupportPortTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      accessPointName: 'string',
      cloudBoxInstanceIds: 'string',
      latitude: 'number',
      longitude: 'number',
      opticalModuleModels: { 'type': 'array', 'itemType': ListBusinessAccessPointsResponseBodyBusinessAccessPointsOpticalModuleModels },
      supportLineOperator: 'string',
      supportPortTypes: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.opticalModuleModels)) {
      $dara.Model.validateArray(this.opticalModuleModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBusinessAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of all access point information for Express Connect circuits.
   */
  businessAccessPoints?: ListBusinessAccessPointsResponseBodyBusinessAccessPoints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      businessAccessPoints: 'BusinessAccessPoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessAccessPoints: { 'type': 'array', 'itemType': ListBusinessAccessPointsResponseBodyBusinessAccessPoints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessAccessPoints)) {
      $dara.Model.validateArray(this.businessAccessPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

