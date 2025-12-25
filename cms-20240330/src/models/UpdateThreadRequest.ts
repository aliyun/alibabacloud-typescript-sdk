// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateThreadRequest extends $dara.Model {
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * MY ANTOM Tech Team Annual Dinner Performance Lucky Draw
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
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

