// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyAttachmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the attached resource.
   * 
   * @example
   * op-csbkd9llhtgqhqua***
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The type of the attached resource. Valid values: HttpApi, GatewayRoute, Operation, GatewayService, GatewayServicePort, Gateway, and Domain.
   * 
   * @example
   * Operation
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The configuration of the attached policy.
   * 
   * @example
   * {"unitNum":1,"timeUnit":"s","enable":true}
   */
  config?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qa***
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-cq2vundlhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The policy attachment ID.
   * 
   * @example
   * pr-cqoojualhtgquuj***
   */
  policyAttachmentId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * p-cq7l5s5bblhtgi6qas***
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      config: 'config',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      policyAttachmentId: 'policyAttachmentId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      config: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      policyAttachmentId: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetPolicyAttachmentResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C3B9A12-3868-5EB9-fBEA-F99E03DD1***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPolicyAttachmentResponseBodyData,
      message: 'string',
      requestId: 'string',
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

