// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceApiRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * Test API description
   */
  apiDescription?: string;
  /**
   * @remarks
   * The type of the API. Valid values: 0 (wizard API), 1 (script API), and 2 (registration API).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  apiMode?: number;
  /**
   * @remarks
   * The name of the API. The name can contain Chinese characters, letters, digits, and underscores (_), and must start with a letter or a Chinese character. The name must be 4 to 50 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Test API name
   */
  apiName?: string;
  /**
   * @remarks
   * The path of the API. The path can contain letters, digits, underscores (_), and hyphens (-), and must start with a forward slash (/). The path cannot exceed 200 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/1
   */
  apiPath?: string;
  /**
   * @remarks
   * The ID of the destination folder in which the API is created. The ID of the root folder under a business process is 0. The ID of a user-created folder is greater than 0.
   * 
   * @example
   * 0
   */
  folderId?: number;
  /**
   * @remarks
   * The ID of the business process.
   * 
   * This parameter is required.
   * 
   * @example
   * Business process ID
   */
  groupId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The protocol of the API. Valid values: 0 (HTTP) and 1 (HTTPS). Multiple values are supported. Separate multiple values with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 0,1
   */
  protocols?: string;
  /**
   * @remarks
   * The details of the registration API. For more information, see the JSON string of the registrationDetails field in the [GetDataServiceApi](https://help.aliyun.com/document_detail/174013.html) operation.
   * 
   * @example
   * {"failedResultSample":"fail","registrationErrorCodes":[{"errorCode":"e1","errorMessage":"msg1","errorSolution":"sol1"},{"errorCode":"e2","errorMessage":"msg2","errorSolution":"sol2"}],"registrationRequestParameters":[{"columnName":"","defaultValue":"","exampleValue":"","isRequiredParameter":true,"parameterDataType":0,"parameterDescription":"","parameterName":"id","parameterOperator":0,"parameterPosition":1},{"columnName":"","defaultValue":"xx","exampleValue":"","isRequiredParameter":true,"parameterDataType":0,"parameterDescription":"","parameterName":"cc","parameterOperator":2,"parameterPosition":2}],"serviceContentType":1,"serviceHost":"http://www.baidu.com","servicePath":"/[uid]","serviceRequestBodyDescription":"body","successfulResultSample":"success"}
   */
  registrationDetails?: string;
  /**
   * @remarks
   * The request content type. Valid values:
   * 
   * - 0: XML
   * 
   * - 1: JSON
   * 
   * - 2: form
   * 
   * @example
   * 0
   */
  requestContentType?: number;
  /**
   * @remarks
   * The request method of the API. Valid values: 0 (GET), 1 (POST), 2 (PUT), and 3 (DELETE). Wizard and script APIs support GET and POST. Registration APIs support GET, POST, PUT, and DELETE.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  requestMethod?: number;
  /**
   * @remarks
   * The ID of the exclusive resource group.
   * 
   * @example
   * 3242432423
   */
  resourceGroupId?: number;
  /**
   * @remarks
   * The response data type of the API. Valid values: 0 (JSON) and 1 (XML). Wizard and script APIs support JSON. Registration APIs support JSON and XML.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  responseContentType?: number;
  /**
   * @remarks
   * The details of the script API. For more information, see the JSON string of the scriptDetails field in the [GetDataServiceApi](https://help.aliyun.com/document_detail/174013.html) operation.
   * 
   * @example
   * {"isPagedResponse":false,"script":"select id as id1, name as name1 from person where id=${inputid}","scriptConnection":{"connectionId":122786,"tableName":"person"},"scriptRequestParameters":[{"defaultValue":"","exampleValue":"","isRequiredParameter":true,"parameterDataType":0,"parameterDescription":"","parameterName":"inputid","parameterOperator":0,"parameterPosition":1}],"scriptResponseParameters":[{"exampleValue":"","parameterDataType":0,"parameterDescription":"","parameterName":"id1"},{"exampleValue":"","parameterDataType":0,"parameterDescription":"","parameterName":"name1"}]}
   */
  scriptDetails?: string;
  /**
   * @remarks
   * - 0: basic mode.
   * 
   * - 1: MyBatis mode.
   * 
   * @example
   * 0
   */
  sqlMode?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10001
   */
  tenantId?: number;
  /**
   * @remarks
   * The timeout period, in milliseconds (ms). Valid values: (0, 30000].
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  timeout?: number;
  /**
   * @remarks
   * The visibility. Valid values: 0 (workspace) and 1 (private).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  visibleRange?: number;
  /**
   * @remarks
   * The details of the wizard API. For more information, see the JSON string of the wizardDetails field in the [GetDataServiceApi](https://help.aliyun.com/document_detail/174013.html) operation.
   * 
   * @example
   * {"isPagedResponse":true,"wizardConnection":{"connectionId":122786,"tableName":"person"},"wizardRequestParameters":[{"columnName":"id","defaultValue":"","exampleValue":"1","isRequiredParameter":true,"parameterDataType":2,"parameterDescription":"","parameterName":"id","parameterOperator":0,"parameterPosition":0}],"wizardResponseParameters":[{"columnName":"id","exampleValue":"11","parameterDataType":2,"parameterDescription":"","parameterName":"id"}]}
   */
  wizardDetails?: string;
  static names(): { [key: string]: string } {
    return {
      apiDescription: 'ApiDescription',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      folderId: 'FolderId',
      groupId: 'GroupId',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestContentType: 'RequestContentType',
      requestMethod: 'RequestMethod',
      resourceGroupId: 'ResourceGroupId',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      sqlMode: 'SqlMode',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDescription: 'string',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      folderId: 'number',
      groupId: 'string',
      projectId: 'number',
      protocols: 'string',
      registrationDetails: 'string',
      requestContentType: 'number',
      requestMethod: 'number',
      resourceGroupId: 'number',
      responseContentType: 'number',
      scriptDetails: 'string',
      sqlMode: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

