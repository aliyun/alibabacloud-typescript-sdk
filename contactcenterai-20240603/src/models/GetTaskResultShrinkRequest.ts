// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResultShrinkRequest extends $dara.Model {
  requiredFieldListShrink?: string;
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requiredFieldListShrink: 'requiredFieldList',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredFieldListShrink: 'string',
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

