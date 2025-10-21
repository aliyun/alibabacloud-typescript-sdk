// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContentDetectResultRequest extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
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

