// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBodyResultNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * 40
   */
  disk?: number;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The configuration of Kibana nodes.
   * 
   * @example
   * elasticsearch.sn2ne.xlarge
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

