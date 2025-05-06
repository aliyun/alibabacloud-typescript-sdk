// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskResultRequest extends $dara.Model {
  requiredFieldList?: string[];
  /**
   * @example
   * 20240905-********-93E9-5D45-B4EF-045743A34071
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requiredFieldList: 'requiredFieldList',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredFieldList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.requiredFieldList)) {
      $dara.Model.validateArray(this.requiredFieldList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

