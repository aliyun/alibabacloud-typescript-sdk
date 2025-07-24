// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIqsUsageRequest extends $dara.Model {
  /**
   * @example
   * 20241017
   */
  endDate?: string;
  /**
   * @example
   * 20241011
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

