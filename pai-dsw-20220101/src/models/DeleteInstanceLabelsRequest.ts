// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The keys of the tags that you want to delete. Separate multiple tags with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * labelKey1,labelKey2,labelKey3
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

