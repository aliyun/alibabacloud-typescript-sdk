// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "ros.aliyuncs.com",
      'ap-northeast-2': "ros.aliyuncs.com",
      'ap-southeast-1': "ros.aliyuncs.com",
      'ap-southeast-2': "ros.aliyuncs.com",
      'ap-southeast-3': "ros.aliyuncs.com",
      'ap-southeast-5': "ros.aliyuncs.com",
      'ap-southeast-6': "ros.aliyuncs.com",
      'ap-southeast-7': "ros.aliyuncs.com",
      'ap-southeast-8': "ros.aliyuncs.com",
      'cn-beijing': "ros.aliyuncs.com",
      'cn-chengdu': "ros.aliyuncs.com",
      'cn-fuzhou': "ros.aliyuncs.com",
      'cn-guangzhou': "ros.aliyuncs.com",
      'cn-hangzhou': "ros.aliyuncs.com",
      'cn-heyuan': "ros.aliyuncs.com",
      'cn-hongkong': "ros.aliyuncs.com",
      'cn-huhehaote': "ros.aliyuncs.com",
      'cn-nanjing': "ros.aliyuncs.com",
      'cn-qingdao': "ros.aliyuncs.com",
      'cn-shanghai': "ros.aliyuncs.com",
      'cn-shenzhen': "ros.aliyuncs.com",
      'cn-wuhan-lr': "ros.aliyuncs.com",
      'cn-wulanchabu': "ros.aliyuncs.com",
      'cn-zhangjiakou': "ros.aliyuncs.com",
      'cn-zhengzhou-jva': "ros.aliyuncs.com",
      'cn-zhongwei': "ros.aliyuncs.com",
      'eu-central-1': "ros.aliyuncs.com",
      'eu-west-1': "ros.aliyuncs.com",
      'eu-west-2': "ros.aliyuncs.com",
      'na-south-1': "ros.aliyuncs.com",
      'sa-east-1': "ros.aliyuncs.com",
      'us-east-1': "ros.aliyuncs.com",
      'us-southeast-1': "ros.aliyuncs.com",
      'us-west-1': "ros.aliyuncs.com",
      'ap-south-1': "ros.aliyuncs.com",
      'me-central-1': "ros.aliyuncs.com",
      'me-east-1': "ros.aliyuncs.com",
      'cn-hangzhou-finance': "ros.aliyuncs.com",
      'cn-heyuan-acdr-1': "ros.aliyuncs.com",
      'cn-shanghai-finance-1': "ros.aliyuncs.com",
      'cn-shenzhen-finance-1': "ros.aliyuncs.com",
      'cn-wulanchabu-gic-1': "ros.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ros", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Cancels operations on a stack.
   * 
   * @param request - CancelStackOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelStackOperationResponse
   */
  async cancelStackOperationWithOptions(request: $_model.CancelStackOperationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelStackOperationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowedStackOperations)) {
      query["AllowedStackOperations"] = request.allowedStackOperations;
    }

    if (!$dara.isNull(request.cancelType)) {
      query["CancelType"] = request.cancelType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelStackOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelStackOperationResponse>(await this.callApi(params, req, runtime), new $_model.CancelStackOperationResponse({}));
  }

  /**
   * Cancels operations on a stack.
   * 
   * @param request - CancelStackOperationRequest
   * @returns CancelStackOperationResponse
   */
  async cancelStackOperation(request: $_model.CancelStackOperationRequest): Promise<$_model.CancelStackOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelStackOperationWithOptions(request, runtime);
  }

  /**
   * Cancels an update operation on a stack. You can call this operation to cancel an update operation on a stack when the stack is being updated or created.
   * 
   * @param request - CancelUpdateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelUpdateStackResponse
   */
  async cancelUpdateStackWithOptions(request: $_model.CancelUpdateStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelUpdateStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cancelType)) {
      query["CancelType"] = request.cancelType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelUpdateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelUpdateStackResponse>(await this.callApi(params, req, runtime), new $_model.CancelUpdateStackResponse({}));
  }

  /**
   * Cancels an update operation on a stack. You can call this operation to cancel an update operation on a stack when the stack is being updated or created.
   * 
   * @param request - CancelUpdateStackRequest
   * @returns CancelUpdateStackResponse
   */
  async cancelUpdateStack(request: $_model.CancelUpdateStackRequest): Promise<$_model.CancelUpdateStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelUpdateStackWithOptions(request, runtime);
  }

  /**
   * Continues to create a stack after the stack fails to be created.
   * 
   * @remarks
   * This topic provides an example on how to continue to create a stack after the stack fails to be created. In this example, the stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is created in the China (Hangzhou) region.
   * 
   * @param request - ContinueCreateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueCreateStackResponse
   */
  async continueCreateStackWithOptions(request: $_model.ContinueCreateStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinueCreateStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.recreatingOptions)) {
      query["RecreatingOptions"] = request.recreatingOptions;
    }

    if (!$dara.isNull(request.recreatingResources)) {
      query["RecreatingResources"] = request.recreatingResources;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinueCreateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinueCreateStackResponse>(await this.callApi(params, req, runtime), new $_model.ContinueCreateStackResponse({}));
  }

  /**
   * Continues to create a stack after the stack fails to be created.
   * 
   * @remarks
   * This topic provides an example on how to continue to create a stack after the stack fails to be created. In this example, the stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` is created in the China (Hangzhou) region.
   * 
   * @param request - ContinueCreateStackRequest
   * @returns ContinueCreateStackResponse
   */
  async continueCreateStack(request: $_model.ContinueCreateStackRequest): Promise<$_model.ContinueCreateStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueCreateStackWithOptions(request, runtime);
  }

  /**
   * Create AI Task
   * 
   * @remarks
   * This API allows users to create an AI task based on the specified task type, covering a range of capabilities from natural language understanding to resource stack deployment. Users need to provide the task type and any required parameters, and the API will return a unique TaskId for tracking the status and results of the task.
   * 
   * @param request - CreateAITaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAITaskResponse
   */
  async createAITaskWithOptions(request: $_model.CreateAITaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAITaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.template)) {
      body["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAITask",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAITaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAITaskResponse({}));
  }

  /**
   * Create AI Task
   * 
   * @remarks
   * This API allows users to create an AI task based on the specified task type, covering a range of capabilities from natural language understanding to resource stack deployment. Users need to provide the task type and any required parameters, and the API will return a unique TaskId for tracking the status and results of the task.
   * 
   * @param request - CreateAITaskRequest
   * @returns CreateAITaskResponse
   */
  async createAITask(request: $_model.CreateAITaskRequest): Promise<$_model.CreateAITaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAITaskWithOptions(request, runtime);
  }

  /**
   * Creates a change set for a stack so you can preview changes before execution.
   * 
   * @remarks
   * ### Scenarios
   * #### Create a stack using a change set
   * To manage cloud resources and preview creation results before the stack is created, set `ChangeSetType` to CREATE. [Change sets](https://help.aliyun.com/document_detail/155649.html).
   * #### Update a stack using a change set
   * To preview the impact of an update before applying changes, set `ChangeSetType` to UPDATE. [Change sets](https://help.aliyun.com/document_detail/155649.html).
   * #### Create a stack from existing resources
   * To import existing cloud resources into a new stack, set `ChangeSetType` to IMPORT. [Overview](https://help.aliyun.com/document_detail/193454.html).
   * #### Import existing resources to a stack
   * To import existing resources into an existing stack, set `ChangeSetType` to IMPORT. [Overview](https://help.aliyun.com/document_detail/193454.html).
   * ### Limits
   * - Only stacks in specific states can be updated using change sets. [Update a stack using a change set](https://help.aliyun.com/document_detail/155873.html).
   * - A stack can have a maximum of 20 change sets at a time.
   * - A change set shows only the changes to a stack. It does not indicate whether the stack will be successfully updated.
   * - A change set does not check for issues such as exceeded account quotas, non-updatable resources, or insufficient permissions. These issues can cause the stack update to fail. If the update fails, ROS attempts to roll back resources to their previous state.
   * In this example, a change set named `MyChangeSet` is created in the China (Hangzhou) region (`cn-hangzhou`) to update the template of stack `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChangeSetResponse
   */
  async createChangeSetWithOptions(request: $_model.CreateChangeSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChangeSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeSetName)) {
      query["ChangeSetName"] = request.changeSetName;
    }

    if (!$dara.isNull(request.changeSetType)) {
      query["ChangeSetType"] = request.changeSetType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!$dara.isNull(request.notificationURLs)) {
      query["NotificationURLs"] = request.notificationURLs;
    }

    if (!$dara.isNull(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replacementOption)) {
      query["ReplacementOption"] = request.replacementOption;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourcesToImport)) {
      query["ResourcesToImport"] = request.resourcesToImport;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!$dara.isNull(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!$dara.isNull(request.stackPolicyDuringUpdateBody)) {
      query["StackPolicyDuringUpdateBody"] = request.stackPolicyDuringUpdateBody;
    }

    if (!$dara.isNull(request.stackPolicyDuringUpdateURL)) {
      query["StackPolicyDuringUpdateURL"] = request.stackPolicyDuringUpdateURL;
    }

    if (!$dara.isNull(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.taintResources)) {
      query["TaintResources"] = request.taintResources;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!$dara.isNull(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    if (!$dara.isNull(request.usePreviousParameters)) {
      query["UsePreviousParameters"] = request.usePreviousParameters;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChangeSetResponse>(await this.callApi(params, req, runtime), new $_model.CreateChangeSetResponse({}));
  }

  /**
   * Creates a change set for a stack so you can preview changes before execution.
   * 
   * @remarks
   * ### Scenarios
   * #### Create a stack using a change set
   * To manage cloud resources and preview creation results before the stack is created, set `ChangeSetType` to CREATE. [Change sets](https://help.aliyun.com/document_detail/155649.html).
   * #### Update a stack using a change set
   * To preview the impact of an update before applying changes, set `ChangeSetType` to UPDATE. [Change sets](https://help.aliyun.com/document_detail/155649.html).
   * #### Create a stack from existing resources
   * To import existing cloud resources into a new stack, set `ChangeSetType` to IMPORT. [Overview](https://help.aliyun.com/document_detail/193454.html).
   * #### Import existing resources to a stack
   * To import existing resources into an existing stack, set `ChangeSetType` to IMPORT. [Overview](https://help.aliyun.com/document_detail/193454.html).
   * ### Limits
   * - Only stacks in specific states can be updated using change sets. [Update a stack using a change set](https://help.aliyun.com/document_detail/155873.html).
   * - A stack can have a maximum of 20 change sets at a time.
   * - A change set shows only the changes to a stack. It does not indicate whether the stack will be successfully updated.
   * - A change set does not check for issues such as exceeded account quotas, non-updatable resources, or insufficient permissions. These issues can cause the stack update to fail. If the update fails, ROS attempts to roll back resources to their previous state.
   * In this example, a change set named `MyChangeSet` is created in the China (Hangzhou) region (`cn-hangzhou`) to update the template of stack `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateChangeSetRequest
   * @returns CreateChangeSetResponse
   */
  async createChangeSet(request: $_model.CreateChangeSetRequest): Promise<$_model.CreateChangeSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChangeSetWithOptions(request, runtime);
  }

  /**
   * Creates a dignosis task.
   * 
   * @param request - CreateDiagnosticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnosticResponse
   */
  async createDiagnosticWithOptions(request: $_model.CreateDiagnosticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiagnosticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diagnosticKey)) {
      query["DiagnosticKey"] = request.diagnosticKey;
    }

    if (!$dara.isNull(request.diagnosticType)) {
      query["DiagnosticType"] = request.diagnosticType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiagnostic",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiagnosticResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiagnosticResponse({}));
  }

  /**
   * Creates a dignosis task.
   * 
   * @param request - CreateDiagnosticRequest
   * @returns CreateDiagnosticResponse
   */
  async createDiagnostic(request: $_model.CreateDiagnosticRequest): Promise<$_model.CreateDiagnosticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiagnosticWithOptions(request, runtime);
  }

  /**
   * Creates a stack from a ROS template to deploy a group of resources.
   * 
   * @remarks
   * A stack is the management unit for ROS resources ([Overview](https://help.aliyun.com/document_detail/172973.html)). Limits:
   * - Each Alibaba Cloud account can create up to 200 stacks.
   * - Each stack can contain up to 200 resources.
   * The following example creates a stack named `MyStack` in the China (Hangzhou) region with `TemplateBody` set to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStackResponse
   */
  async createStackWithOptions(request: $_model.CreateStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createOption)) {
      query["CreateOption"] = request.createOption;
    }

    if (!$dara.isNull(request.createOptions)) {
      query["CreateOptions"] = request.createOptions;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!$dara.isNull(request.notificationURLs)) {
      query["NotificationURLs"] = request.notificationURLs;
    }

    if (!$dara.isNull(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!$dara.isNull(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!$dara.isNull(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!$dara.isNull(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!$dara.isNull(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStackResponse>(await this.callApi(params, req, runtime), new $_model.CreateStackResponse({}));
  }

  /**
   * Creates a stack from a ROS template to deploy a group of resources.
   * 
   * @remarks
   * A stack is the management unit for ROS resources ([Overview](https://help.aliyun.com/document_detail/172973.html)). Limits:
   * - Each Alibaba Cloud account can create up to 200 stacks.
   * - Each stack can contain up to 200 resources.
   * The following example creates a stack named `MyStack` in the China (Hangzhou) region with `TemplateBody` set to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - CreateStackRequest
   * @returns CreateStackResponse
   */
  async createStack(request: $_model.CreateStackRequest): Promise<$_model.CreateStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStackWithOptions(request, runtime);
  }

  /**
   * Creates a stack group from an ROS template to create stacks across multiple Alibaba Cloud accounts and regions.
   * 
   * @remarks
   * A stack group manages multiple ROS stacks as a unit, enabling you to create stacks across Alibaba Cloud accounts and regions.
   * Stack groups support two permission models:
   * - Self-managed: Both the administrator and execution accounts are Alibaba Cloud accounts.
   * - Service-managed: The administrator account is the management account or delegated administrator account of a resource directory. The execution account is a member account of that directory.
   * [Overview](https://help.aliyun.com/document_detail/154578.html).
   * This example creates a self-managed stack group named `MyStackGroup` in the `China (Hangzhou)` region using template `5ecd1e10-b0e9-4389-a565-e4c15efc****`.
   * 
   * @param tmpReq - CreateStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStackGroupResponse
   */
  async createStackGroupWithOptions(tmpReq: $_model.CreateStackGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStackGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStackGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.autoDeployment)) {
      request.autoDeploymentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoDeployment, "AutoDeployment", "json");
    }

    let query = { };
    if (!$dara.isNull(request.administrationRoleName)) {
      query["AdministrationRoleName"] = request.administrationRoleName;
    }

    if (!$dara.isNull(request.autoDeploymentShrink)) {
      query["AutoDeployment"] = request.autoDeploymentShrink;
    }

    if (!$dara.isNull(request.capabilities)) {
      query["Capabilities"] = request.capabilities;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionRoleName)) {
      query["ExecutionRoleName"] = request.executionRoleName;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.permissionModel)) {
      query["PermissionModel"] = request.permissionModel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.stackArn)) {
      query["StackArn"] = request.stackArn;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStackGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateStackGroupResponse({}));
  }

  /**
   * Creates a stack group from an ROS template to create stacks across multiple Alibaba Cloud accounts and regions.
   * 
   * @remarks
   * A stack group manages multiple ROS stacks as a unit, enabling you to create stacks across Alibaba Cloud accounts and regions.
   * Stack groups support two permission models:
   * - Self-managed: Both the administrator and execution accounts are Alibaba Cloud accounts.
   * - Service-managed: The administrator account is the management account or delegated administrator account of a resource directory. The execution account is a member account of that directory.
   * [Overview](https://help.aliyun.com/document_detail/154578.html).
   * This example creates a self-managed stack group named `MyStackGroup` in the `China (Hangzhou)` region using template `5ecd1e10-b0e9-4389-a565-e4c15efc****`.
   * 
   * @param request - CreateStackGroupRequest
   * @returns CreateStackGroupResponse
   */
  async createStackGroup(request: $_model.CreateStackGroupRequest): Promise<$_model.CreateStackGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStackGroupWithOptions(request, runtime);
  }

  /**
   * Creates stack instances for one or more accounts in the specified regions.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that a stack group is created. For more information, see [CreateStackGroup](https://help.aliyun.com/document_detail/151333.html).
   * ### Scenarios
   * #### Create stacks across accounts
   * To create identical resources in multiple accounts, an administrator account can create a stack group, add multiple destination accounts, and deploy resources in a single region. This process creates multiple stacks in different accounts within the same region, improving deployment efficiency.
   * #### Create stacks across regions
   * To create identical resources in multiple regions, an administrator account can create a stack group, add a destination account, and deploy resources in multiple regions. This process creates multiple stacks in different regions within the same account, improving deployment efficiency.
   * #### Create stacks across accounts and regions
   * To create identical resources in multiple accounts across multiple regions, an administrator account can create a stack group, add multiple destination accounts, and deploy resources in multiple regions. This process creates multiple stacks in different accounts across different regions, improving deployment efficiency.
   * This topic provides an example of creating stacks in the China (Hangzhou) and China (Beijing) regions in the Alibaba Cloud accounts `151266687691****` and `141261387191****`. The example uses a stack group named `MyStackGroup` that is created in the China (Hangzhou) region and uses self-managed permissions.
   * 
   * @param tmpReq - CreateStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStackInstancesResponse
   */
  async createStackInstancesWithOptions(tmpReq: $_model.CreateStackInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStackInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!$dara.isNull(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deploymentOptions)) {
      query["DeploymentOptions"] = request.deploymentOptions;
    }

    if (!$dara.isNull(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!$dara.isNull(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!$dara.isNull(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!$dara.isNull(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!$dara.isNull(request.parameterOverrides)) {
      query["ParameterOverrides"] = request.parameterOverrides;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStackInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CreateStackInstancesResponse({}));
  }

  /**
   * Creates stack instances for one or more accounts in the specified regions.
   * 
   * @remarks
   * ### Prerequisites
   * Ensure that a stack group is created. For more information, see [CreateStackGroup](https://help.aliyun.com/document_detail/151333.html).
   * ### Scenarios
   * #### Create stacks across accounts
   * To create identical resources in multiple accounts, an administrator account can create a stack group, add multiple destination accounts, and deploy resources in a single region. This process creates multiple stacks in different accounts within the same region, improving deployment efficiency.
   * #### Create stacks across regions
   * To create identical resources in multiple regions, an administrator account can create a stack group, add a destination account, and deploy resources in multiple regions. This process creates multiple stacks in different regions within the same account, improving deployment efficiency.
   * #### Create stacks across accounts and regions
   * To create identical resources in multiple accounts across multiple regions, an administrator account can create a stack group, add multiple destination accounts, and deploy resources in multiple regions. This process creates multiple stacks in different accounts across different regions, improving deployment efficiency.
   * This topic provides an example of creating stacks in the China (Hangzhou) and China (Beijing) regions in the Alibaba Cloud accounts `151266687691****` and `141261387191****`. The example uses a stack group named `MyStackGroup` that is created in the China (Hangzhou) region and uses self-managed permissions.
   * 
   * @param request - CreateStackInstancesRequest
   * @returns CreateStackInstancesResponse
   */
  async createStackInstances(request: $_model.CreateStackInstancesRequest): Promise<$_model.CreateStackInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStackInstancesWithOptions(request, runtime);
  }

  /**
   * Creates a custom template.
   * 
   * @remarks
   * This topic provides an example of how to create a template named `MyTemplate` in the China (Hangzhou) region (`cn-hangzhou`). The `TemplateBody` parameter is set to `{"ROSTemplateFormatVersion": "2015-09-01"}`.
   * 
   * @param request - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.validationOptions)) {
      query["ValidationOptions"] = request.validationOptions;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * Creates a custom template.
   * 
   * @remarks
   * This topic provides an example of how to create a template named `MyTemplate` in the China (Hangzhou) region (`cn-hangzhou`). The `TemplateBody` parameter is set to `{"ROSTemplateFormatVersion": "2015-09-01"}`.
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * Creates templatescratch: scenario.
   * 
   * @remarks
   * ### Limits
   * Only specific resource types support the resource scenario feature. For more information, refer to [Resource types that support scenarios](https://help.aliyun.com/document_detail/353175.html).
   * ### Description
   * Resource Orchestration Service (ROS) provides the resource scenario feature. You can select a resource scope in the UI and perform operations such as replication or management of a group of resources, helping simplify resource management. For more information about resource scenarios, refer to [Overview](https://help.aliyun.com/document_detail/352074.html).
   * #### Resource replication scenario
   * If you want to replicate a collection of resources and dependencies between the resources, you can create a resource replication scenario. This type of scenario lets you replicate all existing resources within the specified scope and generate a collection of resources that have the same architecture as the existing resources. For more information, refer to [Resource replication scenario](https://help.aliyun.com/document_detail/353133.html).
   * #### Resource profiling scenario
   * If the relationships between resources that you want to create are complicated, you can create a resource profiling scenario to preview the overall resource architecture or the architecture starting from a specific resource. This helps simplify resource management. For more information, refer to [Resource detection scenario](https://help.aliyun.com/document_detail/2591901.html).
   * #### Resource management scenario
   * If you need to import a collection of existing resources into a new resource stack for unified management, you can create a resource management scenario. For more information, refer to [Resource management scenario](https://help.aliyun.com/document_detail/353163.html).
   * #### Resource migration scenario
   * If you want to migrate a collection of resources and dependencies between the resources, you can create a resource migration scenario. When you migrate the resources, ROS generates a stack. You can view the migration progress on the Stacks tab of the scenario details page. After you migrate the resources, you can delete source resources. For more information, refer to [Resource migration scenario](https://help.aliyun.com/document_detail/379902.html).
   * This topic provides an example of how to create a resource replication scenario in the China (Hangzhou) region to replicate a virtual private cloud (VPC) with the ID of `vpc-bp1m6fww66xbntjyc****`.
   * 
   * @param tmpReq - CreateTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateScratchResponse
   */
  async createTemplateScratchWithOptions(tmpReq: $_model.CreateTemplateScratchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateScratchResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTemplateScratchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.preferenceParameters)) {
      request.preferenceParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preferenceParameters, "PreferenceParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceResourceGroup)) {
      request.sourceResourceGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResourceGroup, "SourceResourceGroup", "json");
    }

    if (!$dara.isNull(tmpReq.sourceResources)) {
      request.sourceResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResources, "SourceResources", "json");
    }

    if (!$dara.isNull(tmpReq.sourceTag)) {
      request.sourceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTag, "SourceTag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionMode)) {
      query["ExecutionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.logicalIdStrategy)) {
      query["LogicalIdStrategy"] = request.logicalIdStrategy;
    }

    if (!$dara.isNull(request.preferenceParametersShrink)) {
      query["PreferenceParameters"] = request.preferenceParametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceResourceGroupShrink)) {
      query["SourceResourceGroup"] = request.sourceResourceGroupShrink;
    }

    if (!$dara.isNull(request.sourceResourcesShrink)) {
      query["SourceResources"] = request.sourceResourcesShrink;
    }

    if (!$dara.isNull(request.sourceTagShrink)) {
      query["SourceTag"] = request.sourceTagShrink;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateScratchType)) {
      query["TemplateScratchType"] = request.templateScratchType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateScratchResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateScratchResponse({}));
  }

  /**
   * Creates templatescratch: scenario.
   * 
   * @remarks
   * ### Limits
   * Only specific resource types support the resource scenario feature. For more information, refer to [Resource types that support scenarios](https://help.aliyun.com/document_detail/353175.html).
   * ### Description
   * Resource Orchestration Service (ROS) provides the resource scenario feature. You can select a resource scope in the UI and perform operations such as replication or management of a group of resources, helping simplify resource management. For more information about resource scenarios, refer to [Overview](https://help.aliyun.com/document_detail/352074.html).
   * #### Resource replication scenario
   * If you want to replicate a collection of resources and dependencies between the resources, you can create a resource replication scenario. This type of scenario lets you replicate all existing resources within the specified scope and generate a collection of resources that have the same architecture as the existing resources. For more information, refer to [Resource replication scenario](https://help.aliyun.com/document_detail/353133.html).
   * #### Resource profiling scenario
   * If the relationships between resources that you want to create are complicated, you can create a resource profiling scenario to preview the overall resource architecture or the architecture starting from a specific resource. This helps simplify resource management. For more information, refer to [Resource detection scenario](https://help.aliyun.com/document_detail/2591901.html).
   * #### Resource management scenario
   * If you need to import a collection of existing resources into a new resource stack for unified management, you can create a resource management scenario. For more information, refer to [Resource management scenario](https://help.aliyun.com/document_detail/353163.html).
   * #### Resource migration scenario
   * If you want to migrate a collection of resources and dependencies between the resources, you can create a resource migration scenario. When you migrate the resources, ROS generates a stack. You can view the migration progress on the Stacks tab of the scenario details page. After you migrate the resources, you can delete source resources. For more information, refer to [Resource migration scenario](https://help.aliyun.com/document_detail/379902.html).
   * This topic provides an example of how to create a resource replication scenario in the China (Hangzhou) region to replicate a virtual private cloud (VPC) with the ID of `vpc-bp1m6fww66xbntjyc****`.
   * 
   * @param request - CreateTemplateScratchRequest
   * @returns CreateTemplateScratchResponse
   */
  async createTemplateScratch(request: $_model.CreateTemplateScratchRequest): Promise<$_model.CreateTemplateScratchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Deletes change sets.
   * 
   * @remarks
   * - Before you call this operation, make sure that the following requirements are met:
   *   - The status of the change set is CREATE_COMPLETE, CREATE_FAILED, or DELETE_FAILED.
   *   - The execution status is UNAVAILABLE or AVAILABLE.
   * - After a change set is executed, other change sets associated with the same stack as this change set are also deleted.
   * - After a stack is deleted, change sets associated with the stack are deleted.
   * - If a change set of the CREATE type is deleted, you must delete stacks associated with the change set.
   * In this example, a change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is deleted. The change set is created in the China (Hangzhou) region.
   * 
   * @param request - DeleteChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChangeSetResponse
   */
  async deleteChangeSetWithOptions(request: $_model.DeleteChangeSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChangeSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChangeSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChangeSetResponse({}));
  }

  /**
   * Deletes change sets.
   * 
   * @remarks
   * - Before you call this operation, make sure that the following requirements are met:
   *   - The status of the change set is CREATE_COMPLETE, CREATE_FAILED, or DELETE_FAILED.
   *   - The execution status is UNAVAILABLE or AVAILABLE.
   * - After a change set is executed, other change sets associated with the same stack as this change set are also deleted.
   * - After a stack is deleted, change sets associated with the stack are deleted.
   * - If a change set of the CREATE type is deleted, you must delete stacks associated with the change set.
   * In this example, a change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is deleted. The change set is created in the China (Hangzhou) region.
   * 
   * @param request - DeleteChangeSetRequest
   * @returns DeleteChangeSetResponse
   */
  async deleteChangeSet(request: $_model.DeleteChangeSetRequest): Promise<$_model.DeleteChangeSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChangeSetWithOptions(request, runtime);
  }

  /**
   * Deletes a diagnostic record.
   * 
   * @param request - DeleteDiagnosticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiagnosticResponse
   */
  async deleteDiagnosticWithOptions(request: $_model.DeleteDiagnosticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDiagnosticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDiagnostic",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDiagnosticResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDiagnosticResponse({}));
  }

  /**
   * Deletes a diagnostic record.
   * 
   * @param request - DeleteDiagnosticRequest
   * @returns DeleteDiagnosticResponse
   */
  async deleteDiagnostic(request: $_model.DeleteDiagnosticRequest): Promise<$_model.DeleteDiagnosticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDiagnosticWithOptions(request, runtime);
  }

  /**
   * Deletes a stack, optionally retaining resources.
   * 
   * @param request - DeleteStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStackResponse
   */
  async deleteStackWithOptions(request: $_model.DeleteStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deleteOptions)) {
      query["DeleteOptions"] = request.deleteOptions;
    }

    if (!$dara.isNull(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retainAllResources)) {
      query["RetainAllResources"] = request.retainAllResources;
    }

    if (!$dara.isNull(request.retainResources)) {
      query["RetainResources"] = request.retainResources;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStackResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStackResponse({}));
  }

  /**
   * Deletes a stack, optionally retaining resources.
   * 
   * @param request - DeleteStackRequest
   * @returns DeleteStackResponse
   */
  async deleteStack(request: $_model.DeleteStackRequest): Promise<$_model.DeleteStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStackWithOptions(request, runtime);
  }

  /**
   * Deletes a stack group.
   * 
   * @remarks
   * A stack group can be deleted only when the stack group does not contain stacks. You can call the [DeleteStackInstances](https://help.aliyun.com/document_detail/151715.html) operation to delete stacks.
   * This topic provides an example on how to delete a stack group. In this example, a stack group named `MyStackGroup` in the China (Hangzhou) region is deleted.
   * 
   * @param request - DeleteStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStackGroupResponse
   */
  async deleteStackGroupWithOptions(request: $_model.DeleteStackGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStackGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStackGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStackGroupResponse({}));
  }

  /**
   * Deletes a stack group.
   * 
   * @remarks
   * A stack group can be deleted only when the stack group does not contain stacks. You can call the [DeleteStackInstances](https://help.aliyun.com/document_detail/151715.html) operation to delete stacks.
   * This topic provides an example on how to delete a stack group. In this example, a stack group named `MyStackGroup` in the China (Hangzhou) region is deleted.
   * 
   * @param request - DeleteStackGroupRequest
   * @returns DeleteStackGroupResponse
   */
  async deleteStackGroup(request: $_model.DeleteStackGroupRequest): Promise<$_model.DeleteStackGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStackGroupWithOptions(request, runtime);
  }

  /**
   * Deletes stack instances from specified accounts and regions. You can choose to retain the resources.
   * 
   * @remarks
   * This topic provides an example of how to delete a stack instance from the `MyStackGroup` stack group. The stack group uses self-managed permissions and is in the China (Hangzhou) region. This example deletes the stack instance that is deployed in the China (Beijing) region for the Alibaba Cloud account `151266687691****`.
   * 
   * @param tmpReq - DeleteStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStackInstancesResponse
   */
  async deleteStackInstancesWithOptions(tmpReq: $_model.DeleteStackInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStackInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!$dara.isNull(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!$dara.isNull(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!$dara.isNull(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.retainStacks)) {
      query["RetainStacks"] = request.retainStacks;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStackInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStackInstancesResponse({}));
  }

  /**
   * Deletes stack instances from specified accounts and regions. You can choose to retain the resources.
   * 
   * @remarks
   * This topic provides an example of how to delete a stack instance from the `MyStackGroup` stack group. The stack group uses self-managed permissions and is in the China (Hangzhou) region. This example deletes the stack instance that is deployed in the China (Beijing) region for the Alibaba Cloud account `151266687691****`.
   * 
   * @param request - DeleteStackInstancesRequest
   * @returns DeleteStackInstancesResponse
   */
  async deleteStackInstances(request: $_model.DeleteStackInstancesRequest): Promise<$_model.DeleteStackInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStackInstancesWithOptions(request, runtime);
  }

  /**
   * Deletes a template.
   * 
   * @remarks
   * If a template is shared with other Alibaba Cloud accounts, unshare it before deletion.
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: $_model.DeleteTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * Deletes a template.
   * 
   * @remarks
   * If a template is shared with other Alibaba Cloud accounts, unshare it before deletion.
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: $_model.DeleteTemplateRequest): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario.
   * 
   * @remarks
   * In this topic, a scenario whose ID is `ts-4f83704400994409****` is deleted in the China (Hangzhou) region.
   * 
   * @param request - DeleteTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateScratchResponse
   */
  async deleteTemplateScratchWithOptions(request: $_model.DeleteTemplateScratchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateScratchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateScratchResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateScratchResponse({}));
  }

  /**
   * Deletes a scenario.
   * 
   * @remarks
   * In this topic, a scenario whose ID is `ts-4f83704400994409****` is deleted in the China (Hangzhou) region.
   * 
   * @param request - DeleteTemplateScratchRequest
   * @returns DeleteTemplateScratchResponse
   */
  async deleteTemplateScratch(request: $_model.DeleteTemplateScratchRequest): Promise<$_model.DeleteTemplateScratchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Deletes a resource type or a specific version of a resource type.
   * 
   * @remarks
   * - If you delete a resource type, it can no longer be used in ROS.
   * - If you delete a version of a resource type, that version can no longer be used in ROS.
   * - You can delete a resource type only if it has a single version. If a resource type has multiple versions, you must delete the other versions first.
   * - You cannot delete the default version if the resource type has more than one version.
   * - If a resource type has only one version, deleting that version also deletes the resource type.
   * 
   * @param request - DeregisterResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeregisterResourceTypeResponse
   */
  async deregisterResourceTypeWithOptions(request: $_model.DeregisterResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeregisterResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeregisterResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeregisterResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.DeregisterResourceTypeResponse({}));
  }

  /**
   * Deletes a resource type or a specific version of a resource type.
   * 
   * @remarks
   * - If you delete a resource type, it can no longer be used in ROS.
   * - If you delete a version of a resource type, that version can no longer be used in ROS.
   * - You can delete a resource type only if it has a single version. If a resource type has multiple versions, you must delete the other versions first.
   * - You cannot delete the default version if the resource type has more than one version.
   * - If a resource type has only one version, deleting that version also deletes the resource type.
   * 
   * @param request - DeregisterResourceTypeRequest
   * @returns DeregisterResourceTypeResponse
   */
  async deregisterResourceType(request: $_model.DeregisterResourceTypeRequest): Promise<$_model.DeregisterResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deregisterResourceTypeWithOptions(request, runtime);
  }

  /**
   * Queries a list of available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries a list of available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Performs drift detection on resources in a stack to check whether the resources have drifted from the expected template configurations.
   * 
   * @param request - DetectStackDriftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectStackDriftResponse
   */
  async detectStackDriftWithOptions(request: $_model.DetectStackDriftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectStackDriftResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectStackDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectStackDriftResponse>(await this.callApi(params, req, runtime), new $_model.DetectStackDriftResponse({}));
  }

  /**
   * Performs drift detection on resources in a stack to check whether the resources have drifted from the expected template configurations.
   * 
   * @param request - DetectStackDriftRequest
   * @returns DetectStackDriftResponse
   */
  async detectStackDrift(request: $_model.DetectStackDriftRequest): Promise<$_model.DetectStackDriftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectStackDriftWithOptions(request, runtime);
  }

  /**
   * Performs drift detection on stack groups to check whether the stack groups have drifted from the expected template configurations.
   * 
   * @param tmpReq - DetectStackGroupDriftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectStackGroupDriftResponse
   */
  async detectStackGroupDriftWithOptions(tmpReq: $_model.DetectStackGroupDriftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectStackGroupDriftResponse> {
    tmpReq.validate();
    let request = new $_model.DetectStackGroupDriftShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectStackGroupDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectStackGroupDriftResponse>(await this.callApi(params, req, runtime), new $_model.DetectStackGroupDriftResponse({}));
  }

  /**
   * Performs drift detection on stack groups to check whether the stack groups have drifted from the expected template configurations.
   * 
   * @param request - DetectStackGroupDriftRequest
   * @returns DetectStackGroupDriftResponse
   */
  async detectStackGroupDrift(request: $_model.DetectStackGroupDriftRequest): Promise<$_model.DetectStackGroupDriftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectStackGroupDriftWithOptions(request, runtime);
  }

  /**
   * Performs drift detection on resources in a stack to determine whether the resources have drifted from the expected configurations.
   * 
   * @param request - DetectStackResourceDriftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectStackResourceDriftResponse
   */
  async detectStackResourceDriftWithOptions(request: $_model.DetectStackResourceDriftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetectStackResourceDriftResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectStackResourceDrift",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectStackResourceDriftResponse>(await this.callApi(params, req, runtime), new $_model.DetectStackResourceDriftResponse({}));
  }

  /**
   * Performs drift detection on resources in a stack to determine whether the resources have drifted from the expected configurations.
   * 
   * @param request - DetectStackResourceDriftRequest
   * @returns DetectStackResourceDriftResponse
   */
  async detectStackResourceDrift(request: $_model.DetectStackResourceDriftRequest): Promise<$_model.DetectStackResourceDriftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectStackResourceDriftWithOptions(request, runtime);
  }

  /**
   * Enables trusted service access.
   * 
   * @remarks
   * ### Description
   * Enables trusted service access.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServiceAccessResponse
   */
  async enableServiceAccessWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableServiceAccessResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableServiceAccess",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableServiceAccessResponse>(await this.callApi(params, req, runtime), new $_model.EnableServiceAccessResponse({}));
  }

  /**
   * Enables trusted service access.
   * 
   * @remarks
   * ### Description
   * Enables trusted service access.
   * @returns EnableServiceAccessResponse
   */
  async enableServiceAccess(): Promise<$_model.EnableServiceAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableServiceAccessWithOptions(runtime);
  }

  /**
   * Enables services in a batch.
   * 
   * @remarks
   * ### Description
   * This operation enables multiple Alibaba Cloud services in a batch.
   * 
   * @param tmpReq - EnableServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServicesResponse
   */
  async enableServicesWithOptions(tmpReq: $_model.EnableServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableServicesResponse> {
    tmpReq.validate();
    let request = new $_model.EnableServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.serviceNames)) {
      request.serviceNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceNames, "ServiceNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceNamesShrink)) {
      query["ServiceNames"] = request.serviceNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableServices",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableServicesResponse>(await this.callApi(params, req, runtime), new $_model.EnableServicesResponse({}));
  }

  /**
   * Enables services in a batch.
   * 
   * @remarks
   * ### Description
   * This operation enables multiple Alibaba Cloud services in a batch.
   * 
   * @param request - EnableServicesRequest
   * @returns EnableServicesResponse
   */
  async enableServices(request: $_model.EnableServicesRequest): Promise<$_model.EnableServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableServicesWithOptions(request, runtime);
  }

  /**
   * Executes change sets.
   * 
   * @remarks
   * In this example, the change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is executed. The change set is created in the `China (Hangzhou)` region.
   * 
   * @param request - ExecuteChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteChangeSetResponse
   */
  async executeChangeSetWithOptions(request: $_model.ExecuteChangeSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteChangeSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteChangeSetResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteChangeSetResponse({}));
  }

  /**
   * Executes change sets.
   * 
   * @remarks
   * In this example, the change set whose ID is `1f6521a4-05af-4975-afe9-bc4b45ad****` is executed. The change set is created in the `China (Hangzhou)` region.
   * 
   * @param request - ExecuteChangeSetRequest
   * @returns ExecuteChangeSetResponse
   */
  async executeChangeSet(request: $_model.ExecuteChangeSetRequest): Promise<$_model.ExecuteChangeSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeChangeSetWithOptions(request, runtime);
  }

  /**
   * Generates a template for a resource scenario.
   * 
   * @remarks
   * In this example, a template is generated for a resource management scenario that resides in the China (Hangzhou) region. The ID of the resource scenario is `ts-aa9c62feab844a6b****`.
   * > You cannot generate a template for a resource detection scenario.
   * 
   * @param request - GenerateTemplateByScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTemplateByScratchResponse
   */
  async generateTemplateByScratchWithOptions(request: $_model.GenerateTemplateByScratchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateTemplateByScratchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.provisionRegionId)) {
      query["ProvisionRegionId"] = request.provisionRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTemplateByScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateTemplateByScratchResponse>(await this.callApi(params, req, runtime), new $_model.GenerateTemplateByScratchResponse({}));
  }

  /**
   * Generates a template for a resource scenario.
   * 
   * @remarks
   * In this example, a template is generated for a resource management scenario that resides in the China (Hangzhou) region. The ID of the resource scenario is `ts-aa9c62feab844a6b****`.
   * > You cannot generate a template for a resource detection scenario.
   * 
   * @param request - GenerateTemplateByScratchRequest
   * @returns GenerateTemplateByScratchResponse
   */
  async generateTemplateByScratch(request: $_model.GenerateTemplateByScratchRequest): Promise<$_model.GenerateTemplateByScratchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateTemplateByScratchWithOptions(request, runtime);
  }

  /**
   * Generates the policy information required by a specified template.
   * 
   * @remarks
   * If the policies required by the template include Enterprise Distributed Application Service (EDAS), log on to your Alibaba Cloud account and upgrade the RAM permissions for the Resource Access Management (RAM) users that require authorization.
   * This topic provides an example of how to generate access policies for a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****`.
   * 
   * @param request - GenerateTemplatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateTemplatePolicyResponse
   */
  async generateTemplatePolicyWithOptions(request: $_model.GenerateTemplatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateTemplatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.generateOptions)) {
      query["GenerateOptions"] = request.generateOptions;
    }

    if (!$dara.isNull(request.operationTypes)) {
      query["OperationTypes"] = request.operationTypes;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateTemplatePolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateTemplatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateTemplatePolicyResponse({}));
  }

  /**
   * Generates the policy information required by a specified template.
   * 
   * @remarks
   * If the policies required by the template include Enterprise Distributed Application Service (EDAS), log on to your Alibaba Cloud account and upgrade the RAM permissions for the Resource Access Management (RAM) users that require authorization.
   * This topic provides an example of how to generate access policies for a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****`.
   * 
   * @param request - GenerateTemplatePolicyRequest
   * @returns GenerateTemplatePolicyResponse
   */
  async generateTemplatePolicy(request: $_model.GenerateTemplatePolicyRequest): Promise<$_model.GenerateTemplatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateTemplatePolicyWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AI task by task ID.
   * 
   * @param request - GetAITaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAITaskResponse
   */
  async getAITaskWithOptions(request: $_model.GetAITaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAITaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputOption)) {
      query["OutputOption"] = request.outputOption;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAITask",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAITaskResponse>(await this.callApi(params, req, runtime), new $_model.GetAITaskResponse({}));
  }

  /**
   * Queries the information about an AI task by task ID.
   * 
   * @param request - GetAITaskRequest
   * @returns GetAITaskResponse
   */
  async getAITask(request: $_model.GetAITaskRequest): Promise<$_model.GetAITaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAITaskWithOptions(request, runtime);
  }

  /**
   * Returns details for a specified change set, optionally including the details of its associated template.
   * 
   * @remarks
   * This topic demonstrates how to query a change set with the ID `4c11658d-bd47-4dd0-ba64-727edc62****` in the China (Hangzhou) region.
   * 
   * @param request - GetChangeSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChangeSetResponse
   */
  async getChangeSetWithOptions(request: $_model.GetChangeSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChangeSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.showTemplate)) {
      query["ShowTemplate"] = request.showTemplate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChangeSet",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChangeSetResponse>(await this.callApi(params, req, runtime), new $_model.GetChangeSetResponse({}));
  }

  /**
   * Returns details for a specified change set, optionally including the details of its associated template.
   * 
   * @remarks
   * This topic demonstrates how to query a change set with the ID `4c11658d-bd47-4dd0-ba64-727edc62****` in the China (Hangzhou) region.
   * 
   * @param request - GetChangeSetRequest
   * @returns GetChangeSetResponse
   */
  async getChangeSet(request: $_model.GetChangeSetRequest): Promise<$_model.GetChangeSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChangeSetWithOptions(request, runtime);
  }

  /**
   * Obtains the diagnosis details based on a specified diagnostic report ID.
   * 
   * @param request - GetDiagnosticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiagnosticResponse
   */
  async getDiagnosticWithOptions(request: $_model.GetDiagnosticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDiagnosticResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reportId)) {
      query["ReportId"] = request.reportId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDiagnostic",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDiagnosticResponse>(await this.callApi(params, req, runtime), new $_model.GetDiagnosticResponse({}));
  }

  /**
   * Obtains the diagnosis details based on a specified diagnostic report ID.
   * 
   * @param request - GetDiagnosticRequest
   * @returns GetDiagnosticResponse
   */
  async getDiagnostic(request: $_model.GetDiagnosticRequest): Promise<$_model.GetDiagnosticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDiagnosticWithOptions(request, runtime);
  }

  /**
   * Queries the details of features that are supported by Resource Orchestration Service (ROS).
   * 
   * @remarks
   * You can call this operation to query the Terraform hosting, resource cleaner, and scenario features.
   * This topic provides an example on how to query the details of features supported by ROS in the China (Hangzhou) region. The details include Terraform versions, provider versions, and supported resource types.
   * > In the Examples section, only part of the sample code is provided.
   * 
   * @param request - GetFeatureDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureDetailsResponse
   */
  async getFeatureDetailsWithOptions(request: $_model.GetFeatureDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFeatureDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.feature)) {
      query["Feature"] = request.feature;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureDetails",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFeatureDetailsResponse>(await this.callApi(params, req, runtime), new $_model.GetFeatureDetailsResponse({}));
  }

  /**
   * Queries the details of features that are supported by Resource Orchestration Service (ROS).
   * 
   * @remarks
   * You can call this operation to query the Terraform hosting, resource cleaner, and scenario features.
   * This topic provides an example on how to query the details of features supported by ROS in the China (Hangzhou) region. The details include Terraform versions, provider versions, and supported resource types.
   * > In the Examples section, only part of the sample code is provided.
   * 
   * @param request - GetFeatureDetailsRequest
   * @returns GetFeatureDetailsResponse
   */
  async getFeatureDetails(request: $_model.GetFeatureDetailsRequest): Promise<$_model.GetFeatureDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFeatureDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a resource type.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the `ALIYUN::ROS::WaitConditionHandle` resource type.
   * 
   * @param request - GetResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeResponse
   */
  async getResourceTypeWithOptions(request: $_model.GetResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceTypeResponse({}));
  }

  /**
   * Queries the details of a resource type.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the `ALIYUN::ROS::WaitConditionHandle` resource type.
   * 
   * @param request - GetResourceTypeRequest
   * @returns GetResourceTypeResponse
   */
  async getResourceType(request: $_model.GetResourceTypeRequest): Promise<$_model.GetResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceTypeWithOptions(request, runtime);
  }

  /**
   * Generates a sample template based on a resource type.
   * 
   * @param request - GetResourceTypeTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeTemplateResponse
   */
  async getResourceTypeTemplateWithOptions(request: $_model.GetResourceTypeTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceTypeTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceTypeTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceTypeTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceTypeTemplateResponse({}));
  }

  /**
   * Generates a sample template based on a resource type.
   * 
   * @param request - GetResourceTypeTemplateRequest
   * @returns GetResourceTypeTemplateResponse
   */
  async getResourceTypeTemplate(request: $_model.GetResourceTypeTemplateRequest): Promise<$_model.GetResourceTypeTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceTypeTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the access status of a trusted service.
   * 
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceAccessResponse
   */
  async getServiceAccessWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceAccessResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceAccess",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceAccessResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceAccessResponse({}));
  }

  /**
   * Queries the access status of a trusted service.
   * @returns GetServiceAccessResponse
   */
  async getServiceAccess(): Promise<$_model.GetServiceAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceAccessWithOptions(runtime);
  }

  /**
   * Queries the activation status of an Alibaba Cloud service and information about its service-linked roles.
   * 
   * @remarks
   * ### Usage notes
   * This topic provides an example of how to query the activation status of Elastic High Performance Computing (EHPC) and information about the service-linked roles for EHPC in the China (Hangzhou) region.
   * > Make sure that you have the permissions to call the [GetRole](https://help.aliyun.com/document_detail/28711.html) operation.
   * 
   * @param request - GetServiceProvisionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisionsWithOptions(request: $_model.GetServiceProvisionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceProvisionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.services)) {
      query["Services"] = request.services;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceProvisions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceProvisionsResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceProvisionsResponse({}));
  }

  /**
   * Queries the activation status of an Alibaba Cloud service and information about its service-linked roles.
   * 
   * @remarks
   * ### Usage notes
   * This topic provides an example of how to query the activation status of Elastic High Performance Computing (EHPC) and information about the service-linked roles for EHPC in the China (Hangzhou) region.
   * > Make sure that you have the permissions to call the [GetRole](https://help.aliyun.com/document_detail/28711.html) operation.
   * 
   * @param request - GetServiceProvisionsRequest
   * @returns GetServiceProvisionsResponse
   */
  async getServiceProvisions(request: $_model.GetServiceProvisionsRequest): Promise<$_model.GetServiceProvisionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceProvisionsWithOptions(request, runtime);
  }

  /**
   * Queries stack information.
   * 
   * @remarks
   * This topic provides an example of how to query the information of a stack whose ID is `c754d2a4-28f1-46df-b557-9586173a****` in the China (Hangzhou) region.
   * 
   * @param request - GetStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackResponse
   */
  async getStackWithOptions(request: $_model.GetStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.logOption)) {
      query["LogOption"] = request.logOption;
    }

    if (!$dara.isNull(request.outputOption)) {
      query["OutputOption"] = request.outputOption;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.showResourceProgress)) {
      query["ShowResourceProgress"] = request.showResourceProgress;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackResponse>(await this.callApi(params, req, runtime), new $_model.GetStackResponse({}));
  }

  /**
   * Queries stack information.
   * 
   * @remarks
   * This topic provides an example of how to query the information of a stack whose ID is `c754d2a4-28f1-46df-b557-9586173a****` in the China (Hangzhou) region.
   * 
   * @param request - GetStackRequest
   * @returns GetStackResponse
   */
  async getStack(request: $_model.GetStackRequest): Promise<$_model.GetStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  /**
   * Queries the drift detection status of a stack.
   * 
   * @remarks
   * In this topic, the status of a drift detection operation whose ID is `a7044f0d-6f2e-4128-a307-4524ef88****` is queried. The operation is performed in the China (Hangzhou) region.
   * 
   * @param request - GetStackDriftDetectionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackDriftDetectionStatusResponse
   */
  async getStackDriftDetectionStatusWithOptions(request: $_model.GetStackDriftDetectionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackDriftDetectionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.driftDetectionId)) {
      query["DriftDetectionId"] = request.driftDetectionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackDriftDetectionStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackDriftDetectionStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetStackDriftDetectionStatusResponse({}));
  }

  /**
   * Queries the drift detection status of a stack.
   * 
   * @remarks
   * In this topic, the status of a drift detection operation whose ID is `a7044f0d-6f2e-4128-a307-4524ef88****` is queried. The operation is performed in the China (Hangzhou) region.
   * 
   * @param request - GetStackDriftDetectionStatusRequest
   * @returns GetStackDriftDetectionStatusResponse
   */
  async getStackDriftDetectionStatus(request: $_model.GetStackDriftDetectionStatusRequest): Promise<$_model.GetStackDriftDetectionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackDriftDetectionStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of a stack group by its name in an Alibaba Cloud region.
   * 
   * @remarks
   * This topic provides an example of how to query a stack group named `MyStackGroup`. The stack group is in the China (Hangzhou) region and uses the self-managed permission mode.
   * 
   * @param request - GetStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackGroupResponse
   */
  async getStackGroupWithOptions(request: $_model.GetStackGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupId)) {
      query["StackGroupId"] = request.stackGroupId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetStackGroupResponse({}));
  }

  /**
   * Queries the details of a stack group by its name in an Alibaba Cloud region.
   * 
   * @remarks
   * This topic provides an example of how to query a stack group named `MyStackGroup`. The stack group is in the China (Hangzhou) region and uses the self-managed permission mode.
   * 
   * @param request - GetStackGroupRequest
   * @returns GetStackGroupResponse
   */
  async getStackGroup(request: $_model.GetStackGroupRequest): Promise<$_model.GetStackGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about a stack group operation in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the information about the stack group operation whose ID is `6da106ca-1784-4a6f-a7e1-e723863d****` is queried. The stack group named `MyStackGroup` is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackGroupOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackGroupOperationResponse
   */
  async getStackGroupOperationWithOptions(request: $_model.GetStackGroupOperationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackGroupOperationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackGroupOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackGroupOperationResponse>(await this.callApi(params, req, runtime), new $_model.GetStackGroupOperationResponse({}));
  }

  /**
   * Queries the information about a stack group operation in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the information about the stack group operation whose ID is `6da106ca-1784-4a6f-a7e1-e723863d****` is queried. The stack group named `MyStackGroup` is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackGroupOperationRequest
   * @returns GetStackGroupOperationResponse
   */
  async getStackGroupOperation(request: $_model.GetStackGroupOperationRequest): Promise<$_model.GetStackGroupOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackGroupOperationWithOptions(request, runtime);
  }

  /**
   * Queries the information about a stack instance that is associated with a stack group.
   * 
   * @remarks
   * In this example, the information about a stack instance associated with a stack group named `MyStackGroup` is queried. The stack instance is deployed in the China (Beijing) region within the `151266687691****` Alibaba Cloud account. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackInstanceResponse
   */
  async getStackInstanceWithOptions(request: $_model.GetStackInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputOption)) {
      query["OutputOption"] = request.outputOption;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.stackInstanceAccountId)) {
      query["StackInstanceAccountId"] = request.stackInstanceAccountId;
    }

    if (!$dara.isNull(request.stackInstanceRegionId)) {
      query["StackInstanceRegionId"] = request.stackInstanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackInstance",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetStackInstanceResponse({}));
  }

  /**
   * Queries the information about a stack instance that is associated with a stack group.
   * 
   * @remarks
   * In this example, the information about a stack instance associated with a stack group named `MyStackGroup` is queried. The stack instance is deployed in the China (Beijing) region within the `151266687691****` Alibaba Cloud account. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - GetStackInstanceRequest
   * @returns GetStackInstanceResponse
   */
  async getStackInstance(request: $_model.GetStackInstanceRequest): Promise<$_model.GetStackInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the stack policy of a specified stack.
   * 
   * @remarks
   * This example queries the stack policy of stack `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region.
   * 
   * @param request - GetStackPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackPolicyResponse
   */
  async getStackPolicyWithOptions(request: $_model.GetStackPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackPolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetStackPolicyResponse({}));
  }

  /**
   * Queries the stack policy of a specified stack.
   * 
   * @remarks
   * This example queries the stack policy of stack `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region.
   * 
   * @param request - GetStackPolicyRequest
   * @returns GetStackPolicyResponse
   */
  async getStackPolicy(request: $_model.GetStackPolicyRequest): Promise<$_model.GetStackPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackPolicyWithOptions(request, runtime);
  }

  /**
   * Query a resource in a specific stack.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a resource named `WebServer` in a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region.
   * 
   * @param request - GetStackResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackResourceResponse
   */
  async getStackResourceWithOptions(request: $_model.GetStackResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceAttributes)) {
      query["ResourceAttributes"] = request.resourceAttributes;
    }

    if (!$dara.isNull(request.showResourceAttributes)) {
      query["ShowResourceAttributes"] = request.showResourceAttributes;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackResource",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetStackResourceResponse({}));
  }

  /**
   * Query a resource in a specific stack.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a resource named `WebServer` in a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region.
   * 
   * @param request - GetStackResourceRequest
   * @returns GetStackResourceResponse
   */
  async getStackResource(request: $_model.GetStackResourceRequest): Promise<$_model.GetStackResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackResourceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a template based on stacks, stack groups, change sets, or any custom template information.
   * 
   * @remarks
   * In this example, the details of a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is queried. The region ID of the template is `cn-hangzhou`.
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: $_model.GetTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!$dara.isNull(request.includePermission)) {
      query["IncludePermission"] = request.includePermission;
    }

    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateStage)) {
      query["TemplateStage"] = request.templateStage;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * Queries the details of a template based on stacks, stack groups, change sets, or any custom template information.
   * 
   * @remarks
   * In this example, the details of a template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is queried. The region ID of the template is `cn-hangzhou`.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * Queries the estimated prices of the resources in a template.
   * 
   * @remarks
   * ###
   * - For more information about the resources that support price inquiry in Resource Orchestration Service (ROS) templates, see the "**Resource types that support price inquiry**" section of the [Estimate resource prices](https://help.aliyun.com/document_detail/203165.html) topic.
   * - For more information about the resources that support price inquiry in Terraform templates, see the "**ROS resources supported by Terraform**" section of the [ROS features and resources supported by Terraform](https://help.aliyun.com/document_detail/184389.html) topic.
   * The following sample code provides an example on how to query the estimated price of an elastic IP address (EIP) that you want to create based on a template. In this example, the following template is used:
   * ```
   * {
   *   "ROSTemplateFormatVersion": "2015-09-01",
   *   "Parameters": {
   *     "Isp": {
   *       "Type": "String",
   *       "Default": "BGP"
   *     },
   *     "Name": {
   *       "Type": "String",
   *       "Default": "test"
   *     },
   *     "Netmode": {
   *       "Type": "String",
   *       "Default": "public"
   *     },
   *     "Bandwidth": {
   *       "Type": "Number",
   *       "Default": 5
   *     }
   *   },
   *   "Resources": {
   *     "NewEip": {
   *       "Type": "ALIYUN::VPC::EIP",
   *       "Properties": {
   *         "InstanceChargeType": "Prepaid",
   *         "PricingCycle": "Month",
   *         "Isp": {
   *           "Ref": "Isp"
   *         },
   *         "Period": 1,
   *         "DeletionProtection": false,
   *         "AutoPay": false,
   *         "Name": {
   *           "Ref": "Name"
   *         },
   *         "InternetChargeType": "PayByTraffic",
   *         "Netmode": {
   *           "Ref": "Netmode"
   *         },
   *         "Bandwidth": {
   *           "Ref": "Bandwidth"
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   * 
   * @param request - GetTemplateEstimateCostRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateEstimateCostResponse
   */
  async getTemplateEstimateCostWithOptions(request: $_model.GetTemplateEstimateCostRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateEstimateCostResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!$dara.isNull(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateEstimateCost",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateEstimateCostResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateEstimateCostResponse({}));
  }

  /**
   * Queries the estimated prices of the resources in a template.
   * 
   * @remarks
   * ###
   * - For more information about the resources that support price inquiry in Resource Orchestration Service (ROS) templates, see the "**Resource types that support price inquiry**" section of the [Estimate resource prices](https://help.aliyun.com/document_detail/203165.html) topic.
   * - For more information about the resources that support price inquiry in Terraform templates, see the "**ROS resources supported by Terraform**" section of the [ROS features and resources supported by Terraform](https://help.aliyun.com/document_detail/184389.html) topic.
   * The following sample code provides an example on how to query the estimated price of an elastic IP address (EIP) that you want to create based on a template. In this example, the following template is used:
   * ```
   * {
   *   "ROSTemplateFormatVersion": "2015-09-01",
   *   "Parameters": {
   *     "Isp": {
   *       "Type": "String",
   *       "Default": "BGP"
   *     },
   *     "Name": {
   *       "Type": "String",
   *       "Default": "test"
   *     },
   *     "Netmode": {
   *       "Type": "String",
   *       "Default": "public"
   *     },
   *     "Bandwidth": {
   *       "Type": "Number",
   *       "Default": 5
   *     }
   *   },
   *   "Resources": {
   *     "NewEip": {
   *       "Type": "ALIYUN::VPC::EIP",
   *       "Properties": {
   *         "InstanceChargeType": "Prepaid",
   *         "PricingCycle": "Month",
   *         "Isp": {
   *           "Ref": "Isp"
   *         },
   *         "Period": 1,
   *         "DeletionProtection": false,
   *         "AutoPay": false,
   *         "Name": {
   *           "Ref": "Name"
   *         },
   *         "InternetChargeType": "PayByTraffic",
   *         "Netmode": {
   *           "Ref": "Netmode"
   *         },
   *         "Bandwidth": {
   *           "Ref": "Bandwidth"
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   * 
   * @param request - GetTemplateEstimateCostRequest
   * @returns GetTemplateEstimateCostResponse
   */
  async getTemplateEstimateCost(request: $_model.GetTemplateEstimateCostRequest): Promise<$_model.GetTemplateEstimateCostResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateEstimateCostWithOptions(request, runtime);
  }

  /**
   * Queries the valid values of the parameters in a template.
   * 
   * @remarks
   * ### Description
   * This topic provides an example of how to query the valid values for the `ZoneInfo` parameter in a template specific to the China (Hangzhou) region. The template is `{ "ROSTemplateFormatVersion": "2015-09-01", "Parameters": { "ZoneInfo": { "Type": "String" }, "InstanceType": { "Type": "String" } }, "Resources": { "ECS": { "Type": "ALIYUN::ECS::Instance", "Properties": { "ZoneId": { "Ref": "ZoneInfo" }, "InstanceType": { "Ref": "InstanceType" } } } } }`.
   * For more information about the queryable parameters and template content, refer to [Query parameter constraints](https://help.aliyun.com/document_detail/432820.html).
   * 
   * @param tmpReq - GetTemplateParameterConstraintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateParameterConstraintsResponse
   */
  async getTemplateParameterConstraintsWithOptions(tmpReq: $_model.GetTemplateParameterConstraintsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateParameterConstraintsResponse> {
    tmpReq.validate();
    let request = new $_model.GetTemplateParameterConstraintsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parametersKeyFilter)) {
      request.parametersKeyFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parametersKeyFilter, "ParametersKeyFilter", "json");
    }

    if (!$dara.isNull(tmpReq.parametersOrder)) {
      request.parametersOrderShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parametersOrder, "ParametersOrder", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.parametersKeyFilterShrink)) {
      query["ParametersKeyFilter"] = request.parametersKeyFilterShrink;
    }

    if (!$dara.isNull(request.parametersOrderShrink)) {
      query["ParametersOrder"] = request.parametersOrderShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateParameterConstraints",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateParameterConstraintsResponse({}));
  }

  /**
   * Queries the valid values of the parameters in a template.
   * 
   * @remarks
   * ### Description
   * This topic provides an example of how to query the valid values for the `ZoneInfo` parameter in a template specific to the China (Hangzhou) region. The template is `{ "ROSTemplateFormatVersion": "2015-09-01", "Parameters": { "ZoneInfo": { "Type": "String" }, "InstanceType": { "Type": "String" } }, "Resources": { "ECS": { "Type": "ALIYUN::ECS::Instance", "Properties": { "ZoneId": { "Ref": "ZoneInfo" }, "InstanceType": { "Ref": "InstanceType" } } } } }`.
   * For more information about the queryable parameters and template content, refer to [Query parameter constraints](https://help.aliyun.com/document_detail/432820.html).
   * 
   * @param request - GetTemplateParameterConstraintsRequest
   * @returns GetTemplateParameterConstraintsResponse
   */
  async getTemplateParameterConstraints(request: $_model.GetTemplateParameterConstraintsRequest): Promise<$_model.GetTemplateParameterConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * 推荐参数
   * 
   * @param request - GetTemplateRecommendParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateRecommendParametersResponse
   */
  async getTemplateRecommendParametersWithOptions(request: $_model.GetTemplateRecommendParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateRecommendParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateRecommendParameters",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateRecommendParametersResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateRecommendParametersResponse({}));
  }

  /**
   * 推荐参数
   * 
   * @param request - GetTemplateRecommendParametersRequest
   * @returns GetTemplateRecommendParametersResponse
   */
  async getTemplateRecommendParameters(request: $_model.GetTemplateRecommendParametersRequest): Promise<$_model.GetTemplateRecommendParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateRecommendParametersWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a resource scenario.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the resource scenario `ts-7f7a704cf71c49a6****` in the China (Hangzhou) region and display source node data.
   * 
   * @param request - GetTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateScratchResponse
   */
  async getTemplateScratchWithOptions(request: $_model.GetTemplateScratchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateScratchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.showDataOption)) {
      query["ShowDataOption"] = request.showDataOption;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateScratchResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateScratchResponse({}));
  }

  /**
   * Retrieves the details of a resource scenario.
   * 
   * @remarks
   * This topic provides an example of how to query the details of the resource scenario `ts-7f7a704cf71c49a6****` in the China (Hangzhou) region and display source node data.
   * 
   * @param request - GetTemplateScratchRequest
   * @returns GetTemplateScratchResponse
   */
  async getTemplateScratch(request: $_model.GetTemplateScratchRequest): Promise<$_model.GetTemplateScratchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Queries the information about a template resource by using the relevant template, stack, stack group, or change set.
   * 
   * @param request - GetTemplateSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateSummaryResponse
   */
  async getTemplateSummaryWithOptions(request: $_model.GetTemplateSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.templateBody)) {
      query["TemplateBody"] = request.templateBody;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateSummary",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateSummaryResponse({}));
  }

  /**
   * Queries the information about a template resource by using the relevant template, stack, stack group, or change set.
   * 
   * @param request - GetTemplateSummaryRequest
   * @returns GetTemplateSummaryResponse
   */
  async getTemplateSummary(request: $_model.GetTemplateSummaryRequest): Promise<$_model.GetTemplateSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateSummaryWithOptions(request, runtime);
  }

  /**
   * Import stacks from multiple different accounts into a stack group.
   * 
   * @param tmpReq - ImportStacksToStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportStacksToStackGroupResponse
   */
  async importStacksToStackGroupWithOptions(tmpReq: $_model.ImportStacksToStackGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportStacksToStackGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ImportStacksToStackGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!$dara.isNull(tmpReq.resourceDirectoryFolderIds)) {
      request.resourceDirectoryFolderIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceDirectoryFolderIds, "ResourceDirectoryFolderIds", "json");
    }

    if (!$dara.isNull(tmpReq.stackArns)) {
      request.stackArnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stackArns, "StackArns", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!$dara.isNull(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceDirectoryFolderIdsShrink)) {
      query["ResourceDirectoryFolderIds"] = request.resourceDirectoryFolderIdsShrink;
    }

    if (!$dara.isNull(request.stackArnsShrink)) {
      query["StackArns"] = request.stackArnsShrink;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportStacksToStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportStacksToStackGroupResponse>(await this.callApi(params, req, runtime), new $_model.ImportStacksToStackGroupResponse({}));
  }

  /**
   * Import stacks from multiple different accounts into a stack group.
   * 
   * @param request - ImportStacksToStackGroupRequest
   * @returns ImportStacksToStackGroupResponse
   */
  async importStacksToStackGroup(request: $_model.ImportStacksToStackGroupRequest): Promise<$_model.ImportStacksToStackGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importStacksToStackGroupWithOptions(request, runtime);
  }

  /**
   * Queries the events of an AI task.
   * 
   * @param request - ListAITaskEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAITaskEventsResponse
   */
  async listAITaskEventsWithOptions(request: $_model.ListAITaskEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAITaskEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAITaskEvents",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAITaskEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListAITaskEventsResponse({}));
  }

  /**
   * Queries the events of an AI task.
   * 
   * @param request - ListAITaskEventsRequest
   * @returns ListAITaskEventsResponse
   */
  async listAITaskEvents(request: $_model.ListAITaskEventsRequest): Promise<$_model.ListAITaskEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAITaskEventsWithOptions(request, runtime);
  }

  /**
   * Queries a list of AI tasks.
   * 
   * @param request - ListAITasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAITasksResponse
   */
  async listAITasksWithOptions(request: $_model.ListAITasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAITasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAITasks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAITasksResponse>(await this.callApi(params, req, runtime), new $_model.ListAITasksResponse({}));
  }

  /**
   * Queries a list of AI tasks.
   * 
   * @param request - ListAITasksRequest
   * @returns ListAITasksResponse
   */
  async listAITasks(request: $_model.ListAITasksRequest): Promise<$_model.ListAITasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAITasksWithOptions(request, runtime);
  }

  /**
   * Queries the details of created change sets.
   * 
   * @param request - ListChangeSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChangeSetsResponse
   */
  async listChangeSetsWithOptions(request: $_model.ListChangeSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChangeSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeSetId)) {
      query["ChangeSetId"] = request.changeSetId;
    }

    if (!$dara.isNull(request.changeSetName)) {
      query["ChangeSetName"] = request.changeSetName;
    }

    if (!$dara.isNull(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChangeSets",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChangeSetsResponse>(await this.callApi(params, req, runtime), new $_model.ListChangeSetsResponse({}));
  }

  /**
   * Queries the details of created change sets.
   * 
   * @param request - ListChangeSetsRequest
   * @returns ListChangeSetsResponse
   */
  async listChangeSets(request: $_model.ListChangeSetsRequest): Promise<$_model.ListChangeSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChangeSetsWithOptions(request, runtime);
  }

  /**
   * Retrieves the message history and Pipeline snapshot temporary download URL for a specified session by session ID.
   * 
   * @remarks
   * ## Request description
   * - When calling the V2 service, set the `AgentVersion` parameter to `V2`.
   * - This operation only accepts the `SessionId` of the current user\\"s session. It does not directly return a message array. Instead, it returns pre-signed download URLs for `session.jsonl` and `a2a-snapshot.json`.
   * - The download URLs are valid for 1800 seconds (30 minutes). Complete the download within the validity period.
   * - The URLs in the response contain signature parameters. Do not log, share, or cache them for extended periods.
   * - `MaxResults` and `NextToken` are compatibility fields that are not consumed in V2.
   * 
   * @param request - ListChatMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatMessagesResponse
   */
  async listChatMessagesWithOptions(request: $_model.ListChatMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatMessages",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListChatMessagesResponse({}));
  }

  /**
   * Retrieves the message history and Pipeline snapshot temporary download URL for a specified session by session ID.
   * 
   * @remarks
   * ## Request description
   * - When calling the V2 service, set the `AgentVersion` parameter to `V2`.
   * - This operation only accepts the `SessionId` of the current user\\"s session. It does not directly return a message array. Instead, it returns pre-signed download URLs for `session.jsonl` and `a2a-snapshot.json`.
   * - The download URLs are valid for 1800 seconds (30 minutes). Complete the download within the validity period.
   * - The URLs in the response contain signature parameters. Do not log, share, or cache them for extended periods.
   * - `MaxResults` and `NextToken` are compatibility fields that are not consumed in V2.
   * 
   * @param request - ListChatMessagesRequest
   * @returns ListChatMessagesResponse
   */
  async listChatMessages(request: $_model.ListChatMessagesRequest): Promise<$_model.ListChatMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatMessagesWithOptions(request, runtime);
  }

  /**
   * Queries the ROS Agent V2 session list of the current user by paging.
   * 
   * @remarks
   * ## Operation description
   * - Set `AgentVersion` to `V2` when calling the V2 service.
   * - This operation returns only sessions of the current user, sorted by `UpdatedAt` in descending order by default.
   * - Use the `Mode` parameter to filter sessions by mode. Valid values: `IaCCodeNormal` and `IaCCodePipeline`.
   * - Do not reuse an old `NextToken` after switching `Mode`.
   * - Use the `CreatedAt` and `UpdatedAt` fields for time information. The `UpdatedTime` field in the metadata is a compatibility field and is not returned in the current response.
   * - Set the `MaxResults` request parameter to specify the number of entries per page. Valid values: 1 to 100.
   * 
   * @param request - ListChatSessionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChatSessionsResponse
   */
  async listChatSessionsWithOptions(request: $_model.ListChatSessionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChatSessionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChatSessions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChatSessionsResponse>(await this.callApi(params, req, runtime), new $_model.ListChatSessionsResponse({}));
  }

  /**
   * Queries the ROS Agent V2 session list of the current user by paging.
   * 
   * @remarks
   * ## Operation description
   * - Set `AgentVersion` to `V2` when calling the V2 service.
   * - This operation returns only sessions of the current user, sorted by `UpdatedAt` in descending order by default.
   * - Use the `Mode` parameter to filter sessions by mode. Valid values: `IaCCodeNormal` and `IaCCodePipeline`.
   * - Do not reuse an old `NextToken` after switching `Mode`.
   * - Use the `CreatedAt` and `UpdatedAt` fields for time information. The `UpdatedTime` field in the metadata is a compatibility field and is not returned in the current response.
   * - Set the `MaxResults` request parameter to specify the number of entries per page. Valid values: 1 to 100.
   * 
   * @param request - ListChatSessionsRequest
   * @returns ListChatSessionsResponse
   */
  async listChatSessions(request: $_model.ListChatSessionsRequest): Promise<$_model.ListChatSessionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChatSessionsWithOptions(request, runtime);
  }

  /**
   * Queries a diagnostic report.
   * 
   * @param request - ListDiagnosticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosticsResponse
   */
  async listDiagnosticsWithOptions(request: $_model.ListDiagnosticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnosticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diagnosticKey)) {
      query["DiagnosticKey"] = request.diagnosticKey;
    }

    if (!$dara.isNull(request.diagnosticProduct)) {
      query["DiagnosticProduct"] = request.diagnosticProduct;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnostics",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiagnosticsResponse>(await this.callApi(params, req, runtime), new $_model.ListDiagnosticsResponse({}));
  }

  /**
   * Queries a diagnostic report.
   * 
   * @param request - ListDiagnosticsRequest
   * @returns ListDiagnosticsResponse
   */
  async listDiagnostics(request: $_model.ListDiagnosticsRequest): Promise<$_model.ListDiagnosticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDiagnosticsWithOptions(request, runtime);
  }

  /**
   * Queries a list of resource registration records.
   * 
   * @param request - ListResourceTypeRegistrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypeRegistrationsResponse
   */
  async listResourceTypeRegistrationsWithOptions(request: $_model.ListResourceTypeRegistrationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTypeRegistrationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTypeRegistrations",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTypeRegistrationsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceTypeRegistrationsResponse({}));
  }

  /**
   * Queries a list of resource registration records.
   * 
   * @param request - ListResourceTypeRegistrationsRequest
   * @returns ListResourceTypeRegistrationsResponse
   */
  async listResourceTypeRegistrations(request: $_model.ListResourceTypeRegistrationsRequest): Promise<$_model.ListResourceTypeRegistrationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceTypeRegistrationsWithOptions(request, runtime);
  }

  /**
   * Queries the list of resource type versions, including resource types created by the user and those provided by Resource Orchestration Service (ROS).
   * 
   * @param request - ListResourceTypeVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypeVersionsResponse
   */
  async listResourceTypeVersionsWithOptions(request: $_model.ListResourceTypeVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTypeVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTypeVersions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTypeVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceTypeVersionsResponse({}));
  }

  /**
   * Queries the list of resource type versions, including resource types created by the user and those provided by Resource Orchestration Service (ROS).
   * 
   * @param request - ListResourceTypeVersionsRequest
   * @returns ListResourceTypeVersionsResponse
   */
  async listResourceTypeVersions(request: $_model.ListResourceTypeVersionsRequest): Promise<$_model.ListResourceTypeVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceTypeVersionsWithOptions(request, runtime);
  }

  /**
   * Queries the list of supported resource types.
   * 
   * @remarks
   * This topic provides an example of how to query the list of regular resource types supported by ROS.
   * 
   * @param request - ListResourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(request: $_model.ListResourceTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTypes",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceTypesResponse({}));
  }

  /**
   * Queries the list of supported resource types.
   * 
   * @remarks
   * This topic provides an example of how to query the list of regular resource types supported by ROS.
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(request: $_model.ListResourceTypesRequest): Promise<$_model.ListResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries events of a stack and the resources in the stack.
   * 
   * @param request - ListStackEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackEventsResponse
   */
  async listStackEventsWithOptions(request: $_model.ListStackEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackEvents",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListStackEventsResponse({}));
  }

  /**
   * Queries events of a stack and the resources in the stack.
   * 
   * @param request - ListStackEventsRequest
   * @returns ListStackEventsResponse
   */
  async listStackEvents(request: $_model.ListStackEventsRequest): Promise<$_model.ListStackEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackEventsWithOptions(request, runtime);
  }

  /**
   * Queries the results of an operation on a stack group.
   * 
   * @remarks
   * In this example, the operation ID `6da106ca-1784-4a6f-a7e1-e723863d∗∗∗∗` is set to query the results of an operation on a stack group named `MyStackGroup`. The stack group is granted self-managed permissions and created in the China (Hangzhou) region.
   * 
   * @param request - ListStackGroupOperationResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackGroupOperationResultsResponse
   */
  async listStackGroupOperationResultsWithOptions(request: $_model.ListStackGroupOperationResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackGroupOperationResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackGroupOperationResults",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackGroupOperationResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListStackGroupOperationResultsResponse({}));
  }

  /**
   * Queries the results of an operation on a stack group.
   * 
   * @remarks
   * In this example, the operation ID `6da106ca-1784-4a6f-a7e1-e723863d∗∗∗∗` is set to query the results of an operation on a stack group named `MyStackGroup`. The stack group is granted self-managed permissions and created in the China (Hangzhou) region.
   * 
   * @param request - ListStackGroupOperationResultsRequest
   * @returns ListStackGroupOperationResultsResponse
   */
  async listStackGroupOperationResults(request: $_model.ListStackGroupOperationResultsRequest): Promise<$_model.ListStackGroupOperationResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackGroupOperationResultsWithOptions(request, runtime);
  }

  /**
   * Queries the information about stack group operations in an Alibaba Cloud region.
   * 
   * @param request - ListStackGroupOperationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackGroupOperationsResponse
   */
  async listStackGroupOperationsWithOptions(request: $_model.ListStackGroupOperationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackGroupOperationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackGroupOperations",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackGroupOperationsResponse>(await this.callApi(params, req, runtime), new $_model.ListStackGroupOperationsResponse({}));
  }

  /**
   * Queries the information about stack group operations in an Alibaba Cloud region.
   * 
   * @param request - ListStackGroupOperationsRequest
   * @returns ListStackGroupOperationsResponse
   */
  async listStackGroupOperations(request: $_model.ListStackGroupOperationsRequest): Promise<$_model.ListStackGroupOperationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackGroupOperationsWithOptions(request, runtime);
  }

  /**
   * Queries stack groups in a region.
   * 
   * @remarks
   * This example queries stack groups in the ACTIVE state in the China (Hangzhou) region.
   * 
   * @param request - ListStackGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackGroupsResponse
   */
  async listStackGroupsWithOptions(request: $_model.ListStackGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackGroups",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListStackGroupsResponse({}));
  }

  /**
   * Queries stack groups in a region.
   * 
   * @remarks
   * This example queries stack groups in the ACTIVE state in the China (Hangzhou) region.
   * 
   * @param request - ListStackGroupsRequest
   * @returns ListStackGroupsResponse
   */
  async listStackGroups(request: $_model.ListStackGroupsRequest): Promise<$_model.ListStackGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the list of stack instances that are associated with a stack group in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the list of stack instances that are associated with a stack group named `MyStackGroup` is queried. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - ListStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackInstancesResponse
   */
  async listStackInstancesWithOptions(request: $_model.ListStackInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.stackInstanceAccountId)) {
      query["StackInstanceAccountId"] = request.stackInstanceAccountId;
    }

    if (!$dara.isNull(request.stackInstanceRegionId)) {
      query["StackInstanceRegionId"] = request.stackInstanceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListStackInstancesResponse({}));
  }

  /**
   * Queries the list of stack instances that are associated with a stack group in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the list of stack instances that are associated with a stack group named `MyStackGroup` is queried. The stack group is granted self-managed permissions and deployed in the China (Hangzhou) region.
   * 
   * @param request - ListStackInstancesRequest
   * @returns ListStackInstancesResponse
   */
  async listStackInstances(request: $_model.ListStackInstancesRequest): Promise<$_model.ListStackInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackInstancesWithOptions(request, runtime);
  }

  /**
   * Detects stack-related operation risks and returns missing permissions and the causes of the risks.
   * 
   * @remarks
   * The ListStackOperationRisks operation is suitable for the following scenarios:
   * - You want to detect high risks that may arise in resources when you delete a stack that contains the resources, and query the cause of each risk in a resource.
   * - When you create a stack, the creation may fail. In this case, you can call this operation to check which types of permissions that are required to create stacks are missing.
   * 
   * @param request - ListStackOperationRisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackOperationRisksResponse
   */
  async listStackOperationRisksWithOptions(request: $_model.ListStackOperationRisksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackOperationRisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retainAllResources)) {
      query["RetainAllResources"] = request.retainAllResources;
    }

    if (!$dara.isNull(request.retainResources)) {
      query["RetainResources"] = request.retainResources;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackOperationRisks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackOperationRisksResponse>(await this.callApi(params, req, runtime), new $_model.ListStackOperationRisksResponse({}));
  }

  /**
   * Detects stack-related operation risks and returns missing permissions and the causes of the risks.
   * 
   * @remarks
   * The ListStackOperationRisks operation is suitable for the following scenarios:
   * - You want to detect high risks that may arise in resources when you delete a stack that contains the resources, and query the cause of each risk in a resource.
   * - When you create a stack, the creation may fail. In this case, you can call this operation to check which types of permissions that are required to create stacks are missing.
   * 
   * @param request - ListStackOperationRisksRequest
   * @returns ListStackOperationRisksResponse
   */
  async listStackOperationRisks(request: $_model.ListStackOperationRisksRequest): Promise<$_model.ListStackOperationRisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackOperationRisksWithOptions(request, runtime);
  }

  /**
   * The query token. Set this parameter to the NextToken value returned in the last API call.
   * 
   * @param request - ListStackResourceDriftsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackResourceDriftsResponse
   */
  async listStackResourceDriftsWithOptions(request: $_model.ListStackResourceDriftsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackResourceDriftsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceDriftStatus)) {
      query["ResourceDriftStatus"] = request.resourceDriftStatus;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackResourceDrifts",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackResourceDriftsResponse>(await this.callApi(params, req, runtime), new $_model.ListStackResourceDriftsResponse({}));
  }

  /**
   * The query token. Set this parameter to the NextToken value returned in the last API call.
   * 
   * @param request - ListStackResourceDriftsRequest
   * @returns ListStackResourceDriftsResponse
   */
  async listStackResourceDrifts(request: $_model.ListStackResourceDriftsRequest): Promise<$_model.ListStackResourceDriftsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackResourceDriftsWithOptions(request, runtime);
  }

  /**
   * Queries the resources in a specified stack.
   * 
   * @remarks
   * This topic provides an example on how to query the resources in a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region.
   * 
   * @param request - ListStackResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackResourcesResponse
   */
  async listStackResourcesWithOptions(request: $_model.ListStackResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListStackResourcesResponse({}));
  }

  /**
   * Queries the resources in a specified stack.
   * 
   * @remarks
   * This topic provides an example on how to query the resources in a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****` in the China (Hangzhou) region.
   * 
   * @param request - ListStackResourcesRequest
   * @returns ListStackResourcesResponse
   */
  async listStackResources(request: $_model.ListStackResourcesRequest): Promise<$_model.ListStackResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStackResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the list of stacks.
   * 
   * @remarks
   * ### Operation description
   * This topic provides an example of how to query the list of stacks in the China (Hangzhou) region.
   * 
   * @param request - ListStacksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStacksResponse
   */
  async listStacksWithOptions(request: $_model.ListStacksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStacksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentStackId)) {
      query["ParentStackId"] = request.parentStackId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.showNestedStack)) {
      query["ShowNestedStack"] = request.showNestedStack;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.stackIds)) {
      query["StackIds"] = request.stackIds;
    }

    if (!$dara.isNull(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStacks",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStacksResponse>(await this.callApi(params, req, runtime), new $_model.ListStacksResponse({}));
  }

  /**
   * Queries the list of stacks.
   * 
   * @remarks
   * ### Operation description
   * This topic provides an example of how to query the list of stacks in the China (Hangzhou) region.
   * 
   * @param request - ListStacksRequest
   * @returns ListStacksResponse
   */
  async listStacks(request: $_model.ListStacksRequest): Promise<$_model.ListStacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStacksWithOptions(request, runtime);
  }

  /**
   * Queries for an overview.
   * 
   * @remarks
   * ### Usage notes
   * This topic provides an example of how to query a list of stacks in the China (Hangzhou) region.
   * 
   * @param request - ListSummariesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSummariesResponse
   */
  async listSummariesWithOptions(request: $_model.ListSummariesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSummariesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSummaries",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSummariesResponse>(await this.callApi(params, req, runtime), new $_model.ListSummariesResponse({}));
  }

  /**
   * Queries for an overview.
   * 
   * @remarks
   * ### Usage notes
   * This topic provides an example of how to query a list of stacks in the China (Hangzhou) region.
   * 
   * @param request - ListSummariesRequest
   * @returns ListSummariesResponse
   */
  async listSummaries(request: $_model.ListSummariesRequest): Promise<$_model.ListSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSummariesWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys for stacks or templates in a specified region.
   * 
   * @remarks
   * This topic provides an example of how to query the tag keys that are attached to a stack in the China (Hangzhou) region.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * Queries the tag keys for stacks or templates in a specified region.
   * 
   * @remarks
   * This topic provides an example of how to query the tag keys that are attached to a stack in the China (Hangzhou) region.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * ###
   * - To specify the query object, specify ResourceId or Tag in the request. Tag consists of Key and Value.
   * - If you specify Tag and ResourceId, ROS resources that match both the parameters are returned.
   * This topic provides an example on how to query the tags that are added to a stack. In this example, the stack ID is `6bc589b5-9c02-4944-8fc3-f3624234****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * ###
   * - To specify the query object, specify ResourceId or Tag in the request. Tag consists of Key and Value.
   * - If you specify Tag and ResourceId, ROS resources that match both the parameters are returned.
   * This topic provides an example on how to query the tags that are added to a stack. In this example, the stack ID is `6bc589b5-9c02-4944-8fc3-f3624234****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag values that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the tag values of `TagKey1` that is added to a stack in the China (Hangzhou) region are queried.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagValuesResponse({}));
  }

  /**
   * Queries the tag values that are added to resources in a template or stack in an Alibaba Cloud region.
   * 
   * @remarks
   * In this example, the tag values of `TagKey1` that is added to a stack in the China (Hangzhou) region are queried.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries a list of resource scenarios.
   * 
   * @remarks
   * This topic provides an example of how to query the list of resource scenarios in the China (Hangzhou) region. The response shows that there are two resource scenarios in the China (Hangzhou) region: resource management and resource replication.
   * 
   * @param request - ListTemplateScratchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateScratchesResponse
   */
  async listTemplateScratchesWithOptions(request: $_model.ListTemplateScratchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateScratchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!$dara.isNull(request.templateScratchType)) {
      query["TemplateScratchType"] = request.templateScratchType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplateScratches",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateScratchesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateScratchesResponse({}));
  }

  /**
   * Queries a list of resource scenarios.
   * 
   * @remarks
   * This topic provides an example of how to query the list of resource scenarios in the China (Hangzhou) region. The response shows that there are two resource scenarios in the China (Hangzhou) region: resource management and resource replication.
   * 
   * @param request - ListTemplateScratchesRequest
   * @returns ListTemplateScratchesResponse
   */
  async listTemplateScratches(request: $_model.ListTemplateScratchesRequest): Promise<$_model.ListTemplateScratchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplateScratchesWithOptions(request, runtime);
  }

  /**
   * Queries the list of versions of a template.
   * 
   * @param request - ListTemplateVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateVersionsResponse
   */
  async listTemplateVersionsWithOptions(request: $_model.ListTemplateVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplateVersions",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateVersionsResponse({}));
  }

  /**
   * Queries the list of versions of a template.
   * 
   * @param request - ListTemplateVersionsRequest
   * @returns ListTemplateVersionsResponse
   */
  async listTemplateVersions(request: $_model.ListTemplateVersionsRequest): Promise<$_model.ListTemplateVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplateVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of private and shared templates.
   * 
   * @param request - ListTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(request: $_model.ListTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.includeTags)) {
      query["IncludeTags"] = request.includeTags;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplates",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatesResponse({}));
  }

  /**
   * Queries a list of private and shared templates.
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * Moves a resource to a specific resource group.
   * 
   * @remarks
   * In this example, a stack deployed in the `China (Hangzhou)` region is moved to a specific resource group. The ID of the stack is `4e8611cb-251e-42b7-b9cb-3496362c****` and the ID of the resource group is `rg-acfm3peow3k****`.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: $_model.MoveResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * Moves a resource to a specific resource group.
   * 
   * @remarks
   * In this example, a stack deployed in the `China (Hangzhou)` region is moved to a specific resource group. The ID of the stack is `4e8611cb-251e-42b7-b9cb-3496362c****` and the ID of the resource group is `rg-acfm3peow3k****`.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Previews the information about a stack that you want to create or update based on a template. You can call this operation to verify whether the template resources are valid.
   * 
   * @remarks
   * In this example, a stack named `MyStack` is created in the China (Hangzhou) region and previewed. The `TemplateBody` parameter of the stack is set to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - PreviewStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewStackResponse
   */
  async previewStackWithOptions(request: $_model.PreviewStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!$dara.isNull(request.enablePreConfig)) {
      query["EnablePreConfig"] = request.enablePreConfig;
    }

    if (!$dara.isNull(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.stackName)) {
      query["StackName"] = request.stackName;
    }

    if (!$dara.isNull(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!$dara.isNull(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!$dara.isNull(request.taintResources)) {
      query["TaintResources"] = request.taintResources;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    if (!$dara.isNull(request.templateScratchRegionId)) {
      query["TemplateScratchRegionId"] = request.templateScratchRegionId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!$dara.isNull(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    if (!$dara.isNull(request.usePreviousParameters)) {
      query["UsePreviousParameters"] = request.usePreviousParameters;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewStackResponse>(await this.callApi(params, req, runtime), new $_model.PreviewStackResponse({}));
  }

  /**
   * Previews the information about a stack that you want to create or update based on a template. You can call this operation to verify whether the template resources are valid.
   * 
   * @remarks
   * In this example, a stack named `MyStack` is created in the China (Hangzhou) region and previewed. The `TemplateBody` parameter of the stack is set to `{"ROSTemplateFormatVersion":"2015-09-01"}`.
   * 
   * @param request - PreviewStackRequest
   * @returns PreviewStackResponse
   */
  async previewStack(request: $_model.PreviewStackRequest): Promise<$_model.PreviewStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.previewStackWithOptions(request, runtime);
  }

  /**
   * Creates a new resource type, or creates a new version for an existing resource type.
   * 
   * @remarks
   * - Versions increase from v1.
   * - If you create a new resource type, v1 is used as the default version of the resource type. You can call the SetResourceType operation to change the default version of a resource type.
   * 
   * @param request - RegisterResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterResourceTypeResponse
   */
  async registerResourceTypeWithOptions(request: $_model.RegisterResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.RegisterResourceTypeResponse({}));
  }

  /**
   * Creates a new resource type, or creates a new version for an existing resource type.
   * 
   * @remarks
   * - Versions increase from v1.
   * - If you create a new resource type, v1 is used as the default version of the resource type. You can call the SetResourceType operation to change the default version of a resource type.
   * 
   * @param request - RegisterResourceTypeRequest
   * @returns RegisterResourceTypeResponse
   */
  async registerResourceType(request: $_model.RegisterResourceTypeRequest): Promise<$_model.RegisterResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerResourceTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the deletion protection setting for a stack.
   * 
   * @param request - SetDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeletionProtectionResponse
   */
  async setDeletionProtectionWithOptions(request: $_model.SetDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDeletionProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDeletionProtection",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDeletionProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetDeletionProtectionResponse({}));
  }

  /**
   * Modifies the deletion protection setting for a stack.
   * 
   * @param request - SetDeletionProtectionRequest
   * @returns SetDeletionProtectionResponse
   */
  async setDeletionProtection(request: $_model.SetDeletionProtectionRequest): Promise<$_model.SetDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a resource type or a version of that type.
   * 
   * @param request - SetResourceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetResourceTypeResponse
   */
  async setResourceTypeWithOptions(request: $_model.SetResourceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetResourceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultVersionId)) {
      query["DefaultVersionId"] = request.defaultVersionId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetResourceType",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetResourceTypeResponse>(await this.callApi(params, req, runtime), new $_model.SetResourceTypeResponse({}));
  }

  /**
   * Modifies the description of a resource type or a version of that type.
   * 
   * @param request - SetResourceTypeRequest
   * @returns SetResourceTypeResponse
   */
  async setResourceType(request: $_model.SetResourceTypeRequest): Promise<$_model.SetResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setResourceTypeWithOptions(request, runtime);
  }

  /**
   * Configures a stack policy for a stack.
   * 
   * @remarks
   * In this example, a stack policy is configured for a stack deployed in the `China (Hangzhou)` region whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The URL to the stack policy body is `oss://ros/stack-policy/demo`.
   * 
   * @param request - SetStackPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetStackPolicyResponse
   */
  async setStackPolicyWithOptions(request: $_model.SetStackPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetStackPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!$dara.isNull(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetStackPolicy",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetStackPolicyResponse>(await this.callApi(params, req, runtime), new $_model.SetStackPolicyResponse({}));
  }

  /**
   * Configures a stack policy for a stack.
   * 
   * @remarks
   * In this example, a stack policy is configured for a stack deployed in the `China (Hangzhou)` region whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The URL to the stack policy body is `oss://ros/stack-policy/demo`.
   * 
   * @param request - SetStackPolicyRequest
   * @returns SetStackPolicyResponse
   */
  async setStackPolicy(request: $_model.SetStackPolicyRequest): Promise<$_model.SetStackPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setStackPolicyWithOptions(request, runtime);
  }

  /**
   * Shares or unshares a template.
   * 
   * @remarks
   * In this example, the template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is shared with an Alibaba Cloud account. The ID of the Alibaba Cloud account is `151266687691****`.
   * > The recipient Alibaba Cloud account (ID: `151266687691****`) can authorize RAM users to use the shared template.
   * 
   * @param request - SetTemplatePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetTemplatePermissionResponse
   */
  async setTemplatePermissionWithOptions(request: $_model.SetTemplatePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetTemplatePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountIds)) {
      query["AccountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.shareOption)) {
      query["ShareOption"] = request.shareOption;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!$dara.isNull(request.versionOption)) {
      query["VersionOption"] = request.versionOption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetTemplatePermission",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetTemplatePermissionResponse>(await this.callApi(params, req, runtime), new $_model.SetTemplatePermissionResponse({}));
  }

  /**
   * Shares or unshares a template.
   * 
   * @remarks
   * In this example, the template whose ID is `5ecd1e10-b0e9-4389-a565-e4c15efc****` is shared with an Alibaba Cloud account. The ID of the Alibaba Cloud account is `151266687691****`.
   * > The recipient Alibaba Cloud account (ID: `151266687691****`) can authorize RAM users to use the shared template.
   * 
   * @param request - SetTemplatePermissionRequest
   * @returns SetTemplatePermissionResponse
   */
  async setTemplatePermission(request: $_model.SetTemplatePermissionRequest): Promise<$_model.SetTemplatePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setTemplatePermissionWithOptions(request, runtime);
  }

  /**
   * Sends a signal to a resource in a stack.
   * 
   * @param request - SignalResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SignalResourceResponse
   */
  async signalResourceWithOptions(request: $_model.SignalResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SignalResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.uniqueId)) {
      query["UniqueId"] = request.uniqueId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SignalResource",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SignalResourceResponse>(await this.callApi(params, req, runtime), new $_model.SignalResourceResponse({}));
  }

  /**
   * Sends a signal to a resource in a stack.
   * 
   * @param request - SignalResourceRequest
   * @returns SignalResourceResponse
   */
  async signalResource(request: $_model.SignalResourceRequest): Promise<$_model.SignalResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.signalResourceWithOptions(request, runtime);
  }

  /**
   * Returns agent events through SSE streaming. Supports creating a new session or continuing an existing session.
   * 
   * @remarks
   * ## Operation description
   * - When calling this API, ensure that `AgentVersion` is set to `V2`.
   * - If `SessionId` is not provided, a new session is created. If `SessionId` is provided, the existing session is continued.
   * - The default value of `Mode` is `IaCCodeNormal`. Only `IaCCodeNormal` and `IaCCodePipeline` modes are supported. An existing session cannot switch modes.
   * - `EnableThinking` defaults to `true`, which specifies whether to output thinking content. This can be reset in each request.
   * - A maximum of 5 image attachments are supported. Each attachment can be up to 5 MiB and must be accessed through an OssObjectKey under the current user directory.
   * - `ClientContext` is a page context JSON string with a maximum size of 16 KiB. It is valid only in `IaCCodeNormal` mode.
   * - The response type is `text/event-stream`. A successful HTTP connection does not indicate that the operation is complete. Continue reading SSE events until a terminal state is reached.
   * - When the `TASK_STATE_INPUT_REQUIRED` status is received, it indicates that user input is required. This is not a failure state.
   * 
   * @param request - StartChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartChatResponse
   */
  async *startChatWithSSE(request: $_model.StartChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.StartChatResponse, any, unknown> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.attachments)) {
      query["Attachments"] = request.attachments;
    }

    if (!$dara.isNull(request.enablePartialMessage)) {
      query["EnablePartialMessage"] = request.enablePartialMessage;
    }

    if (!$dara.isNull(request.enableThinking)) {
      query["EnableThinking"] = request.enableThinking;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartChat",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
        yield $dara.cast<$_model.StartChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.StartChatResponse({}));
      }

    }
  }

  /**
   * Returns agent events through SSE streaming. Supports creating a new session or continuing an existing session.
   * 
   * @remarks
   * ## Operation description
   * - When calling this API, ensure that `AgentVersion` is set to `V2`.
   * - If `SessionId` is not provided, a new session is created. If `SessionId` is provided, the existing session is continued.
   * - The default value of `Mode` is `IaCCodeNormal`. Only `IaCCodeNormal` and `IaCCodePipeline` modes are supported. An existing session cannot switch modes.
   * - `EnableThinking` defaults to `true`, which specifies whether to output thinking content. This can be reset in each request.
   * - A maximum of 5 image attachments are supported. Each attachment can be up to 5 MiB and must be accessed through an OssObjectKey under the current user directory.
   * - `ClientContext` is a page context JSON string with a maximum size of 16 KiB. It is valid only in `IaCCodeNormal` mode.
   * - The response type is `text/event-stream`. A successful HTTP connection does not indicate that the operation is complete. Continue reading SSE events until a terminal state is reached.
   * - When the `TASK_STATE_INPUT_REQUIRED` status is received, it indicates that user input is required. This is not a failure state.
   * 
   * @param request - StartChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartChatResponse
   */
  async startChatWithOptions(request: $_model.StartChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.attachments)) {
      query["Attachments"] = request.attachments;
    }

    if (!$dara.isNull(request.enablePartialMessage)) {
      query["EnablePartialMessage"] = request.enablePartialMessage;
    }

    if (!$dara.isNull(request.enableThinking)) {
      query["EnableThinking"] = request.enableThinking;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartChat",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "string",
    });
    return $dara.cast<$_model.StartChatResponse>(await this.callApi(params, req, runtime), new $_model.StartChatResponse({}));
  }

  /**
   * Returns agent events through SSE streaming. Supports creating a new session or continuing an existing session.
   * 
   * @remarks
   * ## Operation description
   * - When calling this API, ensure that `AgentVersion` is set to `V2`.
   * - If `SessionId` is not provided, a new session is created. If `SessionId` is provided, the existing session is continued.
   * - The default value of `Mode` is `IaCCodeNormal`. Only `IaCCodeNormal` and `IaCCodePipeline` modes are supported. An existing session cannot switch modes.
   * - `EnableThinking` defaults to `true`, which specifies whether to output thinking content. This can be reset in each request.
   * - A maximum of 5 image attachments are supported. Each attachment can be up to 5 MiB and must be accessed through an OssObjectKey under the current user directory.
   * - `ClientContext` is a page context JSON string with a maximum size of 16 KiB. It is valid only in `IaCCodeNormal` mode.
   * - The response type is `text/event-stream`. A successful HTTP connection does not indicate that the operation is complete. Continue reading SSE events until a terminal state is reached.
   * - When the `TASK_STATE_INPUT_REQUIRED` status is received, it indicates that user input is required. This is not a failure state.
   * 
   * @param request - StartChatRequest
   * @returns StartChatResponse
   */
  async startChat(request: $_model.StartChatRequest): Promise<$_model.StartChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startChatWithOptions(request, runtime);
  }

  /**
   * Stops a running task in a specified ROS Agent V2 session.
   * 
   * @remarks
   * ## Request description
   * - When calling this operation, ensure that `AgentVersion` is set to `V2` to route to the correct backend service.
   * - `SessionId` is required to identify the specific session to stop.
   * - In a multi-process environment, if the target session is within the calling process, a cancel signal is sent directly and the system waits for cleanup to complete. If the session is managed by another process, a cancel request is sent to the remote end through the persisted active session state, and a `Stopping` status is returned immediately.
   * - When no active task exists, the API returns the `NoActiveStream` status code, which is not considered an error condition.
   * 
   * @param request - StopChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopChatResponse
   */
  async stopChatWithOptions(request: $_model.StopChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopChatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopChat",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopChatResponse>(await this.callApi(params, req, runtime), new $_model.StopChatResponse({}));
  }

  /**
   * Stops a running task in a specified ROS Agent V2 session.
   * 
   * @remarks
   * ## Request description
   * - When calling this operation, ensure that `AgentVersion` is set to `V2` to route to the correct backend service.
   * - `SessionId` is required to identify the specific session to stop.
   * - In a multi-process environment, if the target session is within the calling process, a cancel signal is sent directly and the system waits for cleanup to complete. If the session is managed by another process, a cancel request is sent to the remote end through the persisted active session state, and a `Stopping` status is returned immediately.
   * - When no active task exists, the API returns the `NoActiveStream` status code, which is not considered an error condition.
   * 
   * @param request - StopChatRequest
   * @returns StopChatResponse
   */
  async stopChat(request: $_model.StopChatRequest): Promise<$_model.StopChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopChatWithOptions(request, runtime);
  }

  /**
   * Stops an ongoing operation in a stack group.
   * 
   * @remarks
   * This example stops the stack group operation `6da106ca-1784-4a6f-a7e1-e723863****` in the China (Hangzhou) region.
   * 
   * @param request - StopStackGroupOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopStackGroupOperationResponse
   */
  async stopStackGroupOperationWithOptions(request: $_model.StopStackGroupOperationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopStackGroupOperationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopStackGroupOperation",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopStackGroupOperationResponse>(await this.callApi(params, req, runtime), new $_model.StopStackGroupOperationResponse({}));
  }

  /**
   * Stops an ongoing operation in a stack group.
   * 
   * @remarks
   * This example stops the stack group operation `6da106ca-1784-4a6f-a7e1-e723863****` in the China (Hangzhou) region.
   * 
   * @param request - StopStackGroupOperationRequest
   * @returns StopStackGroupOperationResponse
   */
  async stopStackGroupOperation(request: $_model.StopStackGroupOperationRequest): Promise<$_model.StopStackGroupOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopStackGroupOperationWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags to resources.
   * 
   * @remarks
   * This topic provides an example of how to create and add a tag to a resource stack in China (Hangzhou) region. The resource stack ID is `7fee80e1-8c48-4c2f-8300-0f6dc40b****`, with the tag key of `FinanceDept` and the tag value of `FinanceJoshua`.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Creates and adds tags to resources.
   * 
   * @remarks
   * This topic provides an example of how to create and add a tag to a resource stack in China (Hangzhou) region. The resource stack ID is `7fee80e1-8c48-4c2f-8300-0f6dc40b****`, with the tag key of `FinanceDept` and the tag value of `FinanceJoshua`.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources and then deletes the tags.
   * 
   * @remarks
   * This topic provides an example on how to remove all tags from a stack that is deployed in the China (Hangzhou) region. In this example, the stack ID is `46ec7b78-9d5e-4b21-aefd-448c90aa****`.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources and then deletes the tags.
   * 
   * @remarks
   * This topic provides an example on how to remove all tags from a stack that is deployed in the China (Hangzhou) region. In this example, the stack ID is `46ec7b78-9d5e-4b21-aefd-448c90aa****`.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the resource information of a created stack.
   * 
   * @remarks
   * The values of Parameters and UsePreviousParameters are related. If a parameter defined in the template is not specified in Parameters:  
   * - If UsePreviousParameters is set to false: the default value of the parameter in the template is used if available. If no default value exists, you must specify the parameter in Parameters.  
   * - If UsePreviousParameters is set to true: if the parameter was specified when the stack was created, the specified value is used. If the parameter was not specified when the stack was created and the parameter has a default value in the template, the default value is used.  
   *   
   * This topic provides an example to show how to update the template content of a stack in the China (Beijing) region to `{"ROSTemplateFormatVersion": "2015-09-01"}`. The stack ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`.
   * 
   * @param request - UpdateStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackResponse
   */
  async updateStackWithOptions(request: $_model.UpdateStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.disableRollback)) {
      query["DisableRollback"] = request.disableRollback;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.dryRunOptions)) {
      query["DryRunOptions"] = request.dryRunOptions;
    }

    if (!$dara.isNull(request.parallelism)) {
      query["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replacementOption)) {
      query["ReplacementOption"] = request.replacementOption;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.stackPolicyBody)) {
      query["StackPolicyBody"] = request.stackPolicyBody;
    }

    if (!$dara.isNull(request.stackPolicyDuringUpdateBody)) {
      query["StackPolicyDuringUpdateBody"] = request.stackPolicyDuringUpdateBody;
    }

    if (!$dara.isNull(request.stackPolicyDuringUpdateURL)) {
      query["StackPolicyDuringUpdateURL"] = request.stackPolicyDuringUpdateURL;
    }

    if (!$dara.isNull(request.stackPolicyURL)) {
      query["StackPolicyURL"] = request.stackPolicyURL;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.taintResources)) {
      query["TaintResources"] = request.taintResources;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!$dara.isNull(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    if (!$dara.isNull(request.usePreviousParameters)) {
      query["UsePreviousParameters"] = request.usePreviousParameters;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStack",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStackResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStackResponse({}));
  }

  /**
   * Updates the resource information of a created stack.
   * 
   * @remarks
   * The values of Parameters and UsePreviousParameters are related. If a parameter defined in the template is not specified in Parameters:  
   * - If UsePreviousParameters is set to false: the default value of the parameter in the template is used if available. If no default value exists, you must specify the parameter in Parameters.  
   * - If UsePreviousParameters is set to true: if the parameter was specified when the stack was created, the specified value is used. If the parameter was not specified when the stack was created and the parameter has a default value in the template, the default value is used.  
   *   
   * This topic provides an example to show how to update the template content of a stack in the China (Beijing) region to `{"ROSTemplateFormatVersion": "2015-09-01"}`. The stack ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`.
   * 
   * @param request - UpdateStackRequest
   * @returns UpdateStackResponse
   */
  async updateStack(request: $_model.UpdateStackRequest): Promise<$_model.UpdateStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStackWithOptions(request, runtime);
  }

  /**
   * Updates an existing stack group.
   * 
   * @remarks
   * This topic provides an example of how to update the template of the stack group `MyStackGroup` to `{"ROSTemplateFormatVersion": "2015-09-01"}`. The stack group is in the China (Hangzhou) region and uses self-managed permissions.
   * 
   * @param tmpReq - UpdateStackGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackGroupResponse
   */
  async updateStackGroupWithOptions(tmpReq: $_model.UpdateStackGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStackGroupResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStackGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.autoDeployment)) {
      request.autoDeploymentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.autoDeployment, "AutoDeployment", "json");
    }

    if (!$dara.isNull(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!$dara.isNull(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.administrationRoleName)) {
      query["AdministrationRoleName"] = request.administrationRoleName;
    }

    if (!$dara.isNull(request.autoDeploymentShrink)) {
      query["AutoDeployment"] = request.autoDeploymentShrink;
    }

    if (!$dara.isNull(request.capabilities)) {
      query["Capabilities"] = request.capabilities;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deploymentOptions)) {
      query["DeploymentOptions"] = request.deploymentOptions;
    }

    if (!$dara.isNull(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionRoleName)) {
      query["ExecutionRoleName"] = request.executionRoleName;
    }

    if (!$dara.isNull(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!$dara.isNull(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.permissionModel)) {
      query["PermissionModel"] = request.permissionModel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStackGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStackGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStackGroupResponse({}));
  }

  /**
   * Updates an existing stack group.
   * 
   * @remarks
   * This topic provides an example of how to update the template of the stack group `MyStackGroup` to `{"ROSTemplateFormatVersion": "2015-09-01"}`. The stack group is in the China (Hangzhou) region and uses self-managed permissions.
   * 
   * @param request - UpdateStackGroupRequest
   * @returns UpdateStackGroupResponse
   */
  async updateStackGroup(request: $_model.UpdateStackGroupRequest): Promise<$_model.UpdateStackGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStackGroupWithOptions(request, runtime);
  }

  /**
   * Updates stack instances for one or more accounts in specified regions.
   * 
   * @remarks
   * This topic provides an example of how to update stacks for the stack group `MyStackGroup`, which is in the China (Hangzhou) region and uses self-managed permissions. The stacks are updated for the Alibaba Cloud accounts `151266687691****` and `141261387191****` in the China (Hangzhou) and China (Beijing) regions.
   * 
   * @param tmpReq - UpdateStackInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackInstancesResponse
   */
  async updateStackInstancesWithOptions(tmpReq: $_model.UpdateStackInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStackInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStackInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "AccountIds", "json");
    }

    if (!$dara.isNull(tmpReq.deploymentTargets)) {
      request.deploymentTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deploymentTargets, "DeploymentTargets", "json");
    }

    if (!$dara.isNull(tmpReq.operationPreferences)) {
      request.operationPreferencesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operationPreferences, "OperationPreferences", "json");
    }

    if (!$dara.isNull(tmpReq.regionIds)) {
      request.regionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regionIds, "RegionIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["AccountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deploymentTargetsShrink)) {
      query["DeploymentTargets"] = request.deploymentTargetsShrink;
    }

    if (!$dara.isNull(request.operationDescription)) {
      query["OperationDescription"] = request.operationDescription;
    }

    if (!$dara.isNull(request.operationPreferencesShrink)) {
      query["OperationPreferences"] = request.operationPreferencesShrink;
    }

    if (!$dara.isNull(request.parameterOverrides)) {
      query["ParameterOverrides"] = request.parameterOverrides;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionIdsShrink)) {
      query["RegionIds"] = request.regionIdsShrink;
    }

    if (!$dara.isNull(request.stackGroupName)) {
      query["StackGroupName"] = request.stackGroupName;
    }

    if (!$dara.isNull(request.timeoutInMinutes)) {
      query["TimeoutInMinutes"] = request.timeoutInMinutes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStackInstances",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStackInstancesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStackInstancesResponse({}));
  }

  /**
   * Updates stack instances for one or more accounts in specified regions.
   * 
   * @remarks
   * This topic provides an example of how to update stacks for the stack group `MyStackGroup`, which is in the China (Hangzhou) region and uses self-managed permissions. The stacks are updated for the Alibaba Cloud accounts `151266687691****` and `141261387191****` in the China (Hangzhou) and China (Beijing) regions.
   * 
   * @param request - UpdateStackInstancesRequest
   * @returns UpdateStackInstancesResponse
   */
  async updateStackInstances(request: $_model.UpdateStackInstancesRequest): Promise<$_model.UpdateStackInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStackInstancesWithOptions(request, runtime);
  }

  /**
   * Eliminates stack drifts by performing drift detection.
   * 
   * @remarks
   * Limits: You can eliminate only drift on stacks that have drifted. You must call the [DetectStackDrift](https://help.aliyun.com/document_detail/155094.html) operation to perform drift detection on a stack, call the [GetStackDriftDetectionStatus](https://help.aliyun.com/document_detail/155097.html) operation to query the drift status of the stack to make sure that the stack has drifted, and then call the UpdateStackTemplateByResources operation to eliminate drift.
   * In this topic, drift is eliminated for a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - UpdateStackTemplateByResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackTemplateByResourcesResponse
   */
  async updateStackTemplateByResourcesWithOptions(request: $_model.UpdateStackTemplateByResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStackTemplateByResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.logicalResourceId)) {
      query["LogicalResourceId"] = request.logicalResourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stackId)) {
      query["StackId"] = request.stackId;
    }

    if (!$dara.isNull(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStackTemplateByResources",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStackTemplateByResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStackTemplateByResourcesResponse({}));
  }

  /**
   * Eliminates stack drifts by performing drift detection.
   * 
   * @remarks
   * Limits: You can eliminate only drift on stacks that have drifted. You must call the [DetectStackDrift](https://help.aliyun.com/document_detail/155094.html) operation to perform drift detection on a stack, call the [GetStackDriftDetectionStatus](https://help.aliyun.com/document_detail/155097.html) operation to query the drift status of the stack to make sure that the stack has drifted, and then call the UpdateStackTemplateByResources operation to eliminate drift.
   * In this topic, drift is eliminated for a stack whose ID is `4a6c9851-3b0f-4f5f-b4ca-a14bf691****`. The stack is deployed in the China (Hangzhou) region.
   * 
   * @param request - UpdateStackTemplateByResourcesRequest
   * @returns UpdateStackTemplateByResourcesResponse
   */
  async updateStackTemplateByResources(request: $_model.UpdateStackTemplateByResourcesRequest): Promise<$_model.UpdateStackTemplateByResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStackTemplateByResourcesWithOptions(request, runtime);
  }

  /**
   * Update Template
   * 
   * @remarks
   * When updating a template, please note:
   * - If you specify `TemplateBody` or `TemplateURL`, the template version will be incremented by 1 after a successful update. For example, the version changes from v1 to v2.
   * - If neither `TemplateBody` nor `TemplateURL` is specified, the template version remains unchanged.
   * - A template can have up to 100 versions. If the version limit is reached, the template update will fail, and you need to recreate the template.
   * 
   * @param request - UpdateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(request: $_model.UpdateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.isDraft)) {
      query["IsDraft"] = request.isDraft;
    }

    if (!$dara.isNull(request.rotateStrategy)) {
      query["RotateStrategy"] = request.rotateStrategy;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.validationOptions)) {
      query["ValidationOptions"] = request.validationOptions;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * Update Template
   * 
   * @remarks
   * When updating a template, please note:
   * - If you specify `TemplateBody` or `TemplateURL`, the template version will be incremented by 1 after a successful update. For example, the version changes from v1 to v2.
   * - If neither `TemplateBody` nor `TemplateURL` is specified, the template version remains unchanged.
   * - A template can have up to 100 versions. If the version limit is reached, the template update will fail, and you need to recreate the template.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * Updates a scenario.
   * 
   * @remarks
   * ### [](#)Resource replication scenario
   * Resource Orchestration Service (ROS) allows you to update a resource replication scenario. The updates that you make to a resource replication scenario do not affect the stack that is generated by using the resource scenario. You can call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource migration scenario
   * - If you want to update a resource migration scenario in which the migrated source resources are retained, you can delete the source resources to manage the updated resource migration scenario. You can also call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   *   \\*\\*
   *   **Note** Make sure that the source resources that you want to delete from a resource migration scenario are associated only with the resource scenario. Otherwise, the source resources fail to be deleted.
   * - If you want to update a resource migration scenario in which the migrated source resources are deleted, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource management scenario
   * If you want to update a resource management scenario after you use the resource scenario to manage resources, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource detection scenario
   * After you update a resource detection scenario, ROS obtains the most recent data from Resource Center and renders the architecture diagram.
   * This topic provides an example on how to update a resource scenario. In this example, the ID of a virtual private cloud (VPC) in a resource scenario whose ID is `ts-7f7a704cf71c49a6****` is updated to `vpc-bp1m6fww66xbntjyc****`.
   * 
   * @param tmpReq - UpdateTemplateScratchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateScratchResponse
   */
  async updateTemplateScratchWithOptions(tmpReq: $_model.UpdateTemplateScratchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateScratchResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTemplateScratchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.preferenceParameters)) {
      request.preferenceParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.preferenceParameters, "PreferenceParameters", "json");
    }

    if (!$dara.isNull(tmpReq.sourceResourceGroup)) {
      request.sourceResourceGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResourceGroup, "SourceResourceGroup", "json");
    }

    if (!$dara.isNull(tmpReq.sourceResources)) {
      request.sourceResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceResources, "SourceResources", "json");
    }

    if (!$dara.isNull(tmpReq.sourceTag)) {
      request.sourceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceTag, "SourceTag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionMode)) {
      query["ExecutionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.logicalIdStrategy)) {
      query["LogicalIdStrategy"] = request.logicalIdStrategy;
    }

    if (!$dara.isNull(request.preferenceParametersShrink)) {
      query["PreferenceParameters"] = request.preferenceParametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourceResourceGroupShrink)) {
      query["SourceResourceGroup"] = request.sourceResourceGroupShrink;
    }

    if (!$dara.isNull(request.sourceResourcesShrink)) {
      query["SourceResources"] = request.sourceResourcesShrink;
    }

    if (!$dara.isNull(request.sourceTagShrink)) {
      query["SourceTag"] = request.sourceTagShrink;
    }

    if (!$dara.isNull(request.templateScratchId)) {
      query["TemplateScratchId"] = request.templateScratchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplateScratch",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateScratchResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateScratchResponse({}));
  }

  /**
   * Updates a scenario.
   * 
   * @remarks
   * ### [](#)Resource replication scenario
   * Resource Orchestration Service (ROS) allows you to update a resource replication scenario. The updates that you make to a resource replication scenario do not affect the stack that is generated by using the resource scenario. You can call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource migration scenario
   * - If you want to update a resource migration scenario in which the migrated source resources are retained, you can delete the source resources to manage the updated resource migration scenario. You can also call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   *   \\*\\*
   *   **Note** Make sure that the source resources that you want to delete from a resource migration scenario are associated only with the resource scenario. Otherwise, the source resources fail to be deleted.
   * - If you want to update a resource migration scenario in which the migrated source resources are deleted, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource management scenario
   * If you want to update a resource management scenario after you use the resource scenario to manage resources, you can only call the [GenerateTemplateByScratch](https://help.aliyun.com/document_detail/610829.html) operation to generate a template for the resource scenario.
   * ### [](#)Resource detection scenario
   * After you update a resource detection scenario, ROS obtains the most recent data from Resource Center and renders the architecture diagram.
   * This topic provides an example on how to update a resource scenario. In this example, the ID of a virtual private cloud (VPC) in a resource scenario whose ID is `ts-7f7a704cf71c49a6****` is updated to `vpc-bp1m6fww66xbntjyc****`.
   * 
   * @param request - UpdateTemplateScratchRequest
   * @returns UpdateTemplateScratchResponse
   */
  async updateTemplateScratch(request: $_model.UpdateTemplateScratchRequest): Promise<$_model.UpdateTemplateScratchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTemplateScratchWithOptions(request, runtime);
  }

  /**
   * Validates a template that is used to create a stack by specifying template URL or body.
   * 
   * @remarks
   * This API operation validates only templates and does not involve user data. RAM authentication is not required.
   * This topic provides an example of how to validate a stack template. In this example, the `TemplateURL` of the template file is `oss://ros/template/demo`.
   * 
   * @param request - ValidateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateTemplateResponse
   */
  async validateTemplateWithOptions(request: $_model.ValidateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.updateInfoOptions)) {
      query["UpdateInfoOptions"] = request.updateInfoOptions;
    }

    if (!$dara.isNull(request.validationOption)) {
      query["ValidationOption"] = request.validationOption;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateTemplate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ValidateTemplateResponse({}));
  }

  /**
   * Validates a template that is used to create a stack by specifying template URL or body.
   * 
   * @remarks
   * This API operation validates only templates and does not involve user data. RAM authentication is not required.
   * This topic provides an example of how to validate a stack template. In this example, the `TemplateURL` of the template file is `oss://ros/template/demo`.
   * 
   * @param request - ValidateTemplateRequest
   * @returns ValidateTemplateResponse
   */
  async validateTemplate(request: $_model.ValidateTemplateRequest): Promise<$_model.ValidateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateTemplateWithOptions(request, runtime);
  }

}
