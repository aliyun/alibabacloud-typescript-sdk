// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApproveProvisionedProductPlanRequest extends $tea.Model {
  approvalAction?: string;
  comment?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalAction: 'ApprovalAction',
      comment: 'Comment',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalAction: 'string',
      comment: 'string',
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveProvisionedProductPlanResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveProvisionedProductPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApproveProvisionedProductPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApproveProvisionedProductPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociatePrincipalWithPortfolioRequest extends $tea.Model {
  portfolioId?: string;
  principalId?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      principalId: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociatePrincipalWithPortfolioResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociatePrincipalWithPortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociatePrincipalWithPortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociatePrincipalWithPortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateProductWithPortfolioRequest extends $tea.Model {
  portfolioId?: string;
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateProductWithPortfolioResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateProductWithPortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateProductWithPortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateProductWithPortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTagOptionWithResourceRequest extends $tea.Model {
  resourceId?: string;
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tagOptionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTagOptionWithResourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTagOptionWithResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateTagOptionWithResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateTagOptionWithResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProvisionedProductPlanRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProvisionedProductPlanResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelProvisionedProductPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelProvisionedProductPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelProvisionedProductPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyProductRequest extends $tea.Model {
  sourceProductArn?: string;
  targetProductName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceProductArn: 'SourceProductArn',
      targetProductName: 'TargetProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProductArn: 'string',
      targetProductName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyProductResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CopyProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CopyProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConstraintRequest extends $tea.Model {
  config?: string;
  constraintType?: string;
  description?: string;
  portfolioId?: string;
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      constraintType: 'ConstraintType',
      description: 'Description',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      constraintType: 'string',
      description: 'string',
      portfolioId: 'string',
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConstraintResponseBody extends $tea.Model {
  constraintId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      constraintId: 'ConstraintId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConstraintResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConstraintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateConstraintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortfolioRequest extends $tea.Model {
  description?: string;
  portfolioName?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portfolioName: 'PortfolioName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portfolioName: 'string',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortfolioResponseBody extends $tea.Model {
  portfolioId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductRequest extends $tea.Model {
  description?: string;
  productName?: string;
  productType?: string;
  productVersionParameters?: CreateProductRequestProductVersionParameters;
  providerName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      productName: 'ProductName',
      productType: 'ProductType',
      productVersionParameters: 'ProductVersionParameters',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productName: 'string',
      productType: 'string',
      productVersionParameters: CreateProductRequestProductVersionParameters,
      providerName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductShrinkRequest extends $tea.Model {
  description?: string;
  productName?: string;
  productType?: string;
  productVersionParametersShrink?: string;
  providerName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      productName: 'ProductName',
      productType: 'ProductType',
      productVersionParametersShrink: 'ProductVersionParameters',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productName: 'string',
      productType: 'string',
      productVersionParametersShrink: 'string',
      providerName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponseBody extends $tea.Model {
  productId?: string;
  productVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      productVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionRequest extends $tea.Model {
  active?: boolean;
  description?: string;
  guidance?: string;
  productId?: string;
  productVersionName?: string;
  templateType?: string;
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      guidance: 'Guidance',
      productId: 'ProductId',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      guidance: 'string',
      productId: 'string',
      productVersionName: 'string',
      templateType: 'string',
      templateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionResponseBody extends $tea.Model {
  productVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productVersionId: 'ProductVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProvisionedProductPlanRequest extends $tea.Model {
  description?: string;
  operationType?: string;
  parameters?: CreateProvisionedProductPlanRequestParameters[];
  planName?: string;
  planType?: string;
  portfolioId?: string;
  productId?: string;
  productVersionId?: string;
  provisionedProductName?: string;
  stackRegionId?: string;
  tags?: CreateProvisionedProductPlanRequestTags[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      operationType: 'OperationType',
      parameters: 'Parameters',
      planName: 'PlanName',
      planType: 'PlanType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      provisionedProductName: 'ProvisionedProductName',
      stackRegionId: 'StackRegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      operationType: 'string',
      parameters: { 'type': 'array', 'itemType': CreateProvisionedProductPlanRequestParameters },
      planName: 'string',
      planType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductName: 'string',
      stackRegionId: 'string',
      tags: { 'type': 'array', 'itemType': CreateProvisionedProductPlanRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProvisionedProductPlanResponseBody extends $tea.Model {
  planId?: string;
  provisionedProductId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      provisionedProductId: 'ProvisionedProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      provisionedProductId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProvisionedProductPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProvisionedProductPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProvisionedProductPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagOptionRequest extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagOptionResponseBody extends $tea.Model {
  requestId?: string;
  tagOptionDetail?: CreateTagOptionResponseBodyTagOptionDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagOptionDetail: 'TagOptionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagOptionDetail: CreateTagOptionResponseBodyTagOptionDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagOptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTagOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTagOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  templateBody?: string;
  templateType?: string;
  terraformVariables?: CreateTemplateRequestTerraformVariables[];
  static names(): { [key: string]: string } {
    return {
      templateBody: 'TemplateBody',
      templateType: 'TemplateType',
      terraformVariables: 'TerraformVariables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateBody: 'string',
      templateType: 'string',
      terraformVariables: { 'type': 'array', 'itemType': CreateTemplateRequestTerraformVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConstraintRequest extends $tea.Model {
  constraintId?: string;
  static names(): { [key: string]: string } {
    return {
      constraintId: 'ConstraintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConstraintResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConstraintResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConstraintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConstraintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePortfolioRequest extends $tea.Model {
  portfolioId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePortfolioResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductRequest extends $tea.Model {
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductVersionRequest extends $tea.Model {
  productVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      productVersionId: 'ProductVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductVersionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProductVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProvisionedProductPlanRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProvisionedProductPlanResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProvisionedProductPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteProvisionedProductPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProvisionedProductPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagOptionRequest extends $tea.Model {
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagOptionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagOptionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagOptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTagOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisAssociateTagOptionFromResourceRequest extends $tea.Model {
  resourceId?: string;
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tagOptionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisAssociateTagOptionFromResourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisAssociateTagOptionFromResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisAssociateTagOptionFromResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisAssociateTagOptionFromResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociatePrincipalFromPortfolioRequest extends $tea.Model {
  portfolioId?: string;
  principalId?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      principalId: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociatePrincipalFromPortfolioResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociatePrincipalFromPortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociatePrincipalFromPortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisassociatePrincipalFromPortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateProductFromPortfolioRequest extends $tea.Model {
  portfolioId?: string;
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateProductFromPortfolioResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateProductFromPortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateProductFromPortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisassociateProductFromPortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteProvisionedProductPlanRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteProvisionedProductPlanResponseBody extends $tea.Model {
  planId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteProvisionedProductPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecuteProvisionedProductPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecuteProvisionedProductPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConstraintRequest extends $tea.Model {
  constraintId?: string;
  static names(): { [key: string]: string } {
    return {
      constraintId: 'ConstraintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConstraintResponseBody extends $tea.Model {
  constraintDetail?: GetConstraintResponseBodyConstraintDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      constraintDetail: 'ConstraintDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintDetail: GetConstraintResponseBodyConstraintDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConstraintResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConstraintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConstraintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPortfolioRequest extends $tea.Model {
  portfolioId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPortfolioResponseBody extends $tea.Model {
  portfolioDetail?: GetPortfolioResponseBodyPortfolioDetail;
  requestId?: string;
  tagOptions?: GetPortfolioResponseBodyTagOptions[];
  static names(): { [key: string]: string } {
    return {
      portfolioDetail: 'PortfolioDetail',
      requestId: 'RequestId',
      tagOptions: 'TagOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioDetail: GetPortfolioResponseBodyPortfolioDetail,
      requestId: 'string',
      tagOptions: { 'type': 'array', 'itemType': GetPortfolioResponseBodyTagOptions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsAdminRequest extends $tea.Model {
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsAdminResponseBody extends $tea.Model {
  productDetail?: GetProductAsAdminResponseBodyProductDetail;
  requestId?: string;
  tagOptions?: GetProductAsAdminResponseBodyTagOptions[];
  static names(): { [key: string]: string } {
    return {
      productDetail: 'ProductDetail',
      requestId: 'RequestId',
      tagOptions: 'TagOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productDetail: GetProductAsAdminResponseBodyProductDetail,
      requestId: 'string',
      tagOptions: { 'type': 'array', 'itemType': GetProductAsAdminResponseBodyTagOptions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsAdminResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductAsAdminResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductAsAdminResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsEndUserRequest extends $tea.Model {
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsEndUserResponseBody extends $tea.Model {
  productSummary?: GetProductAsEndUserResponseBodyProductSummary;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productSummary: 'ProductSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSummary: GetProductAsEndUserResponseBodyProductSummary,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsEndUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductAsEndUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductAsEndUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionRequest extends $tea.Model {
  productVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      productVersionId: 'ProductVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponseBody extends $tea.Model {
  productVersionDetail?: GetProductVersionResponseBodyProductVersionDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productVersionDetail: 'ProductVersionDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionDetail: GetProductVersionResponseBodyProductVersionDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductRequest extends $tea.Model {
  provisionedProductId?: string;
  static names(): { [key: string]: string } {
    return {
      provisionedProductId: 'ProvisionedProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionedProductId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductResponseBody extends $tea.Model {
  provisionedProductDetail?: GetProvisionedProductResponseBodyProvisionedProductDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      provisionedProductDetail: 'ProvisionedProductDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionedProductDetail: GetProvisionedProductResponseBodyProvisionedProductDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProvisionedProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProvisionedProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanRequest extends $tea.Model {
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBody extends $tea.Model {
  planDetail?: GetProvisionedProductPlanResponseBodyPlanDetail;
  productDetail?: GetProvisionedProductPlanResponseBodyProductDetail;
  productVersionDetail?: GetProvisionedProductPlanResponseBodyProductVersionDetail;
  requestId?: string;
  resourceChanges?: GetProvisionedProductPlanResponseBodyResourceChanges[];
  static names(): { [key: string]: string } {
    return {
      planDetail: 'PlanDetail',
      productDetail: 'ProductDetail',
      productVersionDetail: 'ProductVersionDetail',
      requestId: 'RequestId',
      resourceChanges: 'ResourceChanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planDetail: GetProvisionedProductPlanResponseBodyPlanDetail,
      productDetail: GetProvisionedProductPlanResponseBodyProductDetail,
      productVersionDetail: GetProvisionedProductPlanResponseBodyProductVersionDetail,
      requestId: 'string',
      resourceChanges: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyResourceChanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProvisionedProductPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProvisionedProductPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagOptionRequest extends $tea.Model {
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagOptionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagOptionResponseBody extends $tea.Model {
  requestId?: string;
  tagOptionDetail?: GetTagOptionResponseBodyTagOptionDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagOptionDetail: 'TagOptionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagOptionDetail: GetTagOptionResponseBodyTagOptionDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagOptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTagOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTagOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  requestId?: string;
  taskDetail?: GetTaskResponseBodyTaskDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskDetail: GetTaskResponseBodyTaskDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateRequest extends $tea.Model {
  productId?: string;
  productVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      productVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateBody?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateBody: 'TemplateBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateBody: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchProductRequest extends $tea.Model {
  parameters?: LaunchProductRequestParameters[];
  portfolioId?: string;
  productId?: string;
  productVersionId?: string;
  provisionedProductName?: string;
  stackRegionId?: string;
  tags?: LaunchProductRequestTags[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      provisionedProductName: 'ProvisionedProductName',
      stackRegionId: 'StackRegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': LaunchProductRequestParameters },
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductName: 'string',
      stackRegionId: 'string',
      tags: { 'type': 'array', 'itemType': LaunchProductRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchProductResponseBody extends $tea.Model {
  provisionedProductId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      provisionedProductId: 'ProvisionedProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionedProductId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LaunchProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LaunchProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaunchOptionsRequest extends $tea.Model {
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaunchOptionsResponseBody extends $tea.Model {
  launchOptionSummaries?: ListLaunchOptionsResponseBodyLaunchOptionSummaries[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      launchOptionSummaries: 'LaunchOptionSummaries',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchOptionSummaries: { 'type': 'array', 'itemType': ListLaunchOptionsResponseBodyLaunchOptionSummaries },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaunchOptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLaunchOptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLaunchOptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortfoliosRequest extends $tea.Model {
  filters?: ListPortfoliosRequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  productId?: string;
  scope?: string;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productId: 'ProductId',
      scope: 'Scope',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListPortfoliosRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'string',
      scope: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortfoliosResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  portfolioDetails?: ListPortfoliosResponseBodyPortfolioDetails[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      portfolioDetails: 'PortfolioDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      portfolioDetails: { 'type': 'array', 'itemType': ListPortfoliosResponseBodyPortfolioDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortfoliosResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPortfoliosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPortfoliosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrincipalsRequest extends $tea.Model {
  portfolioId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrincipalsResponseBody extends $tea.Model {
  principals?: ListPrincipalsResponseBodyPrincipals[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      principals: 'Principals',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principals: { 'type': 'array', 'itemType': ListPrincipalsResponseBodyPrincipals },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrincipalsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrincipalsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrincipalsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsRequest extends $tea.Model {
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponseBody extends $tea.Model {
  productVersionDetails?: ListProductVersionsResponseBodyProductVersionDetails[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productVersionDetails: 'ProductVersionDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionDetails: { 'type': 'array', 'itemType': ListProductVersionsResponseBodyProductVersionDetails },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsAdminRequest extends $tea.Model {
  filters?: ListProductsAsAdminRequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  portfolioId?: string;
  scope?: string;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      portfolioId: 'PortfolioId',
      scope: 'Scope',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListProductsAsAdminRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      portfolioId: 'string',
      scope: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsAdminResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  productDetails?: ListProductsAsAdminResponseBodyProductDetails[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productDetails: 'ProductDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      productDetails: { 'type': 'array', 'itemType': ListProductsAsAdminResponseBodyProductDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsAdminResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductsAsAdminResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductsAsAdminResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsEndUserRequest extends $tea.Model {
  filters?: ListProductsAsEndUserRequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListProductsAsEndUserRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsEndUserResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  productSummaries?: ListProductsAsEndUserResponseBodyProductSummaries[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productSummaries: 'ProductSummaries',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      productSummaries: { 'type': 'array', 'itemType': ListProductsAsEndUserResponseBodyProductSummaries },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsEndUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductsAsEndUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProductsAsEndUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlanApproversRequest extends $tea.Model {
  accessLevelFilter?: string;
  approvalFilter?: string;
  filters?: ListProvisionedProductPlanApproversRequestFilters[];
  static names(): { [key: string]: string } {
    return {
      accessLevelFilter: 'AccessLevelFilter',
      approvalFilter: 'ApprovalFilter',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevelFilter: 'string',
      approvalFilter: 'string',
      filters: { 'type': 'array', 'itemType': ListProvisionedProductPlanApproversRequestFilters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlanApproversResponseBody extends $tea.Model {
  approvers?: ListProvisionedProductPlanApproversResponseBodyApprovers[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      approvers: 'Approvers',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvers: { 'type': 'array', 'itemType': ListProvisionedProductPlanApproversResponseBodyApprovers },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlanApproversResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProvisionedProductPlanApproversResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProvisionedProductPlanApproversResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansRequest extends $tea.Model {
  accessLevelFilter?: string;
  approvalFilter?: string;
  filters?: ListProvisionedProductPlansRequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  provisionedProductId?: string;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevelFilter: 'AccessLevelFilter',
      approvalFilter: 'ApprovalFilter',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provisionedProductId: 'ProvisionedProductId',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevelFilter: 'string',
      approvalFilter: 'string',
      filters: { 'type': 'array', 'itemType': ListProvisionedProductPlansRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      provisionedProductId: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  planDetails?: ListProvisionedProductPlansResponseBodyPlanDetails[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planDetails: 'PlanDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      planDetails: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProvisionedProductPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProvisionedProductPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductsRequest extends $tea.Model {
  accessLevelFilter?: string;
  filters?: ListProvisionedProductsRequestFilters[];
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      accessLevelFilter: 'AccessLevelFilter',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLevelFilter: 'string',
      filters: { 'type': 'array', 'itemType': ListProvisionedProductsRequestFilters },
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  provisionedProductDetails?: ListProvisionedProductsResponseBodyProvisionedProductDetails[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provisionedProductDetails: 'ProvisionedProductDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      provisionedProductDetails: { 'type': 'array', 'itemType': ListProvisionedProductsResponseBodyProvisionedProductDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProvisionedProductsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProvisionedProductsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: ListRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesForTagOptionRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceType?: string;
  tagOptionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      tagOptionId: 'TagOptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      tagOptionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesForTagOptionResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resourceDetails?: ListResourcesForTagOptionResponseBodyResourceDetails[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resourceDetails: 'ResourceDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resourceDetails: { 'type': 'array', 'itemType': ListResourcesForTagOptionResponseBodyResourceDetails },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesForTagOptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesForTagOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesForTagOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagOptionsRequest extends $tea.Model {
  filters?: ListTagOptionsRequestFilters;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: ListTagOptionsRequestFilters,
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagOptionsShrinkRequest extends $tea.Model {
  filtersShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filtersShrink: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filtersShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagOptionsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tagOptionDetails?: ListTagOptionsResponseBodyTagOptionDetails[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagOptionDetails: 'TagOptionDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagOptionDetails: { 'type': 'array', 'itemType': ListTagOptionsResponseBodyTagOptionDetails },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagOptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagOptionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagOptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  provisionedProductId?: string;
  sortBy?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provisionedProductId: 'ProvisionedProductId',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      provisionedProductId: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  taskDetails?: ListTasksResponseBodyTaskDetails[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskDetails: 'TaskDetails',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskDetails: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetails },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateProvisionedProductRequest extends $tea.Model {
  provisionedProductId?: string;
  static names(): { [key: string]: string } {
    return {
      provisionedProductId: 'ProvisionedProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionedProductId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateProvisionedProductResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateProvisionedProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TerminateProvisionedProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TerminateProvisionedProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConstraintRequest extends $tea.Model {
  config?: string;
  constraintId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      constraintId: 'ConstraintId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      constraintId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConstraintResponseBody extends $tea.Model {
  constraintId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      constraintId: 'ConstraintId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConstraintResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConstraintResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateConstraintResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePortfolioRequest extends $tea.Model {
  description?: string;
  portfolioId?: string;
  portfolioName?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      portfolioId: 'PortfolioId',
      portfolioName: 'PortfolioName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portfolioId: 'string',
      portfolioName: 'string',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePortfolioResponseBody extends $tea.Model {
  portfolioId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portfolioId: 'PortfolioId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePortfolioResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePortfolioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePortfolioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductRequest extends $tea.Model {
  description?: string;
  productId?: string;
  productName?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      productId: 'ProductId',
      productName: 'ProductName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      productId: 'string',
      productName: 'string',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponseBody extends $tea.Model {
  productId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productId: 'ProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionRequest extends $tea.Model {
  active?: boolean;
  description?: string;
  guidance?: string;
  productVersionId?: string;
  productVersionName?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      guidance: 'Guidance',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      guidance: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionResponseBody extends $tea.Model {
  productVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      productVersionId: 'ProductVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProductVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProductVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductRequest extends $tea.Model {
  parameters?: UpdateProvisionedProductRequestParameters[];
  portfolioId?: string;
  productId?: string;
  productVersionId?: string;
  provisionedProductId?: string;
  tags?: UpdateProvisionedProductRequestTags[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      provisionedProductId: 'ProvisionedProductId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': UpdateProvisionedProductRequestParameters },
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductId: 'string',
      tags: { 'type': 'array', 'itemType': UpdateProvisionedProductRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductResponseBody extends $tea.Model {
  provisionedProductId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      provisionedProductId: 'ProvisionedProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provisionedProductId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProvisionedProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProvisionedProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductPlanRequest extends $tea.Model {
  description?: string;
  parameters?: UpdateProvisionedProductPlanRequestParameters[];
  planId?: string;
  portfolioId?: string;
  productId?: string;
  productVersionId?: string;
  tags?: UpdateProvisionedProductPlanRequestTags[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      parameters: 'Parameters',
      planId: 'PlanId',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateProvisionedProductPlanRequestParameters },
      planId: 'string',
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      tags: { 'type': 'array', 'itemType': UpdateProvisionedProductPlanRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductPlanResponseBody extends $tea.Model {
  planId?: string;
  provisionedProductId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
      provisionedProductId: 'ProvisionedProductId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
      provisionedProductId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductPlanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateProvisionedProductPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProvisionedProductPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagOptionRequest extends $tea.Model {
  active?: boolean;
  tagOptionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagOptionResponseBody extends $tea.Model {
  requestId?: string;
  tagOptionDetail?: UpdateTagOptionResponseBodyTagOptionDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagOptionDetail: 'TagOptionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagOptionDetail: UpdateTagOptionResponseBodyTagOptionDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagOptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTagOptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTagOptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductRequestProductVersionParameters extends $tea.Model {
  active?: boolean;
  description?: string;
  guidance?: string;
  productVersionName?: string;
  templateType?: string;
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      guidance: 'Guidance',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      guidance: 'string',
      productVersionName: 'string',
      templateType: 'string',
      templateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProvisionedProductPlanRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProvisionedProductPlanRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagOptionResponseBodyTagOptionDetail extends $tea.Model {
  active?: boolean;
  key?: string;
  owner?: string;
  tagOptionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequestTerraformVariables extends $tea.Model {
  description?: string;
  variableName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      variableName: 'VariableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      variableName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConstraintResponseBodyConstraintDetail extends $tea.Model {
  config?: string;
  constraintId?: string;
  constraintType?: string;
  createTime?: string;
  description?: string;
  portfolioId?: string;
  productId?: string;
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      constraintId: 'ConstraintId',
      constraintType: 'ConstraintType',
      createTime: 'CreateTime',
      description: 'Description',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      constraintId: 'string',
      constraintType: 'string',
      createTime: 'string',
      description: 'string',
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPortfolioResponseBodyPortfolioDetail extends $tea.Model {
  createTime?: string;
  description?: string;
  portfolioArn?: string;
  portfolioId?: string;
  portfolioName?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      portfolioArn: 'PortfolioArn',
      portfolioId: 'PortfolioId',
      portfolioName: 'PortfolioName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      portfolioArn: 'string',
      portfolioId: 'string',
      portfolioName: 'string',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPortfolioResponseBodyTagOptions extends $tea.Model {
  active?: boolean;
  key?: string;
  owner?: string;
  tagOptionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsAdminResponseBodyProductDetail extends $tea.Model {
  createTime?: string;
  description?: string;
  productArn?: string;
  productId?: string;
  productName?: string;
  productType?: string;
  providerName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      productArn: 'ProductArn',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      productArn: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      providerName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsAdminResponseBodyTagOptions extends $tea.Model {
  active?: boolean;
  key?: string;
  owner?: string;
  tagOptionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductAsEndUserResponseBodyProductSummary extends $tea.Model {
  createTime?: string;
  description?: string;
  hasDefaultLaunchOption?: boolean;
  productArn?: string;
  productId?: string;
  productName?: string;
  productType?: string;
  providerName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      hasDefaultLaunchOption: 'HasDefaultLaunchOption',
      productArn: 'ProductArn',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      hasDefaultLaunchOption: 'boolean',
      productArn: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      providerName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProductVersionResponseBodyProductVersionDetail extends $tea.Model {
  active?: boolean;
  createTime?: string;
  description?: string;
  guidance?: string;
  productId?: string;
  productVersionId?: string;
  productVersionName?: string;
  templateType?: string;
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      createTime: 'CreateTime',
      description: 'Description',
      guidance: 'Guidance',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      createTime: 'string',
      description: 'string',
      guidance: 'string',
      productId: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      templateType: 'string',
      templateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductResponseBodyProvisionedProductDetail extends $tea.Model {
  createTime?: string;
  lastProvisioningTaskId?: string;
  lastSuccessfulProvisioningTaskId?: string;
  lastTaskId?: string;
  ownerPrincipalId?: string;
  ownerPrincipalType?: string;
  portfolioId?: string;
  productId?: string;
  productName?: string;
  productVersionId?: string;
  productVersionName?: string;
  provisionedProductArn?: string;
  provisionedProductId?: string;
  provisionedProductName?: string;
  provisionedProductType?: string;
  stackId?: string;
  stackRegionId?: string;
  status?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastProvisioningTaskId: 'LastProvisioningTaskId',
      lastSuccessfulProvisioningTaskId: 'LastSuccessfulProvisioningTaskId',
      lastTaskId: 'LastTaskId',
      ownerPrincipalId: 'OwnerPrincipalId',
      ownerPrincipalType: 'OwnerPrincipalType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      provisionedProductArn: 'ProvisionedProductArn',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      provisionedProductType: 'ProvisionedProductType',
      stackId: 'StackId',
      stackRegionId: 'StackRegionId',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastProvisioningTaskId: 'string',
      lastSuccessfulProvisioningTaskId: 'string',
      lastTaskId: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      provisionedProductArn: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      provisionedProductType: 'string',
      stackId: 'string',
      stackRegionId: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecordsOperator extends $tea.Model {
  principalId?: string;
  principalName?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecords extends $tea.Model {
  approvalAction?: string;
  comment?: string;
  createTime?: string;
  operator?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecordsOperator;
  static names(): { [key: string]: string } {
    return {
      approvalAction: 'ApprovalAction',
      comment: 'Comment',
      createTime: 'CreateTime',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalAction: 'string',
      comment: 'string',
      createTime: 'string',
      operator: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecordsOperator,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasksOperator extends $tea.Model {
  principalName?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasks extends $tea.Model {
  operator?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasksOperator;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasksOperator,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivities extends $tea.Model {
  activityName?: string;
  tasks?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasks[];
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      tasks: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivitiesTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetail extends $tea.Model {
  operationRecords?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecords[];
  todoTaskActivities?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivities[];
  static names(): { [key: string]: string } {
    return {
      operationRecords: 'OperationRecords',
      todoTaskActivities: 'TodoTaskActivities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationRecords: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailOperationRecords },
      todoTaskActivities: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetailTodoTaskActivities },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailAssignedApprovers extends $tea.Model {
  principalName?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetailTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyPlanDetail extends $tea.Model {
  approvalDetail?: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetail;
  assignedApprovers?: GetProvisionedProductPlanResponseBodyPlanDetailAssignedApprovers[];
  createTime?: string;
  description?: string;
  operationType?: string;
  ownerPrincipalId?: string;
  ownerPrincipalName?: string;
  ownerPrincipalType?: string;
  parameters?: GetProvisionedProductPlanResponseBodyPlanDetailParameters[];
  planId?: string;
  planName?: string;
  planType?: string;
  portfolioId?: string;
  productId?: string;
  productVersionId?: string;
  provisionedProductId?: string;
  provisionedProductName?: string;
  stackId?: string;
  stackRegionId?: string;
  status?: string;
  statusMessage?: string;
  tags?: GetProvisionedProductPlanResponseBodyPlanDetailTags[];
  uid?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      approvalDetail: 'ApprovalDetail',
      assignedApprovers: 'AssignedApprovers',
      createTime: 'CreateTime',
      description: 'Description',
      operationType: 'OperationType',
      ownerPrincipalId: 'OwnerPrincipalId',
      ownerPrincipalName: 'OwnerPrincipalName',
      ownerPrincipalType: 'OwnerPrincipalType',
      parameters: 'Parameters',
      planId: 'PlanId',
      planName: 'PlanName',
      planType: 'PlanType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      stackId: 'StackId',
      stackRegionId: 'StackRegionId',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      uid: 'Uid',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalDetail: GetProvisionedProductPlanResponseBodyPlanDetailApprovalDetail,
      assignedApprovers: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailAssignedApprovers },
      createTime: 'string',
      description: 'string',
      operationType: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalName: 'string',
      ownerPrincipalType: 'string',
      parameters: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailParameters },
      planId: 'string',
      planName: 'string',
      planType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productVersionId: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      stackId: 'string',
      stackRegionId: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'array', 'itemType': GetProvisionedProductPlanResponseBodyPlanDetailTags },
      uid: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyProductDetail extends $tea.Model {
  createTime?: string;
  description?: string;
  productArn?: string;
  productId?: string;
  productName?: string;
  productType?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      productArn: 'ProductArn',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      productArn: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyProductVersionDetail extends $tea.Model {
  active?: boolean;
  createTime?: string;
  description?: string;
  guidance?: string;
  productId?: string;
  productVersionId?: string;
  productVersionName?: string;
  templateType?: string;
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      createTime: 'CreateTime',
      description: 'Description',
      guidance: 'Guidance',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      createTime: 'string',
      description: 'string',
      guidance: 'string',
      productId: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      templateType: 'string',
      templateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionedProductPlanResponseBodyResourceChanges extends $tea.Model {
  action?: string;
  logicalResourceId?: string;
  physicalResourceId?: string;
  replacement?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      logicalResourceId: 'LogicalResourceId',
      physicalResourceId: 'PhysicalResourceId',
      replacement: 'Replacement',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      logicalResourceId: 'string',
      physicalResourceId: 'string',
      replacement: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagOptionResponseBodyTagOptionDetail extends $tea.Model {
  active?: boolean;
  key?: string;
  owner?: string;
  tagOptionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailLogTerraformLogs extends $tea.Model {
  command?: string;
  content?: string;
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailLog extends $tea.Model {
  terraformLogs?: GetTaskResponseBodyTaskDetailLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailOutputs extends $tea.Model {
  description?: string;
  outputKey?: string;
  outputValue?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputKey: 'OutputKey',
      outputValue: 'OutputValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputKey: 'string',
      outputValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetailTaskTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskDetail extends $tea.Model {
  createTime?: string;
  log?: GetTaskResponseBodyTaskDetailLog;
  outputs?: GetTaskResponseBodyTaskDetailOutputs[];
  parameters?: GetTaskResponseBodyTaskDetailParameters[];
  portfolioId?: string;
  productId?: string;
  productName?: string;
  productVersionId?: string;
  productVersionName?: string;
  provisionedProductId?: string;
  provisionedProductName?: string;
  status?: string;
  statusMessage?: string;
  taskId?: string;
  taskTags?: GetTaskResponseBodyTaskDetailTaskTags[];
  taskType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      log: 'Log',
      outputs: 'Outputs',
      parameters: 'Parameters',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskId: 'TaskId',
      taskTags: 'TaskTags',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      log: GetTaskResponseBodyTaskDetailLog,
      outputs: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailOutputs },
      parameters: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailParameters },
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      status: 'string',
      statusMessage: 'string',
      taskId: 'string',
      taskTags: { 'type': 'array', 'itemType': GetTaskResponseBodyTaskDetailTaskTags },
      taskType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchProductRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LaunchProductRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaunchOptionsResponseBodyLaunchOptionSummariesConstraintSummaries extends $tea.Model {
  constraintType?: string;
  description?: string;
  operationTypes?: string[];
  stackRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      constraintType: 'ConstraintType',
      description: 'Description',
      operationTypes: 'OperationTypes',
      stackRegions: 'StackRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintType: 'string',
      description: 'string',
      operationTypes: { 'type': 'array', 'itemType': 'string' },
      stackRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLaunchOptionsResponseBodyLaunchOptionSummaries extends $tea.Model {
  constraintSummaries?: ListLaunchOptionsResponseBodyLaunchOptionSummariesConstraintSummaries[];
  portfolioId?: string;
  portfolioName?: string;
  static names(): { [key: string]: string } {
    return {
      constraintSummaries: 'ConstraintSummaries',
      portfolioId: 'PortfolioId',
      portfolioName: 'PortfolioName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintSummaries: { 'type': 'array', 'itemType': ListLaunchOptionsResponseBodyLaunchOptionSummariesConstraintSummaries },
      portfolioId: 'string',
      portfolioName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortfoliosRequestFilters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortfoliosResponseBodyPortfolioDetails extends $tea.Model {
  createTime?: string;
  description?: string;
  portfolioArn?: string;
  portfolioId?: string;
  portfolioName?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      portfolioArn: 'PortfolioArn',
      portfolioId: 'PortfolioId',
      portfolioName: 'PortfolioName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      portfolioArn: 'string',
      portfolioId: 'string',
      portfolioName: 'string',
      providerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrincipalsResponseBodyPrincipals extends $tea.Model {
  principalId?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductVersionsResponseBodyProductVersionDetails extends $tea.Model {
  active?: boolean;
  createTime?: string;
  description?: string;
  guidance?: string;
  productId?: string;
  productVersionId?: string;
  productVersionName?: string;
  templateType?: string;
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      createTime: 'CreateTime',
      description: 'Description',
      guidance: 'Guidance',
      productId: 'ProductId',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      templateType: 'TemplateType',
      templateUrl: 'TemplateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      createTime: 'string',
      description: 'string',
      guidance: 'string',
      productId: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      templateType: 'string',
      templateUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsAdminRequestFilters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsAdminResponseBodyProductDetails extends $tea.Model {
  createTime?: string;
  description?: string;
  productArn?: string;
  productId?: string;
  productName?: string;
  productType?: string;
  providerName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      productArn: 'ProductArn',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      productArn: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      providerName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsEndUserRequestFilters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsAsEndUserResponseBodyProductSummaries extends $tea.Model {
  createTime?: string;
  description?: string;
  hasDefaultLaunchOption?: boolean;
  productArn?: string;
  productId?: string;
  productName?: string;
  productType?: string;
  providerName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      hasDefaultLaunchOption: 'HasDefaultLaunchOption',
      productArn: 'ProductArn',
      productId: 'ProductId',
      productName: 'ProductName',
      productType: 'ProductType',
      providerName: 'ProviderName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      hasDefaultLaunchOption: 'boolean',
      productArn: 'string',
      productId: 'string',
      productName: 'string',
      productType: 'string',
      providerName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlanApproversRequestFilters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlanApproversResponseBodyApprovers extends $tea.Model {
  principalName?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansRequestFilters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansResponseBodyPlanDetailsAssignedApprovers extends $tea.Model {
  principalName?: string;
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalName: 'string',
      principalType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansResponseBodyPlanDetailsParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansResponseBodyPlanDetailsTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductPlansResponseBodyPlanDetails extends $tea.Model {
  assignedApprovers?: ListProvisionedProductPlansResponseBodyPlanDetailsAssignedApprovers[];
  createTime?: string;
  description?: string;
  operationType?: string;
  ownerPrincipalId?: string;
  ownerPrincipalName?: string;
  ownerPrincipalType?: string;
  parameters?: ListProvisionedProductPlansResponseBodyPlanDetailsParameters[];
  planId?: string;
  planName?: string;
  planType?: string;
  portfolioId?: string;
  productId?: string;
  productName?: string;
  productVersionId?: string;
  provisionedProductId?: string;
  provisionedProductName?: string;
  stackId?: string;
  stackRegionId?: string;
  status?: string;
  statusMessage?: string;
  tags?: ListProvisionedProductPlansResponseBodyPlanDetailsTags[];
  uid?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      assignedApprovers: 'AssignedApprovers',
      createTime: 'CreateTime',
      description: 'Description',
      operationType: 'OperationType',
      ownerPrincipalId: 'OwnerPrincipalId',
      ownerPrincipalName: 'OwnerPrincipalName',
      ownerPrincipalType: 'OwnerPrincipalType',
      parameters: 'Parameters',
      planId: 'PlanId',
      planName: 'PlanName',
      planType: 'PlanType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersionId: 'ProductVersionId',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      stackId: 'StackId',
      stackRegionId: 'StackRegionId',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
      uid: 'Uid',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedApprovers: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetailsAssignedApprovers },
      createTime: 'string',
      description: 'string',
      operationType: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalName: 'string',
      ownerPrincipalType: 'string',
      parameters: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetailsParameters },
      planId: 'string',
      planName: 'string',
      planType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      stackId: 'string',
      stackRegionId: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'array', 'itemType': ListProvisionedProductPlansResponseBodyPlanDetailsTags },
      uid: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductsRequestFilters extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionedProductsResponseBodyProvisionedProductDetails extends $tea.Model {
  createTime?: string;
  lastProvisioningTaskId?: string;
  lastSuccessfulProvisioningTaskId?: string;
  lastTaskId?: string;
  ownerPrincipalId?: string;
  ownerPrincipalType?: string;
  portfolioId?: string;
  productId?: string;
  productName?: string;
  productVersionId?: string;
  productVersionName?: string;
  provisionedProductArn?: string;
  provisionedProductId?: string;
  provisionedProductName?: string;
  provisionedProductType?: string;
  stackId?: string;
  stackRegionId?: string;
  status?: string;
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastProvisioningTaskId: 'LastProvisioningTaskId',
      lastSuccessfulProvisioningTaskId: 'LastSuccessfulProvisioningTaskId',
      lastTaskId: 'LastTaskId',
      ownerPrincipalId: 'OwnerPrincipalId',
      ownerPrincipalType: 'OwnerPrincipalType',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      provisionedProductArn: 'ProvisionedProductArn',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      provisionedProductType: 'ProvisionedProductType',
      stackId: 'StackId',
      stackRegionId: 'StackRegionId',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastProvisioningTaskId: 'string',
      lastSuccessfulProvisioningTaskId: 'string',
      lastTaskId: 'string',
      ownerPrincipalId: 'string',
      ownerPrincipalType: 'string',
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      provisionedProductArn: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      provisionedProductType: 'string',
      stackId: 'string',
      stackRegionId: 'string',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesForTagOptionResponseBodyResourceDetails extends $tea.Model {
  createTime?: string;
  description?: string;
  resourceArn?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      resourceArn: 'ResourceArn',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      resourceArn: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagOptionsRequestFilters extends $tea.Model {
  active?: boolean;
  fullTextSearch?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      fullTextSearch: 'FullTextSearch',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      fullTextSearch: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagOptionsResponseBodyTagOptionDetails extends $tea.Model {
  active?: boolean;
  key?: string;
  owner?: string;
  tagOptionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTaskDetailsLogTerraformLogs extends $tea.Model {
  command?: string;
  content?: string;
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTaskDetailsLog extends $tea.Model {
  terraformLogs?: ListTasksResponseBodyTaskDetailsLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetailsLogTerraformLogs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTaskDetailsOutputs extends $tea.Model {
  description?: string;
  outputKey?: string;
  outputValue?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputKey: 'OutputKey',
      outputValue: 'OutputValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputKey: 'string',
      outputValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTaskDetailsParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTaskDetails extends $tea.Model {
  createTime?: string;
  log?: ListTasksResponseBodyTaskDetailsLog;
  outputs?: ListTasksResponseBodyTaskDetailsOutputs[];
  parameters?: ListTasksResponseBodyTaskDetailsParameters[];
  portfolioId?: string;
  productId?: string;
  productName?: string;
  productVersionId?: string;
  productVersionName?: string;
  provisionedProductId?: string;
  provisionedProductName?: string;
  status?: string;
  statusMessage?: string;
  taskId?: string;
  taskType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      log: 'Log',
      outputs: 'Outputs',
      parameters: 'Parameters',
      portfolioId: 'PortfolioId',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersionId: 'ProductVersionId',
      productVersionName: 'ProductVersionName',
      provisionedProductId: 'ProvisionedProductId',
      provisionedProductName: 'ProvisionedProductName',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskId: 'TaskId',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      log: ListTasksResponseBodyTaskDetailsLog,
      outputs: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetailsOutputs },
      parameters: { 'type': 'array', 'itemType': ListTasksResponseBodyTaskDetailsParameters },
      portfolioId: 'string',
      productId: 'string',
      productName: 'string',
      productVersionId: 'string',
      productVersionName: 'string',
      provisionedProductId: 'string',
      provisionedProductName: 'string',
      status: 'string',
      statusMessage: 'string',
      taskId: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductPlanRequestParameters extends $tea.Model {
  parameterKey?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProvisionedProductPlanRequestTags extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTagOptionResponseBodyTagOptionDetail extends $tea.Model {
  active?: boolean;
  key?: string;
  owner?: string;
  tagOptionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("servicecatalog", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async approveProvisionedProductPlanWithOptions(request: ApproveProvisionedProductPlanRequest, runtime: $Util.RuntimeOptions): Promise<ApproveProvisionedProductPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.approvalAction)) {
      body["ApprovalAction"] = request.approvalAction;
    }

    if (!Util.isUnset(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ApproveProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new ApproveProvisionedProductPlanResponse({}));
  }

  async approveProvisionedProductPlan(request: ApproveProvisionedProductPlanRequest): Promise<ApproveProvisionedProductPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveProvisionedProductPlanWithOptions(request, runtime);
  }

  async associatePrincipalWithPortfolioWithOptions(request: AssociatePrincipalWithPortfolioRequest, runtime: $Util.RuntimeOptions): Promise<AssociatePrincipalWithPortfolioResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.principalId)) {
      body["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AssociatePrincipalWithPortfolioResponse>(await this.callApi(params, req, runtime), new AssociatePrincipalWithPortfolioResponse({}));
  }

  async associatePrincipalWithPortfolio(request: AssociatePrincipalWithPortfolioRequest): Promise<AssociatePrincipalWithPortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associatePrincipalWithPortfolioWithOptions(request, runtime);
  }

  async associateProductWithPortfolioWithOptions(request: AssociateProductWithPortfolioRequest, runtime: $Util.RuntimeOptions): Promise<AssociateProductWithPortfolioResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AssociateProductWithPortfolioResponse>(await this.callApi(params, req, runtime), new AssociateProductWithPortfolioResponse({}));
  }

  async associateProductWithPortfolio(request: AssociateProductWithPortfolioRequest): Promise<AssociateProductWithPortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateProductWithPortfolioWithOptions(request, runtime);
  }

  async associateTagOptionWithResourceWithOptions(request: AssociateTagOptionWithResourceRequest, runtime: $Util.RuntimeOptions): Promise<AssociateTagOptionWithResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<AssociateTagOptionWithResourceResponse>(await this.callApi(params, req, runtime), new AssociateTagOptionWithResourceResponse({}));
  }

  async associateTagOptionWithResource(request: AssociateTagOptionWithResourceRequest): Promise<AssociateTagOptionWithResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateTagOptionWithResourceWithOptions(request, runtime);
  }

  async cancelProvisionedProductPlanWithOptions(request: CancelProvisionedProductPlanRequest, runtime: $Util.RuntimeOptions): Promise<CancelProvisionedProductPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CancelProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new CancelProvisionedProductPlanResponse({}));
  }

  async cancelProvisionedProductPlan(request: CancelProvisionedProductPlanRequest): Promise<CancelProvisionedProductPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelProvisionedProductPlanWithOptions(request, runtime);
  }

  async copyProductWithOptions(request: CopyProductRequest, runtime: $Util.RuntimeOptions): Promise<CopyProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceProductArn)) {
      body["SourceProductArn"] = request.sourceProductArn;
    }

    if (!Util.isUnset(request.targetProductName)) {
      body["TargetProductName"] = request.targetProductName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CopyProductResponse>(await this.callApi(params, req, runtime), new CopyProductResponse({}));
  }

  async copyProduct(request: CopyProductRequest): Promise<CopyProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyProductWithOptions(request, runtime);
  }

  async createConstraintWithOptions(request: CreateConstraintRequest, runtime: $Util.RuntimeOptions): Promise<CreateConstraintResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.constraintType)) {
      body["ConstraintType"] = request.constraintType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateConstraintResponse>(await this.callApi(params, req, runtime), new CreateConstraintResponse({}));
  }

  async createConstraint(request: CreateConstraintRequest): Promise<CreateConstraintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConstraintWithOptions(request, runtime);
  }

  async createPortfolioWithOptions(request: CreatePortfolioRequest, runtime: $Util.RuntimeOptions): Promise<CreatePortfolioResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.portfolioName)) {
      body["PortfolioName"] = request.portfolioName;
    }

    if (!Util.isUnset(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreatePortfolioResponse>(await this.callApi(params, req, runtime), new CreatePortfolioResponse({}));
  }

  async createPortfolio(request: CreatePortfolioRequest): Promise<CreatePortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPortfolioWithOptions(request, runtime);
  }

  /**
    * Before you call the CreateProduct operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
    *
    * @param tmpReq CreateProductRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateProductResponse
   */
  async createProductWithOptions(tmpReq: CreateProductRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateProductShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.productVersionParameters)) {
      request.productVersionParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.productVersionParameters, "ProductVersionParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.productName)) {
      body["ProductName"] = request.productName;
    }

    if (!Util.isUnset(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!Util.isUnset(request.productVersionParametersShrink)) {
      body["ProductVersionParameters"] = request.productVersionParametersShrink;
    }

    if (!Util.isUnset(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateProductResponse>(await this.callApi(params, req, runtime), new CreateProductResponse({}));
  }

  /**
    * Before you call the CreateProduct operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
    *
    * @param request CreateProductRequest
    * @return CreateProductResponse
   */
  async createProduct(request: CreateProductRequest): Promise<CreateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductWithOptions(request, runtime);
  }

  /**
    * Before you call the CreateProductVersion operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
    *
    * @param request CreateProductVersionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateProductVersionResponse
   */
  async createProductVersionWithOptions(request: CreateProductVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateProductVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.active)) {
      body["Active"] = request.active;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.guidance)) {
      body["Guidance"] = request.guidance;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productVersionName)) {
      body["ProductVersionName"] = request.productVersionName;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!Util.isUnset(request.templateUrl)) {
      body["TemplateUrl"] = request.templateUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateProductVersionResponse>(await this.callApi(params, req, runtime), new CreateProductVersionResponse({}));
  }

  /**
    * Before you call the CreateProductVersion operation, you must call the [CreateTemplate](~~CreateTemplate~~) operation to create a template.
    *
    * @param request CreateProductVersionRequest
    * @return CreateProductVersionResponse
   */
  async createProductVersion(request: CreateProductVersionRequest): Promise<CreateProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProductVersionWithOptions(request, runtime);
  }

  async createProvisionedProductPlanWithOptions(request: CreateProvisionedProductPlanRequest, runtime: $Util.RuntimeOptions): Promise<CreateProvisionedProductPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.planName)) {
      body["PlanName"] = request.planName;
    }

    if (!Util.isUnset(request.planType)) {
      body["PlanType"] = request.planType;
    }

    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!Util.isUnset(request.provisionedProductName)) {
      body["ProvisionedProductName"] = request.provisionedProductName;
    }

    if (!Util.isUnset(request.stackRegionId)) {
      body["StackRegionId"] = request.stackRegionId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new CreateProvisionedProductPlanResponse({}));
  }

  async createProvisionedProductPlan(request: CreateProvisionedProductPlanRequest): Promise<CreateProvisionedProductPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProvisionedProductPlanWithOptions(request, runtime);
  }

  async createTagOptionWithOptions(request: CreateTagOptionRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagOptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.key)) {
      body["Key"] = request.key;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTagOptionResponse>(await this.callApi(params, req, runtime), new CreateTagOptionResponse({}));
  }

  async createTagOption(request: CreateTagOptionRequest): Promise<CreateTagOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagOptionWithOptions(request, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.templateBody)) {
      body["TemplateBody"] = request.templateBody;
    }

    if (!Util.isUnset(request.templateType)) {
      body["TemplateType"] = request.templateType;
    }

    if (!Util.isUnset(request.terraformVariables)) {
      body["TerraformVariables"] = request.terraformVariables;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  async deleteConstraintWithOptions(request: DeleteConstraintRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConstraintResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.constraintId)) {
      body["ConstraintId"] = request.constraintId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteConstraintResponse>(await this.callApi(params, req, runtime), new DeleteConstraintResponse({}));
  }

  async deleteConstraint(request: DeleteConstraintRequest): Promise<DeleteConstraintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConstraintWithOptions(request, runtime);
  }

  async deletePortfolioWithOptions(request: DeletePortfolioRequest, runtime: $Util.RuntimeOptions): Promise<DeletePortfolioResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeletePortfolioResponse>(await this.callApi(params, req, runtime), new DeletePortfolioResponse({}));
  }

  async deletePortfolio(request: DeletePortfolioRequest): Promise<DeletePortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePortfolioWithOptions(request, runtime);
  }

  async deleteProductWithOptions(request: DeleteProductRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteProductResponse>(await this.callApi(params, req, runtime), new DeleteProductResponse({}));
  }

  async deleteProduct(request: DeleteProductRequest): Promise<DeleteProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductWithOptions(request, runtime);
  }

  async deleteProductVersionWithOptions(request: DeleteProductVersionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProductVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteProductVersionResponse>(await this.callApi(params, req, runtime), new DeleteProductVersionResponse({}));
  }

  async deleteProductVersion(request: DeleteProductVersionRequest): Promise<DeleteProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProductVersionWithOptions(request, runtime);
  }

  async deleteProvisionedProductPlanWithOptions(request: DeleteProvisionedProductPlanRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProvisionedProductPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new DeleteProvisionedProductPlanResponse({}));
  }

  async deleteProvisionedProductPlan(request: DeleteProvisionedProductPlanRequest): Promise<DeleteProvisionedProductPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProvisionedProductPlanWithOptions(request, runtime);
  }

  async deleteTagOptionWithOptions(request: DeleteTagOptionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagOptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DeleteTagOptionResponse>(await this.callApi(params, req, runtime), new DeleteTagOptionResponse({}));
  }

  async deleteTagOption(request: DeleteTagOptionRequest): Promise<DeleteTagOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagOptionWithOptions(request, runtime);
  }

  async disAssociateTagOptionFromResourceWithOptions(request: DisAssociateTagOptionFromResourceRequest, runtime: $Util.RuntimeOptions): Promise<DisAssociateTagOptionFromResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisAssociateTagOptionFromResourceResponse>(await this.callApi(params, req, runtime), new DisAssociateTagOptionFromResourceResponse({}));
  }

  async disAssociateTagOptionFromResource(request: DisAssociateTagOptionFromResourceRequest): Promise<DisAssociateTagOptionFromResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disAssociateTagOptionFromResourceWithOptions(request, runtime);
  }

  async disassociatePrincipalFromPortfolioWithOptions(request: DisassociatePrincipalFromPortfolioRequest, runtime: $Util.RuntimeOptions): Promise<DisassociatePrincipalFromPortfolioResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.principalId)) {
      body["PrincipalId"] = request.principalId;
    }

    if (!Util.isUnset(request.principalType)) {
      body["PrincipalType"] = request.principalType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisassociatePrincipalFromPortfolioResponse>(await this.callApi(params, req, runtime), new DisassociatePrincipalFromPortfolioResponse({}));
  }

  async disassociatePrincipalFromPortfolio(request: DisassociatePrincipalFromPortfolioRequest): Promise<DisassociatePrincipalFromPortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociatePrincipalFromPortfolioWithOptions(request, runtime);
  }

  async disassociateProductFromPortfolioWithOptions(request: DisassociateProductFromPortfolioRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateProductFromPortfolioResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DisassociateProductFromPortfolioResponse>(await this.callApi(params, req, runtime), new DisassociateProductFromPortfolioResponse({}));
  }

  async disassociateProductFromPortfolio(request: DisassociateProductFromPortfolioRequest): Promise<DisassociateProductFromPortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateProductFromPortfolioWithOptions(request, runtime);
  }

  async executeProvisionedProductPlanWithOptions(request: ExecuteProvisionedProductPlanRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteProvisionedProductPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ExecuteProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new ExecuteProvisionedProductPlanResponse({}));
  }

  async executeProvisionedProductPlan(request: ExecuteProvisionedProductPlanRequest): Promise<ExecuteProvisionedProductPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeProvisionedProductPlanWithOptions(request, runtime);
  }

  async getConstraintWithOptions(request: GetConstraintRequest, runtime: $Util.RuntimeOptions): Promise<GetConstraintResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.constraintId)) {
      query["ConstraintId"] = request.constraintId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetConstraintResponse>(await this.callApi(params, req, runtime), new GetConstraintResponse({}));
  }

  async getConstraint(request: GetConstraintRequest): Promise<GetConstraintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConstraintWithOptions(request, runtime);
  }

  async getPortfolioWithOptions(request: GetPortfolioRequest, runtime: $Util.RuntimeOptions): Promise<GetPortfolioResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.portfolioId)) {
      query["PortfolioId"] = request.portfolioId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetPortfolioResponse>(await this.callApi(params, req, runtime), new GetPortfolioResponse({}));
  }

  async getPortfolio(request: GetPortfolioRequest): Promise<GetPortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPortfolioWithOptions(request, runtime);
  }

  async getProductAsAdminWithOptions(request: GetProductAsAdminRequest, runtime: $Util.RuntimeOptions): Promise<GetProductAsAdminResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetProductAsAdminResponse>(await this.callApi(params, req, runtime), new GetProductAsAdminResponse({}));
  }

  async getProductAsAdmin(request: GetProductAsAdminRequest): Promise<GetProductAsAdminResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductAsAdminWithOptions(request, runtime);
  }

  /**
    * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](~~405233~~).
    *
    * @param request GetProductAsEndUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetProductAsEndUserResponse
   */
  async getProductAsEndUserWithOptions(request: GetProductAsEndUserRequest, runtime: $Util.RuntimeOptions): Promise<GetProductAsEndUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetProductAsEndUserResponse>(await this.callApi(params, req, runtime), new GetProductAsEndUserResponse({}));
  }

  /**
    * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](~~405233~~).
    *
    * @param request GetProductAsEndUserRequest
    * @return GetProductAsEndUserResponse
   */
  async getProductAsEndUser(request: GetProductAsEndUserRequest): Promise<GetProductAsEndUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductAsEndUserWithOptions(request, runtime);
  }

  async getProductVersionWithOptions(request: GetProductVersionRequest, runtime: $Util.RuntimeOptions): Promise<GetProductVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productVersionId)) {
      query["ProductVersionId"] = request.productVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetProductVersionResponse>(await this.callApi(params, req, runtime), new GetProductVersionResponse({}));
  }

  async getProductVersion(request: GetProductVersionRequest): Promise<GetProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProductVersionWithOptions(request, runtime);
  }

  async getProvisionedProductWithOptions(request: GetProvisionedProductRequest, runtime: $Util.RuntimeOptions): Promise<GetProvisionedProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.provisionedProductId)) {
      query["ProvisionedProductId"] = request.provisionedProductId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetProvisionedProductResponse>(await this.callApi(params, req, runtime), new GetProvisionedProductResponse({}));
  }

  async getProvisionedProduct(request: GetProvisionedProductRequest): Promise<GetProvisionedProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProvisionedProductWithOptions(request, runtime);
  }

  async getProvisionedProductPlanWithOptions(request: GetProvisionedProductPlanRequest, runtime: $Util.RuntimeOptions): Promise<GetProvisionedProductPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.planId)) {
      body["PlanId"] = request.planId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new GetProvisionedProductPlanResponse({}));
  }

  async getProvisionedProductPlan(request: GetProvisionedProductPlanRequest): Promise<GetProvisionedProductPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProvisionedProductPlanWithOptions(request, runtime);
  }

  async getTagOptionWithOptions(request: GetTagOptionRequest, runtime: $Util.RuntimeOptions): Promise<GetTagOptionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetTagOptionResponse>(await this.callApi(params, req, runtime), new GetTagOptionResponse({}));
  }

  async getTagOption(request: GetTagOptionRequest): Promise<GetTagOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTagOptionWithOptions(request, runtime);
  }

  async getTaskWithOptions(request: GetTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  async getTemplateWithOptions(request: GetTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productVersionId)) {
      query["ProductVersionId"] = request.productVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async getTemplate(request: GetTemplateRequest): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  async launchProductWithOptions(request: LaunchProductRequest, runtime: $Util.RuntimeOptions): Promise<LaunchProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!Util.isUnset(request.provisionedProductName)) {
      body["ProvisionedProductName"] = request.provisionedProductName;
    }

    if (!Util.isUnset(request.stackRegionId)) {
      body["StackRegionId"] = request.stackRegionId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<LaunchProductResponse>(await this.callApi(params, req, runtime), new LaunchProductResponse({}));
  }

  async launchProduct(request: LaunchProductRequest): Promise<LaunchProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.launchProductWithOptions(request, runtime);
  }

  async listLaunchOptionsWithOptions(request: ListLaunchOptionsRequest, runtime: $Util.RuntimeOptions): Promise<ListLaunchOptionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListLaunchOptionsResponse>(await this.callApi(params, req, runtime), new ListLaunchOptionsResponse({}));
  }

  async listLaunchOptions(request: ListLaunchOptionsRequest): Promise<ListLaunchOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLaunchOptionsWithOptions(request, runtime);
  }

  async listPortfoliosWithOptions(request: ListPortfoliosRequest, runtime: $Util.RuntimeOptions): Promise<ListPortfoliosResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListPortfoliosResponse>(await this.callApi(params, req, runtime), new ListPortfoliosResponse({}));
  }

  async listPortfolios(request: ListPortfoliosRequest): Promise<ListPortfoliosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPortfoliosWithOptions(request, runtime);
  }

  async listPrincipalsWithOptions(request: ListPrincipalsRequest, runtime: $Util.RuntimeOptions): Promise<ListPrincipalsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.portfolioId)) {
      query["PortfolioId"] = request.portfolioId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListPrincipalsResponse>(await this.callApi(params, req, runtime), new ListPrincipalsResponse({}));
  }

  async listPrincipals(request: ListPrincipalsRequest): Promise<ListPrincipalsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrincipalsWithOptions(request, runtime);
  }

  async listProductVersionsWithOptions(request: ListProductVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListProductVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListProductVersionsResponse>(await this.callApi(params, req, runtime), new ListProductVersionsResponse({}));
  }

  async listProductVersions(request: ListProductVersionsRequest): Promise<ListProductVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductVersionsWithOptions(request, runtime);
  }

  async listProductsAsAdminWithOptions(request: ListProductsAsAdminRequest, runtime: $Util.RuntimeOptions): Promise<ListProductsAsAdminResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.portfolioId)) {
      query["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListProductsAsAdminResponse>(await this.callApi(params, req, runtime), new ListProductsAsAdminResponse({}));
  }

  async listProductsAsAdmin(request: ListProductsAsAdminRequest): Promise<ListProductsAsAdminResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductsAsAdminWithOptions(request, runtime);
  }

  /**
    * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](~~405233~~).
    *
    * @param request ListProductsAsEndUserRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListProductsAsEndUserResponse
   */
  async listProductsAsEndUserWithOptions(request: ListProductsAsEndUserRequest, runtime: $Util.RuntimeOptions): Promise<ListProductsAsEndUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListProductsAsEndUserResponse>(await this.callApi(params, req, runtime), new ListProductsAsEndUserResponse({}));
  }

  /**
    * Make sure that you are granted the permissions to manage relevant products as a user by an administrator. For more information, see [Manage access permissions](~~405233~~).
    *
    * @param request ListProductsAsEndUserRequest
    * @return ListProductsAsEndUserResponse
   */
  async listProductsAsEndUser(request: ListProductsAsEndUserRequest): Promise<ListProductsAsEndUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProductsAsEndUserWithOptions(request, runtime);
  }

  async listProvisionedProductPlanApproversWithOptions(request: ListProvisionedProductPlanApproversRequest, runtime: $Util.RuntimeOptions): Promise<ListProvisionedProductPlanApproversResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListProvisionedProductPlanApproversResponse>(await this.callApi(params, req, runtime), new ListProvisionedProductPlanApproversResponse({}));
  }

  async listProvisionedProductPlanApprovers(request: ListProvisionedProductPlanApproversRequest): Promise<ListProvisionedProductPlanApproversResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProvisionedProductPlanApproversWithOptions(request, runtime);
  }

  async listProvisionedProductPlansWithOptions(request: ListProvisionedProductPlansRequest, runtime: $Util.RuntimeOptions): Promise<ListProvisionedProductPlansResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessLevelFilter)) {
      query["AccessLevelFilter"] = request.accessLevelFilter;
    }

    if (!Util.isUnset(request.approvalFilter)) {
      query["ApprovalFilter"] = request.approvalFilter;
    }

    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.provisionedProductId)) {
      query["ProvisionedProductId"] = request.provisionedProductId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListProvisionedProductPlansResponse>(await this.callApi(params, req, runtime), new ListProvisionedProductPlansResponse({}));
  }

  async listProvisionedProductPlans(request: ListProvisionedProductPlansRequest): Promise<ListProvisionedProductPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProvisionedProductPlansWithOptions(request, runtime);
  }

  async listProvisionedProductsWithOptions(request: ListProvisionedProductsRequest, runtime: $Util.RuntimeOptions): Promise<ListProvisionedProductsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessLevelFilter)) {
      query["AccessLevelFilter"] = request.accessLevelFilter;
    }

    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListProvisionedProductsResponse>(await this.callApi(params, req, runtime), new ListProvisionedProductsResponse({}));
  }

  async listProvisionedProducts(request: ListProvisionedProductsRequest): Promise<ListProvisionedProductsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProvisionedProductsWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async listResourcesForTagOptionWithOptions(request: ListResourcesForTagOptionRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesForTagOptionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListResourcesForTagOptionResponse>(await this.callApi(params, req, runtime), new ListResourcesForTagOptionResponse({}));
  }

  async listResourcesForTagOption(request: ListResourcesForTagOptionRequest): Promise<ListResourcesForTagOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesForTagOptionWithOptions(request, runtime);
  }

  async listTagOptionsWithOptions(tmpReq: ListTagOptionsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagOptionsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagOptionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListTagOptionsResponse>(await this.callApi(params, req, runtime), new ListTagOptionsResponse({}));
  }

  async listTagOptions(request: ListTagOptionsRequest): Promise<ListTagOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagOptionsWithOptions(request, runtime);
  }

  async listTasksWithOptions(request: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.provisionedProductId)) {
      query["ProvisionedProductId"] = request.provisionedProductId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  /**
    * After a product instance is terminated, the product instance is deleted from the product instance list. End users cannot manage the product instance throughout its lifecycle. Proceed with caution.
    *
    * @param request TerminateProvisionedProductRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TerminateProvisionedProductResponse
   */
  async terminateProvisionedProductWithOptions(request: TerminateProvisionedProductRequest, runtime: $Util.RuntimeOptions): Promise<TerminateProvisionedProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.provisionedProductId)) {
      body["ProvisionedProductId"] = request.provisionedProductId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<TerminateProvisionedProductResponse>(await this.callApi(params, req, runtime), new TerminateProvisionedProductResponse({}));
  }

  /**
    * After a product instance is terminated, the product instance is deleted from the product instance list. End users cannot manage the product instance throughout its lifecycle. Proceed with caution.
    *
    * @param request TerminateProvisionedProductRequest
    * @return TerminateProvisionedProductResponse
   */
  async terminateProvisionedProduct(request: TerminateProvisionedProductRequest): Promise<TerminateProvisionedProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateProvisionedProductWithOptions(request, runtime);
  }

  async updateConstraintWithOptions(request: UpdateConstraintRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConstraintResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.constraintId)) {
      body["ConstraintId"] = request.constraintId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateConstraintResponse>(await this.callApi(params, req, runtime), new UpdateConstraintResponse({}));
  }

  async updateConstraint(request: UpdateConstraintRequest): Promise<UpdateConstraintResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConstraintWithOptions(request, runtime);
  }

  async updatePortfolioWithOptions(request: UpdatePortfolioRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePortfolioResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.portfolioName)) {
      body["PortfolioName"] = request.portfolioName;
    }

    if (!Util.isUnset(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdatePortfolioResponse>(await this.callApi(params, req, runtime), new UpdatePortfolioResponse({}));
  }

  async updatePortfolio(request: UpdatePortfolioRequest): Promise<UpdatePortfolioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePortfolioWithOptions(request, runtime);
  }

  async updateProductWithOptions(request: UpdateProductRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productName)) {
      body["ProductName"] = request.productName;
    }

    if (!Util.isUnset(request.providerName)) {
      body["ProviderName"] = request.providerName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateProductResponse>(await this.callApi(params, req, runtime), new UpdateProductResponse({}));
  }

  async updateProduct(request: UpdateProductRequest): Promise<UpdateProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductWithOptions(request, runtime);
  }

  async updateProductVersionWithOptions(request: UpdateProductVersionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProductVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.active)) {
      body["Active"] = request.active;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.guidance)) {
      body["Guidance"] = request.guidance;
    }

    if (!Util.isUnset(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!Util.isUnset(request.productVersionName)) {
      body["ProductVersionName"] = request.productVersionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateProductVersionResponse>(await this.callApi(params, req, runtime), new UpdateProductVersionResponse({}));
  }

  async updateProductVersion(request: UpdateProductVersionRequest): Promise<UpdateProductVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProductVersionWithOptions(request, runtime);
  }

  async updateProvisionedProductWithOptions(request: UpdateProvisionedProductRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProvisionedProductResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!Util.isUnset(request.provisionedProductId)) {
      body["ProvisionedProductId"] = request.provisionedProductId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateProvisionedProductResponse>(await this.callApi(params, req, runtime), new UpdateProvisionedProductResponse({}));
  }

  async updateProvisionedProduct(request: UpdateProvisionedProductRequest): Promise<UpdateProvisionedProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProvisionedProductWithOptions(request, runtime);
  }

  async updateProvisionedProductPlanWithOptions(request: UpdateProvisionedProductPlanRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProvisionedProductPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.planId)) {
      body["PlanId"] = request.planId;
    }

    if (!Util.isUnset(request.portfolioId)) {
      body["PortfolioId"] = request.portfolioId;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productVersionId)) {
      body["ProductVersionId"] = request.productVersionId;
    }

    if (!Util.isUnset(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateProvisionedProductPlanResponse>(await this.callApi(params, req, runtime), new UpdateProvisionedProductPlanResponse({}));
  }

  async updateProvisionedProductPlan(request: UpdateProvisionedProductPlanRequest): Promise<UpdateProvisionedProductPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProvisionedProductPlanWithOptions(request, runtime);
  }

  async updateTagOptionWithOptions(request: UpdateTagOptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTagOptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.active)) {
      body["Active"] = request.active;
    }

    if (!Util.isUnset(request.tagOptionId)) {
      body["TagOptionId"] = request.tagOptionId;
    }

    if (!Util.isUnset(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateTagOptionResponse>(await this.callApi(params, req, runtime), new UpdateTagOptionResponse({}));
  }

  async updateTagOption(request: UpdateTagOptionRequest): Promise<UpdateTagOptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTagOptionWithOptions(request, runtime);
  }

}
