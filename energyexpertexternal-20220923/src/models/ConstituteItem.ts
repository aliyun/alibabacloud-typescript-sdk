// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConstituteItemEnvGasEmissions extends $dara.Model {
  carbonEmissionData?: number;
  gasEmissionData?: number;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      gasEmissionData: 'gasEmissionData',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      gasEmissionData: 'number',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConstituteItem extends $dara.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  emissionSource?: string;
  emissionSourceKey?: string;
  enterpriseName?: string;
  envGasEmissions?: ConstituteItemEnvGasEmissions[];
  name?: string;
  nameKey?: string;
  ratio?: number;
  rawData?: number;
  subConstituteItems?: ConstituteItem[];
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      emissionSource: 'emissionSource',
      emissionSourceKey: 'emissionSourceKey',
      enterpriseName: 'enterpriseName',
      envGasEmissions: 'envGasEmissions',
      name: 'name',
      nameKey: 'nameKey',
      ratio: 'ratio',
      rawData: 'rawData',
      subConstituteItems: 'subConstituteItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      emissionSource: 'string',
      emissionSourceKey: 'string',
      enterpriseName: 'string',
      envGasEmissions: { 'type': 'array', 'itemType': ConstituteItemEnvGasEmissions },
      name: 'string',
      nameKey: 'string',
      ratio: 'number',
      rawData: 'number',
      subConstituteItems: { 'type': 'array', 'itemType': ConstituteItem },
    };
  }

  validate() {
    if(Array.isArray(this.envGasEmissions)) {
      $dara.Model.validateArray(this.envGasEmissions);
    }
    if(Array.isArray(this.subConstituteItems)) {
      $dara.Model.validateArray(this.subConstituteItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

