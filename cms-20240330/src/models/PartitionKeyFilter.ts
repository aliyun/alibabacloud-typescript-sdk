// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PartitionKeyFilter extends $dara.Model {
  /**
   * @remarks
   * Returns only items whose partition key value equals this string.
   */
  eq?: string;
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

