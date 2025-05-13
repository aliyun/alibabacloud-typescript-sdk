// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLogstashRequestNodeSpec extends $dara.Model {
  /**
   * @example
   * 50
   */
  disk?: number;
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * logstash.n4.small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

