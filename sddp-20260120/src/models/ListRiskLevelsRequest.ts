// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRiskLevelsRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved feature type parameter. This parameter is not used to filter results in the current query. You do not need to specify this parameter for column encryption calls.
   * 
   * @example
   * 1
   */
  featureType?: number;
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
   * The ID of the data classification template. You can obtain the ID from the Items[].Id parameter in the response of the ListTemplates operation. The template must be consistent with the selected sensitivity level and detection model.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
      lang: 'Lang',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'number',
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

