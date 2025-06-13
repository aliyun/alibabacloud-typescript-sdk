// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceConfRequest extends $dara.Model {
  /**
   * @example
   * False
   */
  byDefault?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      byDefault: 'ByDefault',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      scene: 'Scene',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byDefault: 'boolean',
      regionId: 'string',
      resourceType: 'string',
      scene: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

