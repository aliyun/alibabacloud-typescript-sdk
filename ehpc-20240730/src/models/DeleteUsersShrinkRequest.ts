// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users that you want to delete.
   * 
   * This parameter is required.
   */
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

