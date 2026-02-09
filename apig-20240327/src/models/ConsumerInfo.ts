// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerInfo extends $dara.Model {
  /**
   * @remarks
   * consumerId
   * 
   * @example
   * cs-ctd4l1um1hkph7ki1k80
   */
  consumerId?: string;
  /**
   * @remarks
   * enable
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * name
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      enable: 'enable',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      enable: 'boolean',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

