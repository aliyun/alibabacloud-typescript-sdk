// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline. You can obtain the baseline ID by calling the [GetNode](https://help.aliyun.com/document_detail/173977.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  baselineId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

