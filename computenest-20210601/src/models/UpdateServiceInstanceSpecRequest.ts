// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceSpecRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * Valid values:
   * 
   * - **true** (default): enables automatic payment. You must ensure that your account balance is sufficient.
   * 
   * - **false**: generates an order but does not deduct the fee. If the balance of your payment method is insufficient, you can set the AutoPay parameter to false. In this case, an unpaid order is generated, and you can log on to the [ApsaraDB RDS console](https://rdsnext.console.aliyun.com/dashboard/cn-beijing) to pay the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The coupon.
   * 
   * @example
   * sxs-xxx
   */
  couponId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      couponId: 'CouponId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      couponId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client, but you must ensure that the value is unique among different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The purchase order information for Alibaba Cloud Marketplace. This parameter is not required if the service is not listed in Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.
   */
  commodity?: UpdateServiceInstanceSpecRequestCommodity;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request, including checks on permissions and instance status.
   * 
   * Valid values:
   * 
   * - true: sends the request but does not create a service instance.
   * 
   * - false: sends the request and creates the service instance if the check is passed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Prometheus monitoring on the user side.
   * 
   * Valid values:
   * 
   * - true: Enabled.
   * 
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the specification modification operation.
   * 
   * You can obtain the name and content of the specification modification operation configured for the service by viewing the **ModifyParametersConfig** property of the **OperationMetadata** response parameter in the [GetService - Get service details](https://help.aliyun.com/document_detail/2340828.html) operation.
   * 
   * @example
   * Plan configuration change
   */
  operationName?: string;
  /**
   * @remarks
   * The modification parameters of the service instance.
   * 
   * You can specify this parameter if the service provider set **Change Type** to **Parameter Change** when adding a specification modification operation.
   * 
   * > - You can obtain the modification parameters configured for the service by viewing the **ModifyParametersConfig** property of the **OperationMetadata** response parameter in the [GetService - Get service details](https://help.aliyun.com/document_detail/2340828.html) operation.
   * > - You can also view the modification parameters configured for the service on the **Service Instance Modification** page in the [Compute Nest console](https://computenest.console.aliyun.com/service/instance/cn-hangzhou).
   * 
   * For example, if the service is configured to upgrade the ECS instance type, you must specify an instance type that is higher than the original instance type of the service instance.
   * 
   * @example
   * {
   *   "InstanceType": "ecs.g8ise.2xlarge"
   * }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The plan name of the service instance.
   * 
   * You can specify this parameter if the service provider set **Change Type** to **Plan Change** when adding a specification modification operation.
   * 
   * You can obtain the plan name configured for the service by viewing the **PredefinedParameters** property of the **DeployMetadata** response parameter in the [GetService - Get service details](https://help.aliyun.com/document_detail/2340828.html) operation.
   * 
   * @example
   * Package 1
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * You can call the [ListServiceInstances - List service instances](https://help.aliyun.com/document_detail/396200.html) operation to obtain the service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d6ab3a63ccbb4b17****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      dryRun: 'DryRun',
      enableUserPrometheus: 'EnableUserPrometheus',
      operationName: 'OperationName',
      parameters: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: UpdateServiceInstanceSpecRequestCommodity,
      dryRun: 'boolean',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
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

