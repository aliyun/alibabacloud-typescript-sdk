// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RdsCustomInitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AliyunServiceRoleForRds
   */
  serviceLinkedRole?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceLinkedRole: 'ServiceLinkedRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceLinkedRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

