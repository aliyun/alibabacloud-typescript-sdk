// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodesByBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * The baseline ID. You can call the [ListBaselineConfigs](https://help.aliyun.com/document_detail/173964.html) operation to query the baseline ID.
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

