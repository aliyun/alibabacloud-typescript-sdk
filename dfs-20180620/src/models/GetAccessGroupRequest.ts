// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      inputRegionId: 'InputRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      inputRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

