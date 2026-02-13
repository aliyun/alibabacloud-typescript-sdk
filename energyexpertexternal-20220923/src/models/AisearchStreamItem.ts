// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchStreamItem extends $dara.Model {
  /**
   * @example
   * “network problem can be”
   */
  content?: string;
  params?: any;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      params: 'any',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

