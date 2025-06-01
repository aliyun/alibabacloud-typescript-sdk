// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserApplicationsResponseBodyApplicationsPortRanges extends $dara.Model {
  /**
   * @example
   * 80
   */
  begin?: string;
  /**
   * @example
   * 81
   */
  end?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'string',
      end: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

