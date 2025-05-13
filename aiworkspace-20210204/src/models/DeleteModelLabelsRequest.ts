// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The label key to be deleted. To delete multiple label keys, separate them with commas (,).
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

