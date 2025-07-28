// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos extends $dara.Model {
  /**
   * @example
   * propKey
   */
  propertyName?: string;
  /**
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
  customPropertyInfos?: CreateSystemPropertyTemplateRequestSystemPropertyInfoCustomPropertyInfos[];
  /**
   * @example
   * null
   */
  roBootloader?: string;
  /**
   * @example
   * null
   */
  roBuildDisplayId?: string;
  /**
   * @example
   * null
   */
  roBuildFingerprint?: string;
  /**
   * @example
   * null
   */
  roBuildHost?: string;
  /**
   * @example
   * null
   */
  roBuildId?: string;
  /**
   * @example
   * null
   */
  roBuildProduct?: string;
  /**
   * @example
   * null
   */
  roBuildTags?: string;
  /**
   * @example
   * null
   */
  roBuildType?: string;
  /**
   * @example
   * null
   */
  roBuildUser?: string;
  /**
   * @example
   * null
   */
  roProductBoard?: string;
  /**
   * @example
   * null
   */
  roProductBrand?: string;
  /**
   * @example
   * null
   */
  roProductDevice?: string;
  /**
   * @example
   * null
   */
  roProductManufacturer?: string;
  /**
   * @example
   * null
   */
  roProductModel?: string;
  /**
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
   * @example
   * true
   */
  enableAuto?: boolean;
  /**
   * @example
   * https://filepath****.com
   */
  filePath?: string;
  systemPropertyInfo?: CreateSystemPropertyTemplateRequestSystemPropertyInfo;
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

