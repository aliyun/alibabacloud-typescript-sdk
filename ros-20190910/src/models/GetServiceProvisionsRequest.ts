// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceProvisionsRequestParameters } from "./GetServiceProvisionsRequestParameters";
import { GetServiceProvisionsRequestServices } from "./GetServiceProvisionsRequestServices";


export class GetServiceProvisionsRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters.
   */
  parameters?: GetServiceProvisionsRequestParameters[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: GetServiceProvisionsRequestServices[];
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and Services.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body must be 1 to 524,288 bytes in length. If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * You must and can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, and Services.
   * 
   * @example
   * oss://ros-template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. If you do not specify this parameter, the latest version is used.
   * 
   * This parameter takes effect only when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      regionId: 'RegionId',
      services: 'Services',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': GetServiceProvisionsRequestParameters },
      regionId: 'string',
      services: { 'type': 'array', 'itemType': GetServiceProvisionsRequestServices },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

