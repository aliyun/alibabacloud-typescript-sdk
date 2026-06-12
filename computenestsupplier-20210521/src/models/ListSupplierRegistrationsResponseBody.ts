// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupplierRegistrationsResponseBodySupplierRegistrations extends $dara.Model {
  /**
   * @remarks
   * The review comments.
   * 
   * @example
   * 无
   */
  comment?: string;
  /**
   * @remarks
   * The email address of the contact person.
   * 
   * @example
   * test@163.com
   */
  contactEmail?: string;
  /**
   * @remarks
   * The phone number of the contact person.
   * 
   * @example
   * 135xxxxxxxx
   */
  contactNumber?: string;
  /**
   * @remarks
   * The contact person.
   * 
   * @example
   * John Doe
   */
  contactPerson?: string;
  /**
   * @remarks
   * The title of the contact person.
   * 
   * @example
   * CTO
   */
  contactPersonTitle?: string;
  /**
   * @remarks
   * Indicates whether the reseller mode is supported.
   * 
   * @example
   * false
   */
  enableResellerMode?: boolean;
  /**
   * @remarks
   * The annual revenue of the service provider\\"s product.
   * 
   * @example
   * 10000000
   */
  productAnnualRevenue?: string;
  /**
   * @remarks
   * The industry of the service provider\\"s product.
   * 
   * @example
   * AI
   */
  productBusiness?: string;
  /**
   * @remarks
   * The delivery method of the service provider\\"s product. Valid values:
   * 
   * - SaaS
   * 
   * - License
   * 
   * - API
   * 
   * - Desktop software
   * 
   * - Other
   * 
   * @example
   * SaaS
   */
  productDeliveryTypes?: string;
  /**
   * @remarks
   * The product launch date.
   * 
   * @example
   * 2024.10.24
   */
  productPublishTime?: string;
  /**
   * @remarks
   * The sales model of the service provider\\"s product. Valid values:
   * 
   * - Direct
   * 
   * - Channel
   * 
   * @example
   * 直销
   */
  productSellTypes?: string;
  /**
   * @remarks
   * The ID of the review request.
   * 
   * @example
   * sr-xxx
   */
  registrationId?: string;
  /**
   * @remarks
   * The description of the reseller business.
   * 
   * @example
   * 无
   */
  resellBusinessDesc?: string;
  /**
   * @remarks
   * The review status. Valid values:
   * 
   * - Submitted: The request is submitted.
   * 
   * - Approved: The request is approved.
   * 
   * - Rejected: The request is rejected.
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The time when the request was submitted.
   * 
   * @example
   * 2025-01-22 09:47:58
   */
  submitTime?: string;
  /**
   * @remarks
   * The description of the service provider.
   * 
   * @example
   * 服务商测试申请
   */
  supplierDesc?: string;
  /**
   * @remarks
   * The icon of the service provider.
   * 
   * @example
   * https://service-info-public.oss-cn-hangzhou.aliyuncs.com/xxx/service-xxx/xxx.png
   */
  supplierLogo?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * ComputeNest community service
   */
  supplierName?: string;
  /**
   * @remarks
   * The English name of the service provider.
   * 
   * @example
   * Alibaba Cloud ComputeNest
   */
  supplierNameEn?: string;
  /**
   * @remarks
   * The UID of the service provider.
   * 
   * @example
   * 1256xxx23434
   */
  supplierUid?: string;
  /**
   * @remarks
   * The URL of the service provider\\"s official website.
   * 
   * @example
   * https://www.guangbao-uni.com
   */
  supplierUrl?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contactEmail: 'ContactEmail',
      contactNumber: 'ContactNumber',
      contactPerson: 'ContactPerson',
      contactPersonTitle: 'ContactPersonTitle',
      enableResellerMode: 'EnableResellerMode',
      productAnnualRevenue: 'ProductAnnualRevenue',
      productBusiness: 'ProductBusiness',
      productDeliveryTypes: 'ProductDeliveryTypes',
      productPublishTime: 'ProductPublishTime',
      productSellTypes: 'ProductSellTypes',
      registrationId: 'RegistrationId',
      resellBusinessDesc: 'ResellBusinessDesc',
      status: 'Status',
      submitTime: 'SubmitTime',
      supplierDesc: 'SupplierDesc',
      supplierLogo: 'SupplierLogo',
      supplierName: 'SupplierName',
      supplierNameEn: 'SupplierNameEn',
      supplierUid: 'SupplierUid',
      supplierUrl: 'SupplierUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contactEmail: 'string',
      contactNumber: 'string',
      contactPerson: 'string',
      contactPersonTitle: 'string',
      enableResellerMode: 'boolean',
      productAnnualRevenue: 'string',
      productBusiness: 'string',
      productDeliveryTypes: 'string',
      productPublishTime: 'string',
      productSellTypes: 'string',
      registrationId: 'string',
      resellBusinessDesc: 'string',
      status: 'string',
      submitTime: 'string',
      supplierDesc: 'string',
      supplierLogo: 'string',
      supplierName: 'string',
      supplierNameEn: 'string',
      supplierUid: 'string',
      supplierUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSupplierRegistrationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results.
   * 
   * @example
   * AAAAAdx9kBO7qKpr9My/+XQo0oY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6CC568D-xxxx-xxxx-xxxx-08EB8E9F9F20
   */
  requestId?: string;
  /**
   * @remarks
   * A list of service provider registration requests.
   */
  supplierRegistrations?: ListSupplierRegistrationsResponseBodySupplierRegistrations[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      supplierRegistrations: 'SupplierRegistrations',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      supplierRegistrations: { 'type': 'array', 'itemType': ListSupplierRegistrationsResponseBodySupplierRegistrations },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.supplierRegistrations)) {
      $dara.Model.validateArray(this.supplierRegistrations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

