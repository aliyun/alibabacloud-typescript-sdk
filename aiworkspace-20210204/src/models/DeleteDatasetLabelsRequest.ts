// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can call [GetDataset](https://help.aliyun.com/document_detail/457218.html) to obtain the tag key. Multiple tag keys are separated by commas (,).
   * 
   * @example
   * key1,key2
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

