// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfoCustomPropertyInfos extends $dara.Model {
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

export class DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfo extends $dara.Model {
  customPropertyInfos?: DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfoCustomPropertyInfos[];
  /**
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
   * @example
   * true
   */
  enableAuto?: boolean;
  /**
   * @example
   * https://filepath****.com
   */
  filePath?: string;
  /**
   * @example
   * init
   */
  status?: string;
  systemPropertyInfo?: DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModelSystemPropertyInfo;
  /**
   * @example
   * ap-0caoenwutkkx****
   */
  templateId?: string;
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
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  systemPropertyTemplateModel?: DescribeSystemPropertyTemplatesResponseBodySystemPropertyTemplateModel[];
  /**
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

