// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the parameters.
   * 
   * @example
   * {\\"endDate\\": \\"2022-04-13T03:31:20Z\\", \\"Status\\": \\"Stopped\\"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The content of the template in the JSON or YAML format. This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * {
   * 	"Description": "Example template, describe instances in some status",
   * 	"FormatVersion": "OOS-2019-06-01",
   * 	"Parameters": {},
   * 	"Tasks": [{
   * 		"Name": "describeInstances",
   * 		"Action": "ACS::ExecuteAPI",
   * 		"Description": "desc-en",
   * 		"Properties": {
   * 			"Service": "ECS",
   * 			"API": "DescribeInstances",
   * 			"Parameters": {
   * 				"Status": "Running"
   * 			}
   * 		}
   * 	}]
   * }
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The URL that is used to store the content of the Operation Orchestration Service (OOS) template in the Alibaba Cloud Object Storage Service (OSS). Only the public-read URL is supported. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
   * 
   * @example
   * http://oos-template.cn-hangzhou.oss.aliyun-inc.com/oos-test-template.json
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. The default value is the latest version of the template.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      regionId: 'RegionId',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: 'string',
      regionId: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

