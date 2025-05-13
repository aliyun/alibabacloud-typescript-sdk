// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionConfigurationResponseBodyResultClientNodeDiskList extends $dara.Model {
  /**
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @example
   * 20
   */
  maxSize?: number;
  /**
   * @example
   * 20
   */
  minSize?: number;
  /**
   * @example
   * 18
   */
  scaleLimit?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

