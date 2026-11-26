// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MissionConnectorTarget extends $dara.Model {
  /**
   * @remarks
   * The display name of the IM contact or group.
   * 
   * @example
   * Alert notification group
   */
  displayName?: string;
  /**
   * @remarks
   * The case-sensitive ID of the IM contact or group.
   * 
   * @example
   * 123456
   */
  id?: string;
  /**
   * @remarks
   * The recipient type. Valid values: user for a user, and group for a group.
   * 
   * @example
   * group
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      id: 'id',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

