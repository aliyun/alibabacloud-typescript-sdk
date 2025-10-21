// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TableColumn } from "./TableColumn";
import { PrimaryKey } from "./PrimaryKey";
import { WatermarkSpec } from "./WatermarkSpec";


export class Schema extends $dara.Model {
  columns?: TableColumn[];
  primaryKey?: PrimaryKey;
  watermarkSpecs?: WatermarkSpec[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      primaryKey: 'primaryKey',
      watermarkSpecs: 'watermarkSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': TableColumn },
      primaryKey: PrimaryKey,
      watermarkSpecs: { 'type': 'array', 'itemType': WatermarkSpec },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.primaryKey && typeof (this.primaryKey as any).validate === 'function') {
      (this.primaryKey as any).validate();
    }
    if(Array.isArray(this.watermarkSpecs)) {
      $dara.Model.validateArray(this.watermarkSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

