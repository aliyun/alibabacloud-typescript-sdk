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

export class Features extends $dara.Model {
  quota?: FeaturesQuota;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: FeaturesQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

