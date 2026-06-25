// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfoCustomPropertyInfos extends $dara.Model {
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * propKey
   */
  propertyName?: string;
  /**
   * @remarks
   * The property value.
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

export class DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfo extends $dara.Model {
  /**
   * @remarks
   * The custom property information.
   */
  customPropertyInfos?: DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfoCustomPropertyInfos[];
  /**
   * @remarks
   * > This parameter is not yet available for use.
   * 
   * @example
   * null
   */
  roProductDevice?: string;
  static names(): { [key: string]: string } {
    return {
      customPropertyInfos: 'CustomPropertyInfos',
      roProductDevice: 'RoProductDevice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPropertyInfos: { 'type': 'array', 'itemType': DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfoCustomPropertyInfos },
      roProductDevice: 'string',
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

export class DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModel extends $dara.Model {
  /**
   * @remarks
   * Indicates whether preset system properties can be automatically generated.
   * 
   * @example
   * true
   */
  enableAuto?: boolean;
  /**
   * @remarks
   * The URL path of the property template file.
   * 
   * @example
   * https://filepath****.com
   */
  filePath?: string;
  /**
   * @remarks
   * The template status.
   * 
   * @example
   * init
   */
  status?: string;
  /**
   * @remarks
   * The system property template information.
   */
  systemPropertyInfo?: DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfo;
  /**
   * @remarks
   * The property template ID.
   * 
   * @example
   * ap-0caoenwutkkx****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAuto: 'EnableAuto',
      filePath: 'FilePath',
      status: 'Status',
      systemPropertyInfo: 'SystemPropertyInfo',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAuto: 'boolean',
      filePath: 'string',
      status: 'string',
      systemPropertyInfo: DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfo,
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

export class DescribeSystemPropertyTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to start the next query. An empty value indicates that all results have been returned.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of property template objects.
   */
  systemPropertyTemplateModel?: DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModel[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      systemPropertyTemplateModel: 'SystemPropertyTemplateModel',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      systemPropertyTemplateModel: { 'type': 'array', 'itemType': DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModel },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.systemPropertyTemplateModel)) {
      $dara.Model.validateArray(this.systemPropertyTemplateModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

