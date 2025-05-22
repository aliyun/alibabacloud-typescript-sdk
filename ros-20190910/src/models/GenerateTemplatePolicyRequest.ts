// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTemplatePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of operation N for which you want to generate the policy information.
   * 
   * Valid values:
   * 
   * *   CreateStack: creates a stack by calling the CreateStack operation.
   * *   UpdateStack: updates a stack by calling the UpdateStack operation.
   * *   DeleteStack: deletes a stack by calling the DeleteStack operation.
   * *   DetectStackDrift: detects drifts on a stack by calling the DelectStackDrift operation.
   * *   ListStackOperationRisks: lists the risks of a deletion operation on a stack by setting the OperationType parameter to DeleteStack in the ListStackOperationRisks operation.
   * *   GetTemplateEstimateCost: queries the estimated prices of resources that you want to use in the template by calling the GetTemplateEstimateCost operation.
   * *   GetTemplateParameterConstraints: queries the values of parameters in the template by calling the GetTemplateParameterConstraints operation.
   * *   ImportResourcesToStack: imports resources to a stack by setting the ChangeSetType parameter to IMPORT in the CreateChangeSet operation.
   * *   SignalResource: sends a signal to a stack.
   * 
   * >  The default value is the combination of all valid values.
   */
  operationTypes?: string[];
  /**
   * @remarks
   * The structure that contains the template body. The template body must be 1 to 524,288 bytes in length.
   * 
   * If the length of the template body exceeds the upper limit, we recommend that you add parameters to the HTTP POST request body to prevent request failures caused by excessively long URLs.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * {"ROSTemplateFormatVersion":"2015-09-01"}
   */
  templateBody?: string;
  /**
   * @remarks
   * The ID of the template. This parameter applies to shared templates and private templates.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * @example
   * 5ecd1e10-b0e9-4389-a565-e4c15efc****
   */
  templateId?: string;
  /**
   * @remarks
   * The URL of the file that contains the template body. The URL must point to a template that is located on an HTTP or HTTPS web server or in an Object Storage Service (OSS) bucket, such as oss://ros/template/demo or oss://ros/template/demo?RegionId=cn-hangzhou. The template body can be up to 524,288 bytes in length.
   * 
   * >  If you do not specify the region ID of the OSS bucket, the value of the RegionId parameter is used.
   * 
   * You can specify only one of the following parameters: TemplateBody, TemplateURL, and TemplateId.
   * 
   * The URL can be up to 1,024 bytes in length.
   * 
   * @example
   * oss://ros/template/demo
   */
  templateURL?: string;
  /**
   * @remarks
   * The version of the template. This parameter takes effect only when the TemplateId parameter is specified.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      operationTypes: 'OperationTypes',
      templateBody: 'TemplateBody',
      templateId: 'TemplateId',
      templateURL: 'TemplateURL',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      templateBody: 'string',
      templateId: 'string',
      templateURL: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operationTypes)) {
      $dara.Model.validateArray(this.operationTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

