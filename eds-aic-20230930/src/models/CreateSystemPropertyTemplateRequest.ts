// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos extends $dara.Model {
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

export class CreateSystemPropertyTemplateRequestSystemPropertyInfo extends $dara.Model {
  /**
   * @remarks
   * A list of custom properties.
   */
  customPropertyInfos?: CreateSystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos[];
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBootloader?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildDisplayId?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildFingerprint?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildHost?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildId?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildProduct?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildTags?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildType?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roBuildUser?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roProductBoard?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roProductBrand?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roProductDevice?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roProductManufacturer?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roProductModel?: string;
  /**
   * @remarks
   * > This parameter is not yet available for use.
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
      customPropertyInfos: { 'type': 'array', 'itemType': CreateSystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos },
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

export class CreateSystemPropertyTemplateRequest extends $dara.Model {
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
   * The URL of the property template file. The API parses the file synchronously. An error is returned if the file format is invalid.
   * 
   * > The file must be in the following format: `{ "properties":{"key1":"value1"}}`.
   * 
   * @example
   * https://filepath****.com
   */
  filePath?: string;
  /**
   * @remarks
   * The information about the system property template.
   */
  systemPropertyInfo?: CreateSystemPropertyTemplateRequestSystemPropertyInfo;
  /**
   * @remarks
   * The name of the template. The name must meet the following requirements:
   * 
   * - Be 2 to 32 characters in length.
   * 
   * - Start with an uppercase or lowercase letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * - Contain letters, digits, colons (:), underscores (_), and hyphens (-). Periods (.) are not supported.
   * 
   * @example
   * Template1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAuto: 'EnableAuto',
      filePath: 'FilePath',
      systemPropertyInfo: 'SystemPropertyInfo',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAuto: 'boolean',
      filePath: 'string',
      systemPropertyInfo: CreateSystemPropertyTemplateRequestSystemPropertyInfo,
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

