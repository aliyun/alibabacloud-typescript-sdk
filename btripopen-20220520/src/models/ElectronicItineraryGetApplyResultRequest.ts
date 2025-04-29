// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryGetApplyResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0c7d5944608943479a9a4d40c1eec618
   */
  batchApplyNo?: string;
  static names(): { [key: string]: string } {
    return {
      batchApplyNo: 'batch_apply_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchApplyNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

