// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationSsoFormParamsRequestApplicationTemplateParams extends $dara.Model {
  /**
   * @remarks
   * The name of a parameter for creating the application template.
   * 
   * @example
   * aliyunUid
   */
  templateParamName?: string;
  /**
   * @remarks
   * The value of the parameter for creating the application template.
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
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_11111
   */
  applicationId?: string;
  /**
   * @remarks
   * The parameters for creating the application template.
   * 
   * This parameter is required.
   */
  applicationTemplateParams?: UpdateApplicationSsoFormParamsRequestApplicationTemplateParams[];
  /**
   * @remarks
   * The ID of the instance.
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

