// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqQueryAbilityRequest extends $dara.Model {
  /**
   * @remarks
   * Dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * User ID.
   * >Notice: If this field is not filled, the data will be queried by default as the organization owner.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  userId?: string;
  /**
   * @remarks
   * Question text.
   * 
   * This parameter is required.
   * 
   * @example
   * This year\\"s sales data
   */
  userQuestion?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      userId: 'UserId',
      userQuestion: 'UserQuestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      userId: 'string',
      userQuestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

