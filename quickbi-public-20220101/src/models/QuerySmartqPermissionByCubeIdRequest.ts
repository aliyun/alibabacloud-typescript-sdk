// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmartqPermissionByCubeIdRequest extends $dara.Model {
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
   * 
   * This parameter is required.
   * 
   * @example
   * 95c4d**************3852e202
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

