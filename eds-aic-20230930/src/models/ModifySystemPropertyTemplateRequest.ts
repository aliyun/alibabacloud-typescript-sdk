// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos extends $dara.Model {
  /**
   * @remarks
   * The key of the custom property.
   * 
   * @example
   * propKey
   */
  propertyName?: string;
  /**
   * @remarks
   * The value of the custom property.
   * 
   * @example
   * propValue
   */
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      propertyName: 'PropertyName',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyName: 'string',
      propertyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemPropertyTemplateRequestSystemPropertyInfo extends $dara.Model {
  /**
   * @remarks
   * The information about custom properties.
   */
  customPropertyInfos?: ModifySystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos[];
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBootloader?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildDisplayId?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildFingerprint?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildHost?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildId?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildProduct?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildTags?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roBuildUser?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roProductBoard?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roProductBrand?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roProductDevice?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roProductManufacturer?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roProductModel?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  rwRoSerialNo?: string;
  static names(): { [key: string]: string } {
    return {
      customPropertyInfos: 'CustomPropertyInfos',
      roBootloader: 'RoBootloader',
      roBuildDisplayId: 'RoBuildDisplayId',
      roBuildFingerprint: 'RoBuildFingerprint',
      roBuildHost: 'RoBuildHost',
      roBuildId: 'RoBuildId',
      roBuildProduct: 'RoBuildProduct',
      roBuildTags: 'RoBuildTags',
      roBuildType: 'RoBuildType',
      roBuildUser: 'RoBuildUser',
      roProductBoard: 'RoProductBoard',
      roProductBrand: 'RoProductBrand',
      roProductDevice: 'RoProductDevice',
      roProductManufacturer: 'RoProductManufacturer',
      roProductModel: 'RoProductModel',
      rwRoSerialNo: 'RwRoSerialNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPropertyInfos: { 'type': 'array', 'itemType': ModifySystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos },
      roBootloader: 'string',
      roBuildDisplayId: 'string',
      roBuildFingerprint: 'string',
      roBuildHost: 'string',
      roBuildId: 'string',
      roBuildProduct: 'string',
      roBuildTags: 'string',
      roBuildType: 'string',
      roBuildUser: 'string',
      roProductBoard: 'string',
      roProductBrand: 'string',
      roProductDevice: 'string',
      roProductManufacturer: 'string',
      roProductModel: 'string',
      rwRoSerialNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customPropertyInfos)) {
      $dara.Model.validateArray(this.customPropertyInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySystemPropertyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically generate preset system properties.
   * 
   * @example
   * true
   */
  enableAuto?: boolean;
  /**
   * @remarks
   * The URL of the property template file. The system synchronously parses the file. If the file format is invalid, a parsing error is returned.
   * 
   * > File template format: `{ "properties":{"key1":"value1", "key2":"value2"}}`.
   * 
   * @example
   * https://filepath****.com
   */
  filePath?: string;
  /**
   * @remarks
   * The information about the system property template.
   */
  systemPropertyInfo?: ModifySystemPropertyTemplateRequestSystemPropertyInfo;
  /**
   * @remarks
   * The ID of the property template.
   * 
   * @example
   * ap-angyvganxlf****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAuto: 'EnableAuto',
      filePath: 'FilePath',
      systemPropertyInfo: 'SystemPropertyInfo',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAuto: 'boolean',
      filePath: 'string',
      systemPropertyInfo: ModifySystemPropertyTemplateRequestSystemPropertyInfo,
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.systemPropertyInfo && typeof (this.systemPropertyInfo as any).validate === 'function') {
      (this.systemPropertyInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

