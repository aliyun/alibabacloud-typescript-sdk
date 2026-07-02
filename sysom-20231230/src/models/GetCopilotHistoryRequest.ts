// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCopilotHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of historical chat records to retrieve. The value is generally less than 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

