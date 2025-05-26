// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetVideoFilterVideoDelogos } from "./TargetVideoFilterVideoDelogos";
import { TargetVideoFilterVideoDesensitization } from "./TargetVideoFilterVideoDesensitization";
import { TargetVideoFilterVideoWatermarks } from "./TargetVideoFilterVideoWatermarks";


export class TargetVideoFilterVideo extends $dara.Model {
  delogos?: TargetVideoFilterVideoDelogos[];
  desensitization?: TargetVideoFilterVideoDesensitization;
  speed?: number;
  watermarks?: TargetVideoFilterVideoWatermarks[];
  static names(): { [key: string]: string } {
    return {
      delogos: 'Delogos',
      desensitization: 'Desensitization',
      speed: 'Speed',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delogos: { 'type': 'array', 'itemType': TargetVideoFilterVideoDelogos },
      desensitization: TargetVideoFilterVideoDesensitization,
      speed: 'number',
      watermarks: { 'type': 'array', 'itemType': TargetVideoFilterVideoWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.delogos)) {
      $dara.Model.validateArray(this.delogos);
    }
    if(this.desensitization && typeof (this.desensitization as any).validate === 'function') {
      (this.desensitization as any).validate();
    }
    if(Array.isArray(this.watermarks)) {
      $dara.Model.validateArray(this.watermarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

