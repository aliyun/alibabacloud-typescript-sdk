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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("servicecatalog", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Reviews a plan.
   * 
   * @param request - ApproveProvisionedProductPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveProvisionedProductPlanResponse
   */
  async approveProvisionedProductPlanWithOptions(request: $_model.ApproveProvisionedProductPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveProvisionedProductPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approvalAction)) {
      body["ApprovalAction"] = request.approvalAction;
    }

    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveProvisionedProductPlan",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new $_model.ApproveProvisionedProductPlanResponse({}));
  }

  /**
   * Reviews a plan.
   * 
   * @param request - ApproveProvisionedProductPlanRequest
   * @returns ApproveProvisionedProductPlanResponse
   */
  async approveProvisionedProductPlan(request: $_model.ApproveProvisionedProductPlanRequest): Promise<$_model.ApproveProvisionedProductPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveProvisionedProductPlanWithOptions(request, runtime);
  }

  /**
   * 将产品组合授权给某个RAM实体
   * 
   * @param request - AssociatePrincipalWithPortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociatePrincipalWithPortfolioResponse
   */
  async associatePrincipalWithPortfolioWithOptions(request: $_model.AssociatePrincipalWithPortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociatePrincipalWithPortfolioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.principalId)) {
      body["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalPattern)) {
      body["PrincipalPattern"] = request.principalPattern;
    }

    if (!$dara.isNull(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociatePrincipalWithPortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociatePrincipalWithPortfolioResponse>(await this.callApi(params, req, runtime), new $_model.AssociatePrincipalWithPortfolioResponse({}));
  }

  /**
   * 将产品组合授权给某个RAM实体
   * 
   * @param request - AssociatePrincipalWithPortfolioRequest
   * @returns AssociatePrincipalWithPortfolioResponse
   */
  async associatePrincipalWithPortfolio(request: $_model.AssociatePrincipalWithPortfolioRequest): Promise<$_model.AssociatePrincipalWithPortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associatePrincipalWithPortfolioWithOptions(request, runtime);
  }

  /**
   * Adds a product to a product portfolio.
   * 
   * @param request - AssociateProductWithPortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateProductWithPortfolioResponse
   */
  async associateProductWithPortfolioWithOptions(request: $_model.AssociateProductWithPortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateProductWithPortfolioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateProductWithPortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateProductWithPortfolioResponse>(await this.callApi(params, req, runtime), new $_model.AssociateProductWithPortfolioResponse({}));
  }

  /**
   * Adds a product to a product portfolio.
   * 
   * @param request - AssociateProductWithPortfolioRequest
   * @returns AssociateProductWithPortfolioResponse
   */
  async associateProductWithPortfolio(request: $_model.AssociateProductWithPortfolioRequest): Promise<$_model.AssociateProductWithPortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateProductWithPortfolioWithOptions(request, runtime);
  }

  /**
   * Associates the tag option with a resource.
   * 
   * @param request - AssociateTagOptionWithResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateTagOptionWithResourceResponse
   */
  async associateTagOptionWithResourceWithOptions(request: $_model.AssociateTagOptionWithResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateTagOptionWithResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateTagOptionWithResource",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateTagOptionWithResourceResponse>(await this.callApi(params, req, runtime), new $_model.AssociateTagOptionWithResourceResponse({}));
  }

  /**
   * Associates the tag option with a resource.
   * 
   * @param request - AssociateTagOptionWithResourceRequest
   * @returns AssociateTagOptionWithResourceResponse
   */
  async associateTagOptionWithResource(request: $_model.AssociateTagOptionWithResourceRequest): Promise<$_model.AssociateTagOptionWithResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateTagOptionWithResourceWithOptions(request, runtime);
  }

  /**
   * Cancels a plan.
   * 
   * @param request - CancelProvisionedProductPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelProvisionedProductPlanResponse
   */
  async cancelProvisionedProductPlanWithOptions(request: $_model.CancelProvisionedProductPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelProvisionedProductPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelProvisionedProductPlan",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new $_model.CancelProvisionedProductPlanResponse({}));
  }

  /**
   * Cancels a plan.
   * 
   * @param request - CancelProvisionedProductPlanRequest
   * @returns CancelProvisionedProductPlanResponse
   */
  async cancelProvisionedProductPlan(request: $_model.CancelProvisionedProductPlanRequest): Promise<$_model.CancelProvisionedProductPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelProvisionedProductPlanWithOptions(request, runtime);
  }

  /**
   * Replicates a product.
   * 
   * @param request - CopyProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyProductResponse
   */
  async copyProductWithOptions(request: $_model.CopyProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceProductArn)) {
      body["SourceProductArn"] = request.sourceProductArn;
    }

    if (!$dara.isNull(request.targetProductName)) {
      body["TargetProductName"] = request.targetProductName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyProductResponse>(await this.callApi(params, req, runtime), new $_model.CopyProductResponse({}));
  }

  /**
   * Replicates a product.
   * 
   * @param request - CopyProductRequest
   * @returns CopyProductResponse
   */
  async copyProduct(request: $_model.CopyProductRequest): Promise<$_model.CopyProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyProductWithOptions(request, runtime);
  }

  /**
   * Creates a constraint.
   * 
   * @param request - CreateConstraintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConstraintResponse
   */
  async createConstraintWithOptions(request: $_model.CreateConstraintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConstraintResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.constraintType)) {
      body["ConstraintType"] = request.constraintType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConstraint",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConstraintResponse>(await this.callApi(params, req, runtime), new $_model.CreateConstraintResponse({}));
  }

  /**
   * Creates a constraint.
   * 
   * @param request - CreateConstraintRequest
   * @returns CreateConstraintResponse
   */
  async createConstraint(request: $_model.CreateConstraintRequest): Promise<$_model.CreateConstraintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConstraintWithOptions(request, runtime);
  }

  /**
   * Creates a product portfolio.
   * 
   * @param request - CreatePortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePortfolioResponse
   */
  async createPortfolioWithOptions(request: $_model.CreatePortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePortfolioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.portfolioName)) {
      body["PortfolioName"] = request.portfolioName;
    }

    if (!$dara.isNull(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePortfolioResponse>(await this.callApi(params, req, runtime), new $_model.CreatePortfolioResponse({}));
  }

  /**
   * Creates a product portfolio.
   * 
   * @param request - CreatePortfolioRequest
   * @returns CreatePortfolioResponse
   */
  async createPortfolio(request: $_model.CreatePortfolioRequest): Promise<$_model.CreatePortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPortfolioWithOptions(request, runtime);
  }

  /**
   * Creates a product.
   * 
   * @remarks
   * Before you call the CreateProduct operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
   * 
   * @param tmpReq - CreateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductResponse
   */
  async createProductWithOptions(tmpReq: $_model.CreateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProductShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.productVersionParameters)) {
      request.productVersionParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productVersionParameters, "ProductVersionParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.productName)) {
      body["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.productVersionParametersShrink)) {
      body["ProductVersionParameters"] = request.productVersionParametersShrink;
    }

    if (!$dara.isNull(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductResponse({}));
  }

  /**
   * Creates a product.
   * 
   * @remarks
   * Before you call the CreateProduct operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
   * 
   * @param request - CreateProductRequest
   * @returns CreateProductResponse
   */
  async createProduct(request: $_model.CreateProductRequest): Promise<$_model.CreateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  /**
   * Creates a product version.
   * 
   * @remarks
   * Before you call the CreateProductVersion operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
   * 
   * @param request - CreateProductVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductVersionResponse
   */
  async createProductVersionWithOptions(request: $_model.CreateProductVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["Active"] = request.active;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.guidance)) {
      body["Guidance"] = request.guidance;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productVersionName)) {
      body["ProductVersionName"] = request.productVersionName;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.templateUrl)) {
      body["TemplateUrl"] = request.templateUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProductVersion",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductVersionResponse({}));
  }

  /**
   * Creates a product version.
   * 
   * @remarks
   * Before you call the CreateProductVersion operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
   * 
   * @param request - CreateProductVersionRequest
   * @returns CreateProductVersionResponse
   */
  async createProductVersion(request: $_model.CreateProductVersionRequest): Promise<$_model.CreateProductVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProductVersionWithOptions(request, runtime);
  }

  /**
   * Creates a plan.
   * 
   * @param request - CreateProvisionedProductPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProvisionedProductPlanResponse
   */
  async createProvisionedProductPlanWithOptions(request: $_model.CreateProvisionedProductPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProvisionedProductPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.planName)) {
      body["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.planType)) {
      body["PlanType"] = request.planType;
    }

    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!$dara.isNull(request.provisionedProductName)) {
      body["ProvisionedProductName"] = request.provisionedProductName;
    }

    if (!$dara.isNull(request.stackRegionId)) {
      body["StackRegionId"] = request.stackRegionId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProvisionedProductPlan",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateProvisionedProductPlanResponse({}));
  }

  /**
   * Creates a plan.
   * 
   * @param request - CreateProvisionedProductPlanRequest
   * @returns CreateProvisionedProductPlanResponse
   */
  async createProvisionedProductPlan(request: $_model.CreateProvisionedProductPlanRequest): Promise<$_model.CreateProvisionedProductPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProvisionedProductPlanWithOptions(request, runtime);
  }

  /**
   * Creates a tag option.
   * 
   * @param request - CreateTagOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTagOptionResponse
   */
  async createTagOptionWithOptions(request: $_model.CreateTagOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTagOptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTagOption",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTagOptionResponse>(await this.callApi(params, req, runtime), new $_model.CreateTagOptionResponse({}));
  }

  /**
   * Creates a tag option.
   * 
   * @param request - CreateTagOptionRequest
   * @returns CreateTagOptionResponse
   */
  async createTagOption(request: $_model.CreateTagOptionRequest): Promise<$_model.CreateTagOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTagOptionWithOptions(request, runtime);
  }

  /**
   * Creates a template. Service Catalog saves the template based on the parameters that you specify and returns the URL of the template.
   * 
   * @param request - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    if (!$dara.isNull(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!$dara.isNull(request.terraformVariables)) {
      body["TerraformVariables"] = request.terraformVariables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2021-09-01",
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
   * Creates a template. Service Catalog saves the template based on the parameters that you specify and returns the URL of the template.
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a constraint.
   * 
   * @param request - DeleteConstraintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConstraintResponse
   */
  async deleteConstraintWithOptions(request: $_model.DeleteConstraintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConstraintResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.constraintId)) {
      body["ConstraintId"] = request.constraintId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConstraint",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConstraintResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConstraintResponse({}));
  }

  /**
   * Deletes a constraint.
   * 
   * @param request - DeleteConstraintRequest
   * @returns DeleteConstraintResponse
   */
  async deleteConstraint(request: $_model.DeleteConstraintRequest): Promise<$_model.DeleteConstraintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConstraintWithOptions(request, runtime);
  }

  /**
   * Deletes a product portfolio.
   * 
   * @param request - DeletePortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePortfolioResponse
   */
  async deletePortfolioWithOptions(request: $_model.DeletePortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePortfolioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePortfolioResponse>(await this.callApi(params, req, runtime), new $_model.DeletePortfolioResponse({}));
  }

  /**
   * Deletes a product portfolio.
   * 
   * @param request - DeletePortfolioRequest
   * @returns DeletePortfolioResponse
   */
  async deletePortfolio(request: $_model.DeletePortfolioRequest): Promise<$_model.DeletePortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePortfolioWithOptions(request, runtime);
  }

  /**
   * Deletes a product.
   * 
   * @param request - DeleteProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProductResponse
   */
  async deleteProductWithOptions(request: $_model.DeleteProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProductResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProductResponse({}));
  }

  /**
   * Deletes a product.
   * 
   * @param request - DeleteProductRequest
   * @returns DeleteProductResponse
   */
  async deleteProduct(request: $_model.DeleteProductRequest): Promise<$_model.DeleteProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  /**
   * Deletes a product version.
   * 
   * @param request - DeleteProductVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProductVersionResponse
   */
  async deleteProductVersionWithOptions(request: $_model.DeleteProductVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProductVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProductVersion",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProductVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProductVersionResponse({}));
  }

  /**
   * Deletes a product version.
   * 
   * @param request - DeleteProductVersionRequest
   * @returns DeleteProductVersionResponse
   */
  async deleteProductVersion(request: $_model.DeleteProductVersionRequest): Promise<$_model.DeleteProductVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProductVersionWithOptions(request, runtime);
  }

  /**
   * Deletes a plan.
   * 
   * @param request - DeleteProvisionedProductPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProvisionedProductPlanResponse
   */
  async deleteProvisionedProductPlanWithOptions(request: $_model.DeleteProvisionedProductPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProvisionedProductPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProvisionedProductPlan",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProvisionedProductPlanResponse({}));
  }

  /**
   * Deletes a plan.
   * 
   * @param request - DeleteProvisionedProductPlanRequest
   * @returns DeleteProvisionedProductPlanResponse
   */
  async deleteProvisionedProductPlan(request: $_model.DeleteProvisionedProductPlanRequest): Promise<$_model.DeleteProvisionedProductPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProvisionedProductPlanWithOptions(request, runtime);
  }

  /**
   * Deletes a tag option.
   * 
   * @param request - DeleteTagOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagOptionResponse
   */
  async deleteTagOptionWithOptions(request: $_model.DeleteTagOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTagOptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTagOption",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTagOptionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTagOptionResponse({}));
  }

  /**
   * Deletes a tag option.
   * 
   * @param request - DeleteTagOptionRequest
   * @returns DeleteTagOptionResponse
   */
  async deleteTagOption(request: $_model.DeleteTagOptionRequest): Promise<$_model.DeleteTagOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTagOptionWithOptions(request, runtime);
  }

  /**
   * Disassociates a tag option from a resource.
   * 
   * @param request - DisAssociateTagOptionFromResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisAssociateTagOptionFromResourceResponse
   */
  async disAssociateTagOptionFromResourceWithOptions(request: $_model.DisAssociateTagOptionFromResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisAssociateTagOptionFromResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisAssociateTagOptionFromResource",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisAssociateTagOptionFromResourceResponse>(await this.callApi(params, req, runtime), new $_model.DisAssociateTagOptionFromResourceResponse({}));
  }

  /**
   * Disassociates a tag option from a resource.
   * 
   * @param request - DisAssociateTagOptionFromResourceRequest
   * @returns DisAssociateTagOptionFromResourceResponse
   */
  async disAssociateTagOptionFromResource(request: $_model.DisAssociateTagOptionFromResourceRequest): Promise<$_model.DisAssociateTagOptionFromResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disAssociateTagOptionFromResourceWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access a product portfolio.
   * 
   * @param request - DisassociatePrincipalFromPortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociatePrincipalFromPortfolioResponse
   */
  async disassociatePrincipalFromPortfolioWithOptions(request: $_model.DisassociatePrincipalFromPortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociatePrincipalFromPortfolioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.principalId)) {
      body["PrincipalId"] = request.principalId;
    }

    if (!$dara.isNull(request.principalPattern)) {
      body["PrincipalPattern"] = request.principalPattern;
    }

    if (!$dara.isNull(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociatePrincipalFromPortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociatePrincipalFromPortfolioResponse>(await this.callApi(params, req, runtime), new $_model.DisassociatePrincipalFromPortfolioResponse({}));
  }

  /**
   * Revokes the permissions to access a product portfolio.
   * 
   * @param request - DisassociatePrincipalFromPortfolioRequest
   * @returns DisassociatePrincipalFromPortfolioResponse
   */
  async disassociatePrincipalFromPortfolio(request: $_model.DisassociatePrincipalFromPortfolioRequest): Promise<$_model.DisassociatePrincipalFromPortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociatePrincipalFromPortfolioWithOptions(request, runtime);
  }

  /**
   * Removes a product from the product portfolio.
   * 
   * @param request - DisassociateProductFromPortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateProductFromPortfolioResponse
   */
  async disassociateProductFromPortfolioWithOptions(request: $_model.DisassociateProductFromPortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateProductFromPortfolioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateProductFromPortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateProductFromPortfolioResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateProductFromPortfolioResponse({}));
  }

  /**
   * Removes a product from the product portfolio.
   * 
   * @param request - DisassociateProductFromPortfolioRequest
   * @returns DisassociateProductFromPortfolioResponse
   */
  async disassociateProductFromPortfolio(request: $_model.DisassociateProductFromPortfolioRequest): Promise<$_model.DisassociateProductFromPortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateProductFromPortfolioWithOptions(request, runtime);
  }

  /**
   * Runs a plan.
   * 
   * @param request - ExecuteProvisionedProductPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteProvisionedProductPlanResponse
   */
  async executeProvisionedProductPlanWithOptions(request: $_model.ExecuteProvisionedProductPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteProvisionedProductPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteProvisionedProductPlan",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteProvisionedProductPlanResponse({}));
  }

  /**
   * Runs a plan.
   * 
   * @param request - ExecuteProvisionedProductPlanRequest
   * @returns ExecuteProvisionedProductPlanResponse
   */
  async executeProvisionedProductPlan(request: $_model.ExecuteProvisionedProductPlanRequest): Promise<$_model.ExecuteProvisionedProductPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeProvisionedProductPlanWithOptions(request, runtime);
  }

  /**
   * Queries the information about a constraint.
   * 
   * @param request - GetConstraintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConstraintResponse
   */
  async getConstraintWithOptions(request: $_model.GetConstraintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetConstraintResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.constraintId)) {
      query["ConstraintId"] = request.constraintId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConstraint",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConstraintResponse>(await this.callApi(params, req, runtime), new $_model.GetConstraintResponse({}));
  }

  /**
   * Queries the information about a constraint.
   * 
   * @param request - GetConstraintRequest
   * @returns GetConstraintResponse
   */
  async getConstraint(request: $_model.GetConstraintRequest): Promise<$_model.GetConstraintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getConstraintWithOptions(request, runtime);
  }

  /**
   * Queries the information about a product portfolio.
   * 
   * @param request - GetPortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPortfolioResponse
   */
  async getPortfolioWithOptions(request: $_model.GetPortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPortfolioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.portfolioId)) {
      query["PortfolioId"] = request.portfolioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPortfolioResponse>(await this.callApi(params, req, runtime), new $_model.GetPortfolioResponse({}));
  }

  /**
   * Queries the information about a product portfolio.
   * 
   * @param request - GetPortfolioRequest
   * @returns GetPortfolioResponse
   */
  async getPortfolio(request: $_model.GetPortfolioRequest): Promise<$_model.GetPortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPortfolioWithOptions(request, runtime);
  }

  /**
   * Queries the information about a product as the administrator.
   * 
   * @param request - GetProductAsAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductAsAdminResponse
   */
  async getProductAsAdminWithOptions(request: $_model.GetProductAsAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductAsAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductAsAdmin",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductAsAdminResponse>(await this.callApi(params, req, runtime), new $_model.GetProductAsAdminResponse({}));
  }

  /**
   * Queries the information about a product as the administrator.
   * 
   * @param request - GetProductAsAdminRequest
   * @returns GetProductAsAdminResponse
   */
  async getProductAsAdmin(request: $_model.GetProductAsAdminRequest): Promise<$_model.GetProductAsAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductAsAdminWithOptions(request, runtime);
  }

  /**
   * Queries the information about a product as a user.
   * 
   * @remarks
   * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](https://help.aliyun.com/document_detail/405233.html).
   * 
   * @param request - GetProductAsEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductAsEndUserResponse
   */
  async getProductAsEndUserWithOptions(request: $_model.GetProductAsEndUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductAsEndUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductAsEndUser",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductAsEndUserResponse>(await this.callApi(params, req, runtime), new $_model.GetProductAsEndUserResponse({}));
  }

  /**
   * Queries the information about a product as a user.
   * 
   * @remarks
   * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](https://help.aliyun.com/document_detail/405233.html).
   * 
   * @param request - GetProductAsEndUserRequest
   * @returns GetProductAsEndUserResponse
   */
  async getProductAsEndUser(request: $_model.GetProductAsEndUserRequest): Promise<$_model.GetProductAsEndUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductAsEndUserWithOptions(request, runtime);
  }

  /**
   * Queries the details of a product version.
   * 
   * @param request - GetProductVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProductVersionResponse
   */
  async getProductVersionWithOptions(request: $_model.GetProductVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProductVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productVersionId)) {
      query["ProductVersionId"] = request.productVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProductVersion",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProductVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetProductVersionResponse({}));
  }

  /**
   * Queries the details of a product version.
   * 
   * @param request - GetProductVersionRequest
   * @returns GetProductVersionResponse
   */
  async getProductVersion(request: $_model.GetProductVersionRequest): Promise<$_model.GetProductVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProductVersionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a product instance.
   * 
   * @param request - GetProvisionedProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProvisionedProductResponse
   */
  async getProvisionedProductWithOptions(request: $_model.GetProvisionedProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProvisionedProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.provisionedProductId)) {
      query["ProvisionedProductId"] = request.provisionedProductId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProvisionedProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProvisionedProductResponse>(await this.callApi(params, req, runtime), new $_model.GetProvisionedProductResponse({}));
  }

  /**
   * Queries the information about a product instance.
   * 
   * @param request - GetProvisionedProductRequest
   * @returns GetProvisionedProductResponse
   */
  async getProvisionedProduct(request: $_model.GetProvisionedProductRequest): Promise<$_model.GetProvisionedProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProvisionedProductWithOptions(request, runtime);
  }

  /**
   * Queries the details of a plan.
   * 
   * @param request - GetProvisionedProductPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProvisionedProductPlanResponse
   */
  async getProvisionedProductPlanWithOptions(request: $_model.GetProvisionedProductPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProvisionedProductPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProvisionedProductPlan",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetProvisionedProductPlanResponse({}));
  }

  /**
   * Queries the details of a plan.
   * 
   * @param request - GetProvisionedProductPlanRequest
   * @returns GetProvisionedProductPlanResponse
   */
  async getProvisionedProductPlan(request: $_model.GetProvisionedProductPlanRequest): Promise<$_model.GetProvisionedProductPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProvisionedProductPlanWithOptions(request, runtime);
  }

  /**
   * Queries the details of a tag option.
   * 
   * @param request - GetTagOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTagOptionResponse
   */
  async getTagOptionWithOptions(request: $_model.GetTagOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTagOptionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTagOption",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTagOptionResponse>(await this.callApi(params, req, runtime), new $_model.GetTagOptionResponse({}));
  }

  /**
   * Queries the details of a tag option.
   * 
   * @param request - GetTagOptionRequest
   * @returns GetTagOptionResponse
   */
  async getTagOption(request: $_model.GetTagOptionRequest): Promise<$_model.GetTagOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTagOptionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - GetTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(request: $_model.GetTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - GetTaskRequest
   * @returns GetTaskResponse
   */
  async getTask(request: $_model.GetTaskRequest): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of a template.
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: $_model.GetTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productVersionId)) {
      query["ProductVersionId"] = request.productVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2021-09-01",
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
   * Queries the details of a template.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * Launches a product.
   * 
   * @param request - LaunchProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LaunchProductResponse
   */
  async launchProductWithOptions(request: $_model.LaunchProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LaunchProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!$dara.isNull(request.provisionedProductName)) {
      body["ProvisionedProductName"] = request.provisionedProductName;
    }

    if (!$dara.isNull(request.stackRegionId)) {
      body["StackRegionId"] = request.stackRegionId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LaunchProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LaunchProductResponse>(await this.callApi(params, req, runtime), new $_model.LaunchProductResponse({}));
  }

  /**
   * Launches a product.
   * 
   * @param request - LaunchProductRequest
   * @returns LaunchProductResponse
   */
  async launchProduct(request: $_model.LaunchProductRequest): Promise<$_model.LaunchProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.launchProductWithOptions(request, runtime);
  }

  /**
   * Queries launch options.
   * 
   * @param request - ListLaunchOptionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLaunchOptionsResponse
   */
  async listLaunchOptionsWithOptions(request: $_model.ListLaunchOptionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLaunchOptionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLaunchOptions",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLaunchOptionsResponse>(await this.callApi(params, req, runtime), new $_model.ListLaunchOptionsResponse({}));
  }

  /**
   * Queries launch options.
   * 
   * @param request - ListLaunchOptionsRequest
   * @returns ListLaunchOptionsResponse
   */
  async listLaunchOptions(request: $_model.ListLaunchOptionsRequest): Promise<$_model.ListLaunchOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLaunchOptionsWithOptions(request, runtime);
  }

  /**
   * The number of entries returned per page.
   * 
   * @param request - ListPortfoliosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPortfoliosResponse
   */
  async listPortfoliosWithOptions(request: $_model.ListPortfoliosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPortfoliosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPortfolios",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPortfoliosResponse>(await this.callApi(params, req, runtime), new $_model.ListPortfoliosResponse({}));
  }

  /**
   * The number of entries returned per page.
   * 
   * @param request - ListPortfoliosRequest
   * @returns ListPortfoliosResponse
   */
  async listPortfolios(request: $_model.ListPortfoliosRequest): Promise<$_model.ListPortfoliosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPortfoliosWithOptions(request, runtime);
  }

  /**
   * Queries the Resource Access Management (RAM) users and RAM roles that are granted the permissions to access a product portfolio.
   * 
   * @param request - ListPrincipalsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrincipalsResponse
   */
  async listPrincipalsWithOptions(request: $_model.ListPrincipalsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrincipalsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.portfolioId)) {
      query["PortfolioId"] = request.portfolioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrincipals",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrincipalsResponse>(await this.callApi(params, req, runtime), new $_model.ListPrincipalsResponse({}));
  }

  /**
   * Queries the Resource Access Management (RAM) users and RAM roles that are granted the permissions to access a product portfolio.
   * 
   * @param request - ListPrincipalsRequest
   * @returns ListPrincipalsResponse
   */
  async listPrincipals(request: $_model.ListPrincipalsRequest): Promise<$_model.ListPrincipalsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrincipalsWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a product.
   * 
   * @param request - ListProductVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductVersionsResponse
   */
  async listProductVersionsWithOptions(request: $_model.ListProductVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductVersions",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductVersionsResponse({}));
  }

  /**
   * Queries the versions of a product.
   * 
   * @param request - ListProductVersionsRequest
   * @returns ListProductVersionsResponse
   */
  async listProductVersions(request: $_model.ListProductVersionsRequest): Promise<$_model.ListProductVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductVersionsWithOptions(request, runtime);
  }

  /**
   * Queries products as an administrator.
   * 
   * @param request - ListProductsAsAdminRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsAsAdminResponse
   */
  async listProductsAsAdminWithOptions(request: $_model.ListProductsAsAdminRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsAsAdminResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.portfolioId)) {
      query["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductsAsAdmin",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsAsAdminResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsAsAdminResponse({}));
  }

  /**
   * Queries products as an administrator.
   * 
   * @param request - ListProductsAsAdminRequest
   * @returns ListProductsAsAdminResponse
   */
  async listProductsAsAdmin(request: $_model.ListProductsAsAdminRequest): Promise<$_model.ListProductsAsAdminResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsAsAdminWithOptions(request, runtime);
  }

  /**
   * Queries products as a user.
   * 
   * @remarks
   * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](https://help.aliyun.com/document_detail/405233.html).
   * 
   * @param request - ListProductsAsEndUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsAsEndUserResponse
   */
  async listProductsAsEndUserWithOptions(request: $_model.ListProductsAsEndUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsAsEndUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProductsAsEndUser",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsAsEndUserResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsAsEndUserResponse({}));
  }

  /**
   * Queries products as a user.
   * 
   * @remarks
   * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](https://help.aliyun.com/document_detail/405233.html).
   * 
   * @param request - ListProductsAsEndUserRequest
   * @returns ListProductsAsEndUserResponse
   */
  async listProductsAsEndUser(request: $_model.ListProductsAsEndUserRequest): Promise<$_model.ListProductsAsEndUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProductsAsEndUserWithOptions(request, runtime);
  }

  /**
   * Queries a list of plan reviewers.
   * 
   * @param request - ListProvisionedProductPlanApproversRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProvisionedProductPlanApproversResponse
   */
  async listProvisionedProductPlanApproversWithOptions(request: $_model.ListProvisionedProductPlanApproversRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProvisionedProductPlanApproversResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProvisionedProductPlanApprovers",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProvisionedProductPlanApproversResponse>(await this.callApi(params, req, runtime), new $_model.ListProvisionedProductPlanApproversResponse({}));
  }

  /**
   * Queries a list of plan reviewers.
   * 
   * @param request - ListProvisionedProductPlanApproversRequest
   * @returns ListProvisionedProductPlanApproversResponse
   */
  async listProvisionedProductPlanApprovers(request: $_model.ListProvisionedProductPlanApproversRequest): Promise<$_model.ListProvisionedProductPlanApproversResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProvisionedProductPlanApproversWithOptions(request, runtime);
  }

  /**
   * Queries a list of plans. You can query plans from the end user dimension or from the review dimension.
   * 
   * @param request - ListProvisionedProductPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProvisionedProductPlansResponse
   */
  async listProvisionedProductPlansWithOptions(request: $_model.ListProvisionedProductPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProvisionedProductPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessLevelFilter)) {
      query["AccessLevelFilter"] = request.accessLevelFilter;
    }

    if (!$dara.isNull(request.approvalFilter)) {
      query["ApprovalFilter"] = request.approvalFilter;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provisionedProductId)) {
      query["ProvisionedProductId"] = request.provisionedProductId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProvisionedProductPlans",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProvisionedProductPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListProvisionedProductPlansResponse({}));
  }

  /**
   * Queries a list of plans. You can query plans from the end user dimension or from the review dimension.
   * 
   * @param request - ListProvisionedProductPlansRequest
   * @returns ListProvisionedProductPlansResponse
   */
  async listProvisionedProductPlans(request: $_model.ListProvisionedProductPlansRequest): Promise<$_model.ListProvisionedProductPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProvisionedProductPlansWithOptions(request, runtime);
  }

  /**
   * Queries product instances.
   * 
   * @param request - ListProvisionedProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProvisionedProductsResponse
   */
  async listProvisionedProductsWithOptions(request: $_model.ListProvisionedProductsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProvisionedProductsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessLevelFilter)) {
      query["AccessLevelFilter"] = request.accessLevelFilter;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProvisionedProducts",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProvisionedProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProvisionedProductsResponse({}));
  }

  /**
   * Queries product instances.
   * 
   * @param request - ListProvisionedProductsRequest
   * @returns ListProvisionedProductsResponse
   */
  async listProvisionedProducts(request: $_model.ListProvisionedProductsRequest): Promise<$_model.ListProvisionedProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProvisionedProductsWithOptions(request, runtime);
  }

  /**
   * Queries regions.
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries regions.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * Queries the resources that are associated with a tag option.
   * 
   * @param request - ListResourcesForTagOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesForTagOptionResponse
   */
  async listResourcesForTagOptionWithOptions(request: $_model.ListResourcesForTagOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesForTagOptionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourcesForTagOption",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesForTagOptionResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesForTagOptionResponse({}));
  }

  /**
   * Queries the resources that are associated with a tag option.
   * 
   * @param request - ListResourcesForTagOptionRequest
   * @returns ListResourcesForTagOptionResponse
   */
  async listResourcesForTagOption(request: $_model.ListResourcesForTagOptionRequest): Promise<$_model.ListResourcesForTagOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesForTagOptionWithOptions(request, runtime);
  }

  /**
   * Queries a list of tag options.
   * 
   * @param tmpReq - ListTagOptionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagOptionsResponse
   */
  async listTagOptionsWithOptions(tmpReq: $_model.ListTagOptionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagOptionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagOptionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagOptions",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagOptionsResponse>(await this.callApi(params, req, runtime), new $_model.ListTagOptionsResponse({}));
  }

  /**
   * Queries a list of tag options.
   * 
   * @param request - ListTagOptionsRequest
   * @returns ListTagOptionsResponse
   */
  async listTagOptions(request: $_model.ListTagOptionsRequest): Promise<$_model.ListTagOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagOptionsWithOptions(request, runtime);
  }

  /**
   * The page number of the returned page.
   * 
   * @param request - ListTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(request: $_model.ListTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provisionedProductId)) {
      query["ProvisionedProductId"] = request.provisionedProductId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * The page number of the returned page.
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  /**
   * Terminates a product instance.
   * 
   * @remarks
   * After a product instance is terminated, the product instance is deleted from the product instance list. End users cannot manage the product instance throughout its lifecycle. Proceed with caution.
   * 
   * @param request - TerminateProvisionedProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateProvisionedProductResponse
   */
  async terminateProvisionedProductWithOptions(request: $_model.TerminateProvisionedProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateProvisionedProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.provisionedProductId)) {
      body["ProvisionedProductId"] = request.provisionedProductId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateProvisionedProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateProvisionedProductResponse>(await this.callApi(params, req, runtime), new $_model.TerminateProvisionedProductResponse({}));
  }

  /**
   * Terminates a product instance.
   * 
   * @remarks
   * After a product instance is terminated, the product instance is deleted from the product instance list. End users cannot manage the product instance throughout its lifecycle. Proceed with caution.
   * 
   * @param request - TerminateProvisionedProductRequest
   * @returns TerminateProvisionedProductResponse
   */
  async terminateProvisionedProduct(request: $_model.TerminateProvisionedProductRequest): Promise<$_model.TerminateProvisionedProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateProvisionedProductWithOptions(request, runtime);
  }

  /**
   * Updates the information about a constraint.
   * 
   * @param request - UpdateConstraintRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConstraintResponse
   */
  async updateConstraintWithOptions(request: $_model.UpdateConstraintRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConstraintResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.constraintId)) {
      body["ConstraintId"] = request.constraintId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConstraint",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConstraintResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConstraintResponse({}));
  }

  /**
   * Updates the information about a constraint.
   * 
   * @param request - UpdateConstraintRequest
   * @returns UpdateConstraintResponse
   */
  async updateConstraint(request: $_model.UpdateConstraintRequest): Promise<$_model.UpdateConstraintResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConstraintWithOptions(request, runtime);
  }

  /**
   * The ID of the product portfolio.
   * 
   * @param request - UpdatePortfolioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePortfolioResponse
   */
  async updatePortfolioWithOptions(request: $_model.UpdatePortfolioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePortfolioResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.portfolioName)) {
      body["PortfolioName"] = request.portfolioName;
    }

    if (!$dara.isNull(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePortfolio",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePortfolioResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePortfolioResponse({}));
  }

  /**
   * The ID of the product portfolio.
   * 
   * @param request - UpdatePortfolioRequest
   * @returns UpdatePortfolioResponse
   */
  async updatePortfolio(request: $_model.UpdatePortfolioRequest): Promise<$_model.UpdatePortfolioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePortfolioWithOptions(request, runtime);
  }

  /**
   * The ID of the product.
   * 
   * @param request - UpdateProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProductResponse
   */
  async updateProductWithOptions(request: $_model.UpdateProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productName)) {
      body["ProductName"] = request.productName;
    }

    if (!$dara.isNull(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProductResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProductResponse({}));
  }

  /**
   * The ID of the product.
   * 
   * @param request - UpdateProductRequest
   * @returns UpdateProductResponse
   */
  async updateProduct(request: $_model.UpdateProductRequest): Promise<$_model.UpdateProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProductWithOptions(request, runtime);
  }

  /**
   * Updates the information about a product version.
   * 
   * @param request - UpdateProductVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProductVersionResponse
   */
  async updateProductVersionWithOptions(request: $_model.UpdateProductVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProductVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["Active"] = request.active;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.guidance)) {
      body["Guidance"] = request.guidance;
    }

    if (!$dara.isNull(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!$dara.isNull(request.productVersionName)) {
      body["ProductVersionName"] = request.productVersionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProductVersion",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProductVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProductVersionResponse({}));
  }

  /**
   * Updates the information about a product version.
   * 
   * @param request - UpdateProductVersionRequest
   * @returns UpdateProductVersionResponse
   */
  async updateProductVersion(request: $_model.UpdateProductVersionRequest): Promise<$_model.UpdateProductVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProductVersionWithOptions(request, runtime);
  }

  /**
   * Updates the information about a product instance.
   * 
   * @param request - UpdateProvisionedProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProvisionedProductResponse
   */
  async updateProvisionedProductWithOptions(request: $_model.UpdateProvisionedProductRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProvisionedProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!$dara.isNull(request.provisionedProductId)) {
      body["ProvisionedProductId"] = request.provisionedProductId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProvisionedProduct",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProvisionedProductResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProvisionedProductResponse({}));
  }

  /**
   * Updates the information about a product instance.
   * 
   * @param request - UpdateProvisionedProductRequest
   * @returns UpdateProvisionedProductResponse
   */
  async updateProvisionedProduct(request: $_model.UpdateProvisionedProductRequest): Promise<$_model.UpdateProvisionedProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProvisionedProductWithOptions(request, runtime);
  }

  /**
   * Updates a plan.
   * 
   * @param request - UpdateProvisionedProductPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProvisionedProductPlanResponse
   */
  async updateProvisionedProductPlanWithOptions(request: $_model.UpdateProvisionedProductPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProvisionedProductPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.planId)) {
      body["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!$dara.isNull(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProvisionedProductPlan",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProvisionedProductPlanResponse({}));
  }

  /**
   * Updates a plan.
   * 
   * @param request - UpdateProvisionedProductPlanRequest
   * @returns UpdateProvisionedProductPlanResponse
   */
  async updateProvisionedProductPlan(request: $_model.UpdateProvisionedProductPlanRequest): Promise<$_model.UpdateProvisionedProductPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProvisionedProductPlanWithOptions(request, runtime);
  }

  /**
   * Updates the tag option.
   * 
   * @param request - UpdateTagOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTagOptionResponse
   */
  async updateTagOptionWithOptions(request: $_model.UpdateTagOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTagOptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["Active"] = request.active;
    }

    if (!$dara.isNull(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTagOption",
      version: "2021-09-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTagOptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTagOptionResponse({}));
  }

  /**
   * Updates the tag option.
   * 
   * @param request - UpdateTagOptionRequest
   * @returns UpdateTagOptionResponse
   */
  async updateTagOption(request: $_model.UpdateTagOptionRequest): Promise<$_model.UpdateTagOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTagOptionWithOptions(request, runtime);
  }

}
