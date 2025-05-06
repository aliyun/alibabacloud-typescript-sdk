// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSessionClusterResponseBodySessionClusterAutoStartConfiguration extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic startup is enabled.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

