// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeedbacksRequest extends $dara.Model {
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * ["20251216-8B9B7B02-16FE-54BE-942A-F59DE0656032"]
   */
  taskIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskIdList: 'TaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

