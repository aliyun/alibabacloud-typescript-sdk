// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWordGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Keyword group ID.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

