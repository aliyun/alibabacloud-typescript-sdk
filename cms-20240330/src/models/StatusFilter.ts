// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatusFilter extends $dara.Model {
  /**
   * @remarks
   * Filters the results to include only resources with the specified status.
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

