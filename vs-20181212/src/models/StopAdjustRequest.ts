// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAdjustRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  focus?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * true
   */
  iris?: boolean;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      focus: 'Focus',
      id: 'Id',
      iris: 'Iris',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      focus: 'boolean',
      id: 'string',
      iris: 'boolean',
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

