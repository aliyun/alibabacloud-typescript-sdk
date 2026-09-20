// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * fail to call
   */
  errorMessage?: string;
  /**
   * @remarks
   * The fault Solutions.
   * 
   * @example
   * retry
   */
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * default1
   */
  defaultValue?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * example1
   */
  exampleValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  isRequiredParameter?: boolean;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description1
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * name1
   */
  parameterName?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * @example
   * 0
   */
  parameterOperator?: number;
  /**
   * @remarks
   * The parameter position. Valid values:
   * 
   * @example
   * 0
   */
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails extends $dara.Model {
  /**
   * @remarks
   * The sample of an error response.
   * 
   * @example
   * {"success": false}
   */
  failedResultSample?: string;
  /**
   * @remarks
   * The list of error codes for the registration API.
   */
  registrationErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes[];
  /**
   * @remarks
   * The list of request parameters for the registration API.
   */
  registrationRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters[];
  /**
   * @remarks
   * The return data type of the API. Valid values:
   * - 0: JSON.
   * - 1: XML.
   * 
   * Wizard and script APIs support JSON. Registration APIs support JSON and XML.
   * 
   * @example
   * 0
   */
  serviceContentType?: number;
  /**
   * @remarks
   * The backend service address.
   * 
   * @example
   * http://www.abc.com
   */
  serviceHost?: string;
  /**
   * @remarks
   * The backend service path.
   * 
   * @example
   * /index
   */
  servicePath?: string;
  /**
   * @remarks
   * The description of the backend request body content.
   * 
   * @example
   * {"abc":1}
   */
  serviceRequestBodyDescription?: string;
  /**
   * @remarks
   * The sample of a successful response.
   * 
   * @example
   * {"success": true}
   */
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      registrationErrorCodes: 'RegistrationErrorCodes',
      registrationRequestParameters: 'RegistrationRequestParameters',
      serviceContentType: 'ServiceContentType',
      serviceHost: 'ServiceHost',
      servicePath: 'ServicePath',
      serviceRequestBodyDescription: 'ServiceRequestBodyDescription',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      registrationErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationErrorCodes },
      registrationRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisRegistrationDetailsRegistrationRequestParameters },
      serviceContentType: 'number',
      serviceHost: 'string',
      servicePath: 'string',
      serviceRequestBodyDescription: 'string',
      successfulResultSample: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.registrationErrorCodes)) {
      $dara.Model.validateArray(this.registrationErrorCodes);
    }
    if(Array.isArray(this.registrationRequestParameters)) {
      $dara.Model.validateArray(this.registrationRequestParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 123
   */
  connectionId?: number;
  /**
   * @remarks
   * The table name of the data source.
   * 
   * @example
   * t
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * fail to call
   */
  errorMessage?: string;
  /**
   * @remarks
   * The fault Solutions.
   * 
   * @example
   * retry
   */
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * default1
   */
  defaultValue?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * example1
   */
  exampleValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  isRequiredParameter?: boolean;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description1
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * param1
   */
  parameterName?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * @example
   * 0
   */
  parameterOperator?: number;
  /**
   * @remarks
   * The parameter position. Valid values:
   * 
   * @example
   * 0
   */
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters extends $dara.Model {
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * example2
   */
  exampleValue?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description2
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * param2
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisScriptDetails extends $dara.Model {
  /**
   * @remarks
   * The sample of an error response.
   * 
   * @example
   * {"success": false}
   */
  failedResultSample?: string;
  /**
   * @remarks
   * Indicates whether the response is paginated.
   * 
   * @example
   * true
   */
  isPagedResponse?: boolean;
  /**
   * @remarks
   * The SQL script.
   * 
   * @example
   * select a from t
   */
  script?: string;
  /**
   * @remarks
   * The data source information for the script API.
   */
  scriptConnection?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection;
  /**
   * @remarks
   * The list of error codes for the script API.
   */
  scriptErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes[];
  /**
   * @remarks
   * The list of request parameters for the script API.
   */
  scriptRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters[];
  /**
   * @remarks
   * The list of response parameters for the script API.
   */
  scriptResponseParameters?: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters[];
  /**
   * @remarks
   * The sample of a successful response.
   * 
   * @example
   * {"success": true}
   */
  successfulResultSample?: string;
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      script: 'Script',
      scriptConnection: 'ScriptConnection',
      scriptErrorCodes: 'ScriptErrorCodes',
      scriptRequestParameters: 'ScriptRequestParameters',
      scriptResponseParameters: 'ScriptResponseParameters',
      successfulResultSample: 'SuccessfulResultSample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      script: 'string',
      scriptConnection: ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptConnection,
      scriptErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptErrorCodes },
      scriptRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptRequestParameters },
      scriptResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisScriptDetailsScriptResponseParameters },
      successfulResultSample: 'string',
    };
  }

  validate() {
    if(this.scriptConnection && typeof (this.scriptConnection as any).validate === 'function') {
      (this.scriptConnection as any).validate();
    }
    if(Array.isArray(this.scriptErrorCodes)) {
      $dara.Model.validateArray(this.scriptErrorCodes);
    }
    if(Array.isArray(this.scriptRequestParameters)) {
      $dara.Model.validateArray(this.scriptRequestParameters);
    }
    if(Array.isArray(this.scriptResponseParameters)) {
      $dara.Model.validateArray(this.scriptResponseParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 12354
   */
  connectionId?: number;
  /**
   * @remarks
   * The table name of the data source.
   * 
   * @example
   * t
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1001
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * fail to call
   */
  errorMessage?: string;
  /**
   * @remarks
   * The fault Solutions.
   * 
   * @example
   * retry
   */
  errorSolution?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      errorSolution: 'ErrorSolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      errorSolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * default1
   */
  defaultValue?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * example1
   */
  exampleValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * true
   */
  isRequiredParameter?: boolean;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description1
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param1
   */
  parameterName?: string;
  /**
   * @remarks
   * The operator. Valid values: 0 (Equal), 1 (Like), 2 (Const), and 3 (In). Wizard mode APIs support Equal, Like, and In. Script mode APIs support Equal. Registered APIs support Equal and Const.
   * 
   * @example
   * 0
   */
  parameterOperator?: number;
  /**
   * @remarks
   * The position of the parameter. Valid values: 0 (Path), 1 (Query), 2 (Head), and 3 (Body). Wizard and script APIs support only Query. For registered APIs, the GET and DELETE methods support Query and Head, and the PUT and POST methods support Query, Head, and Body.
   * 
   * @example
   * 0
   */
  parameterPosition?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      exampleValue: 'ExampleValue',
      isRequiredParameter: 'IsRequiredParameter',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterOperator: 'ParameterOperator',
      parameterPosition: 'ParameterPosition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      exampleValue: 'string',
      isRequiredParameter: 'boolean',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterOperator: 'number',
      parameterPosition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters extends $dara.Model {
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * example2
   */
  exampleValue?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * @example
   * 0
   */
  parameterDataType?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description2
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * param2
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      exampleValue: 'ExampleValue',
      parameterDataType: 'ParameterDataType',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleValue: 'string',
      parameterDataType: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApisWizardDetails extends $dara.Model {
  /**
   * @remarks
   * The sample of an error response.
   * 
   * @example
   * {"success": false}
   */
  failedResultSample?: string;
  /**
   * @remarks
   * Indicates whether the response is paginated.
   * 
   * @example
   * true
   */
  isPagedResponse?: boolean;
  /**
   * @remarks
   * The sample of a successful response.
   * 
   * @example
   * {"success": true}
   */
  successfulResultSample?: string;
  /**
   * @remarks
   * The data source information of the wizard API.
   */
  wizardConnection?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection;
  /**
   * @remarks
   * The list of error codes for the wizard API.
   */
  wizardErrorCodes?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes[];
  /**
   * @remarks
   * The list of request parameters for the wizard API.
   */
  wizardRequestParameters?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters[];
  /**
   * @remarks
   * The list of response parameters for the wizard API.
   */
  wizardResponseParameters?: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters[];
  static names(): { [key: string]: string } {
    return {
      failedResultSample: 'FailedResultSample',
      isPagedResponse: 'IsPagedResponse',
      successfulResultSample: 'SuccessfulResultSample',
      wizardConnection: 'WizardConnection',
      wizardErrorCodes: 'WizardErrorCodes',
      wizardRequestParameters: 'WizardRequestParameters',
      wizardResponseParameters: 'WizardResponseParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResultSample: 'string',
      isPagedResponse: 'boolean',
      successfulResultSample: 'string',
      wizardConnection: ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardConnection,
      wizardErrorCodes: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardErrorCodes },
      wizardRequestParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardRequestParameters },
      wizardResponseParameters: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApisWizardDetailsWizardResponseParameters },
    };
  }

  validate() {
    if(this.wizardConnection && typeof (this.wizardConnection as any).validate === 'function') {
      (this.wizardConnection as any).validate();
    }
    if(Array.isArray(this.wizardErrorCodes)) {
      $dara.Model.validateArray(this.wizardErrorCodes);
    }
    if(Array.isArray(this.wizardRequestParameters)) {
      $dara.Model.validateArray(this.wizardRequestParameters);
    }
    if(Array.isArray(this.wizardResponseParameters)) {
      $dara.Model.validateArray(this.wizardResponseParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyDataApis extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 10002
   */
  apiId?: number;
  /**
   * @remarks
   * The type of the API. Valid values:
   * - 0: wizard API.
   * - 1: script API.
   * - 2: registration API.
   * 
   * @example
   * 0
   */
  apiMode?: number;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * My API name
   */
  apiName?: string;
  /**
   * @remarks
   * The path of the API.
   * 
   * @example
   * /test/1
   */
  apiPath?: string;
  /**
   * @remarks
   * The time when the API was created.
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  createdTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud ID of the creator.
   * 
   * @example
   * 1234567
   */
  creatorId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test API description
   */
  description?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * ab123
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the API was last modified.
   * 
   * @example
   * 2020-06-23T00:21:01+0800
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud ID of the user who last edited the API.
   * 
   * @example
   * 2345678
   */
  operatorId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The API protocol. Valid values:
   * - 0: HTTP.
   * - 1: HTTPS.
   */
  protocols?: number[];
  /**
   * @remarks
   * The details of the registration API. This is returned only for registration APIs.
   */
  registrationDetails?: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails;
  /**
   * @remarks
   * The request method of the API. Valid values:
   * - 0: GET.
   * - 1: POST.
   * - 2: PUT.
   * - 3: DELETE.
   * 
   * Wizard and script APIs support GET and POST. Registration APIs support GET, POST, PUT, and DELETE.
   * 
   * @example
   * 0
   */
  requestMethod?: number;
  /**
   * @example
   * 0
   */
  responseContentType?: number;
  /**
   * @remarks
   * The details of the script API. This is returned only for script APIs.
   */
  scriptDetails?: ListDataServicePublishedApisResponseBodyDataApisScriptDetails;
  /**
   * @remarks
   * The SQL mode. Valid values: 0 (basic SQL) and 1 (advanced SQL).
   * 
   * @example
   * 0
   */
  sqlMode?: number;
  /**
   * @remarks
   * The status of the API. Valid values:
   * - 0: unpublished.
   * - 1: published.
   * 
   * @example
   * 1
   */
  status?: number;
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
   * The timeout period, in milliseconds (ms).
   * 
   * @example
   * 10000
   */
  timeout?: number;
  /**
   * @remarks
   * The visibility range. Valid values:
   * - 0: workspace.
   * - 1: private.
   * 
   * @example
   * 0
   */
  visibleRange?: number;
  /**
   * @remarks
   * The details of the wizard API. This is returned only for wizard APIs.
   */
  wizardDetails?: ListDataServicePublishedApisResponseBodyDataApisWizardDetails;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiMode: 'ApiMode',
      apiName: 'ApiName',
      apiPath: 'ApiPath',
      createdTime: 'CreatedTime',
      creatorId: 'CreatorId',
      description: 'Description',
      groupId: 'GroupId',
      modifiedTime: 'ModifiedTime',
      operatorId: 'OperatorId',
      projectId: 'ProjectId',
      protocols: 'Protocols',
      registrationDetails: 'RegistrationDetails',
      requestMethod: 'RequestMethod',
      responseContentType: 'ResponseContentType',
      scriptDetails: 'ScriptDetails',
      sqlMode: 'SqlMode',
      status: 'Status',
      tenantId: 'TenantId',
      timeout: 'Timeout',
      visibleRange: 'VisibleRange',
      wizardDetails: 'WizardDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiMode: 'number',
      apiName: 'string',
      apiPath: 'string',
      createdTime: 'string',
      creatorId: 'string',
      description: 'string',
      groupId: 'string',
      modifiedTime: 'string',
      operatorId: 'string',
      projectId: 'number',
      protocols: { 'type': 'array', 'itemType': 'number' },
      registrationDetails: ListDataServicePublishedApisResponseBodyDataApisRegistrationDetails,
      requestMethod: 'number',
      responseContentType: 'number',
      scriptDetails: ListDataServicePublishedApisResponseBodyDataApisScriptDetails,
      sqlMode: 'number',
      status: 'number',
      tenantId: 'number',
      timeout: 'number',
      visibleRange: 'number',
      wizardDetails: ListDataServicePublishedApisResponseBodyDataApisWizardDetails,
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.registrationDetails && typeof (this.registrationDetails as any).validate === 'function') {
      (this.registrationDetails as any).validate();
    }
    if(this.scriptDetails && typeof (this.scriptDetails as any).validate === 'function') {
      (this.scriptDetails as any).validate();
    }
    if(this.wizardDetails && typeof (this.wizardDetails as any).validate === 'function') {
      (this.wizardDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of published API information.
   */
  apis?: ListDataServicePublishedApisResponseBodyDataApis[];
  /**
   * @remarks
   * The page number, which is consistent with the PageNumber in the request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apis: 'Apis',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'array', 'itemType': ListDataServicePublishedApisResponseBodyDataApis },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apis)) {
      $dara.Model.validateArray(this.apis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServicePublishedApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The published API information returned.
   */
  data?: ListDataServicePublishedApisResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID, which is the unique identifier for the request.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataServicePublishedApisResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

