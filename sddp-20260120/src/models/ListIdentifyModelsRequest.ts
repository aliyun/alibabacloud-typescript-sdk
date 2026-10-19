// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentifyModelsRequest extends $dara.Model {
  /**
   * @remarks
   * A reserved feature type parameter. This parameter is not used to filter results in the current query. You do not need to specify this parameter for column encryption calls.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * Specifies whether to return only detection models supported in audit scenarios. If this parameter is set to true, only audit-supported models such as phone number, ID card, and bank card models are returned. You do not need to specify this parameter for column encryption scenarios.
   */
  filterAuditModel?: boolean;
  /**
   * @remarks
   * The language of the response description. Valid values:
   * - zh: Chinese.
   * - en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the data classification template. You can obtain this value from Items[].Id in the response of the ListTemplates operation. The template must be consistent with the selected sensitivity level and detection models.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      filterAuditModel: 'FilterAuditModel',
      lang: 'Lang',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
      filterAuditModel: 'boolean',
      lang: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

