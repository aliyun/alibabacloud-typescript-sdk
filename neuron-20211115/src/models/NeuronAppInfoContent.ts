// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronAppInfoContent extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * order
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1343424
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

