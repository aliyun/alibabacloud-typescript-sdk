// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ABTestScene extends $dara.Model {
  name?: string;
  /**
   * @example
   * 0 停止实验 1 开通实验
   */
  status?: number;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      status: 'status',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      status: 'number',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

