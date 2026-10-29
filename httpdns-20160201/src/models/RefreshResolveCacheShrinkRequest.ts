// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshResolveCacheShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of domain names to refresh.
   */
  domainsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      domainsShrink: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

