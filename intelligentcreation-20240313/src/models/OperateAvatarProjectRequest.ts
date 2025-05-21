// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAvatarProjectRequest extends $dara.Model {
  /**
   * @example
   * DELETE
   */
  operateType?: string;
  /**
   * @example
   * 812907463682949120
   */
  projectId?: string;
  /**
   * @example
   * 1
   */
  resChannelNumber?: number;
  /**
   * @example
   * FREE
   */
  resType?: string;
  static names(): { [key: string]: string } {
    return {
      operateType: 'operateType',
      projectId: 'projectId',
      resChannelNumber: 'resChannelNumber',
      resType: 'resType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      projectId: 'string',
      resChannelNumber: 'number',
      resType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

