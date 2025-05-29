// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuousAdjustRequest extends $dara.Model {
  /**
   * @example
   * 0.5
   */
  focus?: string;
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
   * 0.5
   */
  iris?: string;
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
      focus: 'string',
      id: 'string',
      iris: 'string',
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

