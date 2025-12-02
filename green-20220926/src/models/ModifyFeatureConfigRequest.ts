// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFeatureConfigRequest extends $dara.Model {
  /**
   * @remarks
   * query
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * query
   * 
   * @example
   * 标签2
   */
  description?: string;
  /**
   * @remarks
   * query
   * 
   * @example
   * __config__
   */
  field?: string;
  /**
   * @remarks
   * query
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * query
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * System-defined parameter. Value: **ModifyFeatureConfig**.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * query
   * 
   * @example
   * custom_llm_template
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      field: 'Field',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      field: 'string',
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

