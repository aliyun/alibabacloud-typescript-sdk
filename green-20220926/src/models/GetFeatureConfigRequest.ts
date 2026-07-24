// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * {\\"Lang\\":\\"zh\\",\\"CategoryType\\":1,\\"Default\\":false,\\"ParentCategoryId\\":1720}
   */
  query?: string;
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
      query: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
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

