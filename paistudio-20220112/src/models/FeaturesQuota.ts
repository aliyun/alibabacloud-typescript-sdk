// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FeaturesQuota extends $dara.Model {
  /**
   * @example
   * true
   */
  isEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

