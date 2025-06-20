// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SafeChangeCheckShrinkRequestBlockInfosHitInfos extends $dara.Model {
  hitInfo?: string;
  hitObject?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      hitInfo: 'HitInfo',
      hitObject: 'HitObject',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitInfo: 'string',
      hitObject: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

