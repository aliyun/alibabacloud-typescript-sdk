// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktopsSessions extends $dara.Model {
  /**
   * @remarks
   * The ID of the end user that connects to the cloud computer.
   * 
   * @example
   * end user id
   */
  endUserId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

