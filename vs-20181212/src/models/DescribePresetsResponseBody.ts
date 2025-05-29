// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePresetsResponseBodyPresets } from "./DescribePresetsResponseBodyPresets";


export class DescribePresetsResponseBody extends $dara.Model {
  /**
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  presets?: DescribePresetsResponseBodyPresets[];
  /**
   * @example
   * 9FE0CA83-BFD3-4EBD-A429-FABB9B9AE772
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      presets: 'Presets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      presets: { 'type': 'array', 'itemType': DescribePresetsResponseBodyPresets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.presets)) {
      $dara.Model.validateArray(this.presets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

