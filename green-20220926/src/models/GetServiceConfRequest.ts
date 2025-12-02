// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceConfRequest extends $dara.Model {
  /**
   * @remarks
   * Query default configuration
   * 
   * @example
   * False
   */
  byDefault?: boolean;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * Audit scenario.
   * 
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @remarks
   * Service code.
   * 
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

