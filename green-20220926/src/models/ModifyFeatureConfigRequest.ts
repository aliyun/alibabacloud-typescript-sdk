// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFeatureConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration, in JSON format
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * Label meaning
   * 
   * @example
   * 标签2
   */
  description?: string;
  /**
   * @remarks
   * Label value, customer-defined
   * 
   * @example
   * __config__
   */
  field?: string;
  /**
   * @remarks
   * Region
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
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * Type
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

