// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentifyModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved feature type parameter. This parameter is not used to filter results in the current query and does not need to be specified for column encryption calls.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * Specifies whether to restrict the results to recognition models supported in audit scenarios. If you set this parameter to true, models supported for auditing, such as mobile phone numbers, ID cards, and bank cards, are filtered. This parameter is optional for column encryption scenarios.
   */
  filterAuditModel?: boolean;
  /**
   * @remarks
   * The language of the response description. Valid values: zh: Chinese. en: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the data classification template. You can obtain the ID from Items[].Id in the response of the ListTemplates operation. The ID must be consistent with the selected sensitivity level and recognition model.
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

