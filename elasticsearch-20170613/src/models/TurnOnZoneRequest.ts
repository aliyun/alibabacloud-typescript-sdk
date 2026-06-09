// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TurnOnZoneRequest extends $dara.Model {
  hpAlbZoneDrained?: boolean;
  /**
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      hpAlbZoneDrained: 'hpAlbZoneDrained',
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hpAlbZoneDrained: 'boolean',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

