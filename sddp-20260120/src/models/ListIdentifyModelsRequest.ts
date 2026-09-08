// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdentifyModelsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  featureType?: number;
  filterAuditModel?: boolean;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
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

