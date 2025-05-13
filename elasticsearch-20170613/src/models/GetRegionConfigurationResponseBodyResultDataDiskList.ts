// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegionConfigurationResponseBodyResultDataDiskList extends $dara.Model {
  /**
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @example
   * 5120
   */
  maxSize?: number;
  /**
   * @example
   * 20
   */
  minSize?: number;
  /**
   * @example
   * 2048
   */
  scaleLimit?: number;
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.valueLimitSet)) {
      $dara.Model.validateArray(this.valueLimitSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

