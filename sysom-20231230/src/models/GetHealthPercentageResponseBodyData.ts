// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHealthPercentageResponseBodyData extends $dara.Model {
  /**
   * @example
   * health
   */
  type?: string;
  /**
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

