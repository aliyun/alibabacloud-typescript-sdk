// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HyperNodeSchedulingConfig extends $dara.Model {
  minAvailable?: number;
  qualityPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      minAvailable: 'MinAvailable',
      qualityPolicy: 'QualityPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minAvailable: 'number',
      qualityPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

