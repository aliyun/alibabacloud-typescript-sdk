// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarbonEmissionElecSummaryItem extends $dara.Model {
  carbonEmissionData?: number;
  dataUnit?: string;
  name?: string;
  ratio?: number;
  rawData?: number;
  static names(): { [key: string]: string } {
    return {
      carbonEmissionData: 'carbonEmissionData',
      dataUnit: 'dataUnit',
      name: 'name',
      ratio: 'ratio',
      rawData: 'rawData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmissionData: 'number',
      dataUnit: 'string',
      name: 'string',
      ratio: 'number',
      rawData: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

