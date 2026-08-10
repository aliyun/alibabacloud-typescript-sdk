// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLabelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The classification. Separate multiple values with commas.
   * 
   * @example
   * guard-scene
   */
  classify?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type. Separate multiple values with commas.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code. Separate multiple values with commas.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The type. Separate multiple values with commas.
   * content_moderation
   * 
   * @example
   * content_moderation
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      classify: 'Classify',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classify: 'string',
      regionId: 'string',
      resourceType: 'string',
      serviceCode: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

