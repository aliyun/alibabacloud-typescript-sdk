// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssCheckTaskInfoRequest extends $dara.Model {
  /**
   * @example
   * P_AAA**
   */
  parentTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      parentTaskId: 'ParentTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

