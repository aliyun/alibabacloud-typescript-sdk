// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppliedConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The names of the Logtail configurations.
   */
  configs?: string[];
  /**
   * @remarks
   * The number of Logtail configurations.
   * 
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': 'string' },
      count: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

