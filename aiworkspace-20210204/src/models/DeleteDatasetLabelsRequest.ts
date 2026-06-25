// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The keys of the labels. For more information about how to query the keys of labels, see [GetDataset](https://help.aliyun.com/document_detail/457218.html). Separate multiple keys with commas (,).
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

