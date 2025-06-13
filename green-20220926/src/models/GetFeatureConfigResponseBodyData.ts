// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of feature configurations
   */
  featureConf?: { [key: string]: any }[];
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
  /**
   * @remarks
   * UID.
   * 
   * @example
   * 1643953****74290
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      featureConf: 'FeatureConf',
      resourceType: 'ResourceType',
      serviceCode: 'ServiceCode',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConf: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceType: 'string',
      serviceCode: 'string',
      type: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.featureConf)) {
      $dara.Model.validateArray(this.featureConf);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

