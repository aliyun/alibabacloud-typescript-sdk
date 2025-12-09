// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationSsoFormParamsRequestApplicationTemplateParams extends $dara.Model {
  /**
   * @remarks
   * 应用模板创建参数具体名称
   * 
   * @example
   * aliyunUid
   */
  templateParamName?: string;
  /**
   * @remarks
   * 应用模板创建参数真实的取值
   * 
   * @example
   * 123456789
   */
  templateParamValue?: string;
  static names(): { [key: string]: string } {
    return {
      templateParamName: 'TemplateParamName',
      templateParamValue: 'TemplateParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateParamName: 'string',
      templateParamValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationSsoFormParamsRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_11111
   */
  applicationId?: string;
  /**
   * @remarks
   * 应用模板创建参数，应用创建来源为模板时才可以指定
   * 
   * This parameter is required.
   */
  applicationTemplateParams?: UpdateApplicationSsoFormParamsRequestApplicationTemplateParams[];
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * eiam-111ccc1111
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationTemplateParams: 'ApplicationTemplateParams',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationTemplateParams: { 'type': 'array', 'itemType': UpdateApplicationSsoFormParamsRequestApplicationTemplateParams },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationTemplateParams)) {
      $dara.Model.validateArray(this.applicationTemplateParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

