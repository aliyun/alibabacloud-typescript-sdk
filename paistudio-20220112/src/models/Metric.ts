// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Metric extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp.
   * 
   * @example
   * rg17tmvwiokh****
   */
  time?: number;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 23000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

