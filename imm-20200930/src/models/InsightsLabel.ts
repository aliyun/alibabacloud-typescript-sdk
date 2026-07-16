// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsightsLabel extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * 有人摔倒
   */
  description?: string;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * 摔倒
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

