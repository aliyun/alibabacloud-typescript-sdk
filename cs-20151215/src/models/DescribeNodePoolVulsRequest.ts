// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodePoolVulsRequest extends $dara.Model {
  /**
   * @remarks
   * The priority to fix the vulnerability. Separate multiple priorities with commas (,). Valid values:
   * 
   * *   `asap`: high
   * *   `later`: medium
   * *   `nntf`: low
   * 
   * @example
   * asap
   */
  necessity?: string;
  static names(): { [key: string]: string } {
    return {
      necessity: 'necessity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

