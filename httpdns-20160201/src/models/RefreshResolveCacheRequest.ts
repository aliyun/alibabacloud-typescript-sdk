// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshResolveCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The list of domain names to refresh.
   */
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

