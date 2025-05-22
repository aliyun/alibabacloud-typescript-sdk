// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateSummaryRequestParameters } from "./GetTemplateSummaryRequestParameters";


export class GetTemplateSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * 1f6521a4-05af-4975-afe9-bc4b45ad****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.\\
   * The token can be up to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (_).\\
   * For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/134212.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters that are defined in the template.
   */
  parameters?: GetTemplateSummaryRequestParameters[];
  /**
   * @remarks
   * The region ID of the stack or stack group that uses the template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter takes effect only when one of the following parameters are specified: StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the stack group.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * my-stack-group
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The stack ID.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length.\\
   * If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.\\
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The template ID. This parameter applies to shared and private templates.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * > If you do not specify the region ID of the OSS bucket, the value of RegionId is used.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, TemplateId, StackId, ChangeSetId, and StackGroupName.
   * 
   * The URL can be up to 1,024 bytes in length.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect when TemplateId is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackId: 'StackId',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': GetTemplateSummaryRequestParameters },
      regionId: 'string',
      stackGroupName: 'string',
      stackId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

