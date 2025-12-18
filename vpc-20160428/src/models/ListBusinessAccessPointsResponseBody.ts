// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBusinessAccessPointsResponseBodyBusinessAccessPointsOpticalModuleModels extends $dara.Model {
  opticalModuleModel?: string;
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
   * The ID of the access point.
   * 
   * @example
   * ap-cn-hangzhou-xs-B
   */
  accessPointId?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * hangzhou-xs-B
   */
  accessPointName?: string;
  /**
   * @remarks
   * The ID of the cloud box.
   * 
   * >  You can query this parameter if the Express Connect circuits and access points are of the cloud box type.
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
  opticalModuleModels?: ListBusinessAccessPointsResponseBodyBusinessAccessPointsOpticalModuleModels[];
  /**
   * @remarks
   * The connectivity provider of the Express Connect circuit. Valid values:
   * 
   * *   **CT**: China Telecom.
   * *   **CU**: China Unicom.
   * *   **CM**: China Mobile.
   * *   **CO**: other connectivity providers in the Chinese mainland.
   * *   **Equinix**: Equinix.
   * *   **Other**: other connectivity providers outside the Chinese mainland.
   * 
   * @example
   * CT
   */
  supportLineOperator?: string;
  /**
   * @remarks
   * The port type supported by the access point. Valid values:
   * 
   * *   **100Base-T**: 100 Mbit/s copper Ethernet port
   * *   **1000Base-T**: 1,000 Mbit/s copper Ethernet port
   * *   **1000Base-LX**: 1,000 Mbit/s single-mode optical port (10 km)
   * *   **10GBase-T**: 10,000 Mbit/s copper Ethernet port
   * *   **10GBase-LR**: 10,000 Mbit/s single-mode optical port (10 km)
   * *   **40GBase-LR**: 40,000 Mbit/s single-mode optical port
   * *   **100GBase-LR**: 100,000 Mbit/s single-mode optical port
   * 
   * >  To use ports 40GBase-LR and 100GBase-LR, you must first contact your account manager.
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
   * The list of access points.
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

