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

