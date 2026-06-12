// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEstimateCostRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * The coupon ID.
   * 
   * @example
   * 302070970220
   */
  couponId?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  payPeriod?: number;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - Year: Year.
   * 
   * - Month: Month.
   * 
   * - Day: Day.
   * 
   * @example
   * Year
   */
  payPeriodUnit?: string;
  /**
   * @remarks
   * The ID of the private offer in Alibaba Cloud Marketplace.
   * 
   * @example
   * 17cde2e8-2f5d-xxxx-xxxx-5120dd215d66
   */
  quotationId?: string;
  static names(): { [key: string]: string } {
    return {
      couponId: 'CouponId',
      payPeriod: 'PayPeriod',
      payPeriodUnit: 'PayPeriodUnit',
      quotationId: 'QuotationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      couponId: 'string',
      payPeriod: 'number',
      payPeriodUnit: 'string',
      quotationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEstimateCostRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. Generate a unique value for each request. The **ClientToken** supports only ASCII characters and cannot be longer than 64 characters.
   * 
   * @example
   * qwertyuiop
   */
  clientToken?: string;
  /**
   * @remarks
   * The subscription period for the purchase order.
   */
  commodity?: GetServiceEstimateCostRequestCommodity;
  /**
   * @remarks
   * The name of the upgrade or downgrade operation.
   * 
   * @example
   * Parameter configuration change
   */
  operationName?: string;
  /**
   * @remarks
   * The parameters to deploy the service instance.
   * 
   * @example
   * { \\"RegionId\\": \\"cn-hangzhou\\", \\"InstanceType\\": \\"ecs.g5.large\\"}
   */
  parameters?: { [key: string]: any };
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
   * The service ID.
   * 
   * This parameter is required.
   * 
   * @example
   * service-12xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-d6ab3a63ccbb4b17xxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * Package 1
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The usage type. Valid values:
   * 
   * - Trial: The service supports a free trial.
   * 
   * - NotTrial: The service does not support a free trial.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      operationName: 'OperationName',
      parameters: 'Parameters',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceVersion: 'ServiceVersion',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: GetServiceEstimateCostRequestCommodity,
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceVersion: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

