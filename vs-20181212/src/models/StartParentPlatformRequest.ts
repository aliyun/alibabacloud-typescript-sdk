// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartParentPlatformRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

