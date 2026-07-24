// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFeatureConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration in JSON format.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 标签2
   */
  description?: string;
  /**
   * @remarks
   * The label value. This value is user-defined.
   * 
   * @example
   * __config__
   */
  field?: string;
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
   * The resource type.
   * 
   * @example
   * text
   */
  resourceType?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * llm_query_moderation
   */
  serviceCode?: string;
  /**
   * @remarks
   * The type.
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

