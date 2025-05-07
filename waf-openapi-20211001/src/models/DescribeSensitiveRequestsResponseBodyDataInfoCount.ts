// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveRequestsResponseBodyDataInfoCount extends $dara.Model {
  /**
   * @remarks
   * The type of the sensitive data.
   * 
   * @example
   * 1001
   */
  code?: string;
  /**
   * @remarks
   * The number of sensitive data entries.
   * 
   * @example
   * 23
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

