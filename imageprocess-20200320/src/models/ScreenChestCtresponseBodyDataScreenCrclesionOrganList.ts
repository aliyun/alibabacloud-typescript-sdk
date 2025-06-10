// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataScreenCRCLesionOrganList extends $dara.Model {
  diameter?: number[];
  keySlice?: number;
  ROIEndpoints?: number[][];
  recistEndpoints?: number[][];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diameter: 'Diameter',
      keySlice: 'KeySlice',
      ROIEndpoints: 'ROIEndpoints',
      recistEndpoints: 'RecistEndpoints',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diameter: { 'type': 'array', 'itemType': 'number' },
      keySlice: 'number',
      ROIEndpoints: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      recistEndpoints: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diameter)) {
      $dara.Model.validateArray(this.diameter);
    }
    if(Array.isArray(this.ROIEndpoints)) {
      $dara.Model.validateArray(this.ROIEndpoints);
    }
    if(Array.isArray(this.recistEndpoints)) {
      $dara.Model.validateArray(this.recistEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

