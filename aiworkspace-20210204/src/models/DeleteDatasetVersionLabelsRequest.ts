// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatasetVersionLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tag keys. Multiple tags are separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * key1,key2
   */
  keys?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

