// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceSpecShrinkRequestCommodity extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * Valid values:
   * 
   * *   **true (default)**: automatically completes the payment. You must make sure that your account balance is sufficient.
   * *   **false**: does not automatically complete the payment. An unpaid order is generated. If your account balance is insufficient, you can set AutoPay to false. In this case, an unpaid order is generated. You can complete the payment in the Expenses and Costs console.[](https://rdsnext.console.aliyun.com/dashboard/cn-beijing)
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The information about the order placed in Alibaba Cloud Marketplace. You do not need to specify this parameter if the service is not published in Alibaba Cloud Marketplace or uses the pay-as-you-go billing method.
   */
  commodity?: UpdateServiceInstanceSpecShrinkRequestCommodity;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. A dry run includes checks on the permissions and instance state.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run but does not create a service instance.
   * *   false: performs a dry run and creates a service instance if the request passes the dry run.
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
   * true
   * 
   * false
   * 
   * @example
   * true
   */
  enableUserPrometheus?: boolean;
  /**
   * @remarks
   * The name of the configuration change operation.
   * 
   * To obtain the names and content of the configuration change operations of the service, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **ModifyParametersConfig** in the value of **OperationMetadata**.
   * 
   * @example
   * package modify
   */
  operationName?: string;
  /**
   * @remarks
   * The configuration parameter.
   * 
   * This parameter is available if the service provider set **Method** to **Change Parameter** when configuring configuration change operations.
   * 
   * > 
   * 
   * *   To obtain the parameters of the service that support configuration change, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **ModifyParametersConfig** in the value of **OperationMetadata**.
   * 
   * *   You can also view the parameters of the service that support configuration change in the **configuration change** dialog box in the [Compute Nest console](https://computenest.console.aliyun.com/service/instance/cn-hangzhou).
   * 
   * For example, if the service supports Elastic Compute Service (ECS) instance type upgrade, you must specify an instance type that has higher specifications than the current one.
   * 
   * @example
   * {
   *   "InstanceType": "ecs.g8ise.2xlarge"
   * }
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The name of the configuration plan.
   * 
   * This parameter is available if the service provider set **Method** to **Change Plan** when configuring configuration change operations.
   * 
   * To obtain the configuration plan names of the service, you can call the [GetService](https://help.aliyun.com/document_detail/2340828.html) operation. In the response, check the value of **PredefinedParameters** in the value of **DeployMetadata**.
   * 
   * @example
   * package One
   */
  predefinedParametersName?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * You can call the [ListServiceInstances](https://help.aliyun.com/document_detail/396200.html) operation to obtain the ID of the service instance.
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
      parametersShrink: 'Parameters',
      predefinedParametersName: 'PredefinedParametersName',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: UpdateServiceInstanceSpecShrinkRequestCommodity,
      dryRun: 'boolean',
      enableUserPrometheus: 'boolean',
      operationName: 'string',
      parametersShrink: 'string',
      predefinedParametersName: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    if(this.commodity && typeof (this.commodity as any).validate === 'function') {
      (this.commodity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

