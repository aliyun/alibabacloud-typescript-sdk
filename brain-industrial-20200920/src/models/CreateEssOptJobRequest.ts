// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEssOptJobRequestElecPrice extends $dara.Model {
  /**
   * @example
   * 00:00:15
   */
  dataTime?: string;
  /**
   * @example
   * 0.5
   */
  price?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      price: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequestGenPrice extends $dara.Model {
  /**
   * @example
   * 00:00:15
   */
  dataTime?: string;
  /**
   * @example
   * 0.3
   */
  price?: string;
  static names(): { [key: string]: string } {
    return {
      dataTime: 'DataTime',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTime: 'string',
      price: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequestLocation extends $dara.Model {
  /**
   * @example
   * 10.123
   */
  altitude?: number;
  /**
   * @example
   * 40.027
   */
  latitude?: number;
  /**
   * @example
   * 120.042
   */
  longitude?: number;
  static names(): { [key: string]: string } {
    return {
      altitude: 'Altitude',
      latitude: 'Latitude',
      longitude: 'Longitude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      altitude: 'number',
      latitude: 'number',
      longitude: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequestSystemData extends $dara.Model {
  historyData?: { [key: string]: any }[];
  /**
   * @example
   * 1
   */
  systemId?: string;
  systemParams?: { [key: string]: any };
  /**
   * @example
   * ess
   */
  systemType?: string;
  static names(): { [key: string]: string } {
    return {
      historyData: 'HistoryData',
      systemId: 'SystemId',
      systemParams: 'SystemParams',
      systemType: 'SystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historyData: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      systemId: 'string',
      systemParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      systemType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyData)) {
      $dara.Model.validateArray(this.historyData);
    }
    if(this.systemParams) {
      $dara.Model.validateMap(this.systemParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEssOptJobRequest extends $dara.Model {
  businessKey?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  elecPrice?: CreateEssOptJobRequestElecPrice[];
  /**
   * @example
   * FIFTEEN_MIN
   */
  freq?: string;
  genPrice?: CreateEssOptJobRequestGenPrice[];
  location?: CreateEssOptJobRequestLocation;
  /**
   * @example
   * latest
   */
  modelVersion?: string;
  /**
   * @example
   * 2025-02-12
   */
  runDate?: string;
  systemData?: CreateEssOptJobRequestSystemData[];
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * LOAD_ESS_SOLAR
   */
  topoType?: string;
  static names(): { [key: string]: string } {
    return {
      businessKey: 'BusinessKey',
      duration: 'Duration',
      elecPrice: 'ElecPrice',
      freq: 'Freq',
      genPrice: 'GenPrice',
      location: 'Location',
      modelVersion: 'ModelVersion',
      runDate: 'RunDate',
      systemData: 'SystemData',
      timeZone: 'TimeZone',
      topoType: 'TopoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessKey: 'string',
      duration: 'number',
      elecPrice: { 'type': 'array', 'itemType': CreateEssOptJobRequestElecPrice },
      freq: 'string',
      genPrice: { 'type': 'array', 'itemType': CreateEssOptJobRequestGenPrice },
      location: CreateEssOptJobRequestLocation,
      modelVersion: 'string',
      runDate: 'string',
      systemData: { 'type': 'array', 'itemType': CreateEssOptJobRequestSystemData },
      timeZone: 'string',
      topoType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elecPrice)) {
      $dara.Model.validateArray(this.elecPrice);
    }
    if(Array.isArray(this.genPrice)) {
      $dara.Model.validateArray(this.genPrice);
    }
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    if(Array.isArray(this.systemData)) {
      $dara.Model.validateArray(this.systemData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

