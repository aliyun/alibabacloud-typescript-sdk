// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetImageAnimations } from "./TargetImageAnimations";
import { TargetImageSnapshots } from "./TargetImageSnapshots";
import { TargetImageSprites } from "./TargetImageSprites";


export class TargetImage extends $dara.Model {
  animations?: TargetImageAnimations[];
  snapshots?: TargetImageSnapshots[];
  sprites?: TargetImageSprites[];
  static names(): { [key: string]: string } {
    return {
      animations: 'Animations',
      snapshots: 'Snapshots',
      sprites: 'Sprites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animations: { 'type': 'array', 'itemType': TargetImageAnimations },
      snapshots: { 'type': 'array', 'itemType': TargetImageSnapshots },
      sprites: { 'type': 'array', 'itemType': TargetImageSprites },
    };
  }

  validate() {
    if(Array.isArray(this.animations)) {
      $dara.Model.validateArray(this.animations);
    }
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    if(Array.isArray(this.sprites)) {
      $dara.Model.validateArray(this.sprites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

