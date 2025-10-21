// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelInputContentDetectResultRequest extends $dara.Model {
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 5d85cd38-03b2-49fd-86b2-be85c4b13215
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

