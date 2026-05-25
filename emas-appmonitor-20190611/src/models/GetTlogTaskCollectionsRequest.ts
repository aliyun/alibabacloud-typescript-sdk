// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTlogTaskCollectionsRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WXAIGC5ZCVUIYY78ABTCOUHGSQ
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      os: 'Os',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      os: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

