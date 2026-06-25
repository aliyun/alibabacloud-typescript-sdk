// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tag keys to delete. Separate multiple tag keys with commas (,).
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

