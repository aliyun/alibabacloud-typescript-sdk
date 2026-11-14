// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workstation.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

