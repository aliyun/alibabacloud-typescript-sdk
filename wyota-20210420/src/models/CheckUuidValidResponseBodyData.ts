// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUuidValidResponseBodyData extends $dara.Model {
  newUpgrade?: boolean;
  static names(): { [key: string]: string } {
    return {
      newUpgrade: 'NewUpgrade',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newUpgrade: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

