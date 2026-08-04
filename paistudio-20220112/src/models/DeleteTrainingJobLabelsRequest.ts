// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTrainingJobLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The keys of the labels.
   * 
   * This parameter is required.
   * 
   * @example
   * RootModelID
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

