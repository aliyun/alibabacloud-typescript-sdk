// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionConfigurationResponseBodyResultNodeSpecList extends $dara.Model {
  /**
   * @example
   * 16
   */
  cpuCount?: number;
  /**
   * @example
   * 44000
   */
  disk?: number;
  /**
   * @example
   * local_efficiency
   */
  diskType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 64
   */
  memorySize?: number;
  /**
   * @example
   * elasticsearch.sn2ne.large
   */
  spec?: string;
  /**
   * @example
   * local_efficiency
   */
  specGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'cpuCount',
      disk: 'disk',
      diskType: 'diskType',
      enable: 'enable',
      memorySize: 'memorySize',
      spec: 'spec',
      specGroupType: 'specGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      disk: 'number',
      diskType: 'string',
      enable: 'boolean',
      memorySize: 'number',
      spec: 'string',
      specGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

