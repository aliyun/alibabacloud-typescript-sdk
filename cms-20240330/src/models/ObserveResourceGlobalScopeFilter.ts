// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObserveResourceGlobalScopeFilter extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to retrieve only resources that are exclusive to the global scope.
   */
  eq?: boolean;
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

