// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceConnectivityDiagnosisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The exception detection items:
   * 
   * *   **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not added to the whitelist of the user.
   * *   **VIP_NOT_EXISTS**: The Application Load Balancer (ALB) instance corresponding to the virtual IP address (VIP) does not exist.
   * *   **RS_NOT_EXISTS**: The resource sharing (RS) is not properly mounted.
   * *   **VIP_TUNNEL_ID_NOT_CONSISTENT**: The tunnel ID used by the VIP of the virtual private cloud (VPC) type is different from the tunnel ID of the VPC.
   * *   **VIP_VPC_CLOUD_INSTANCE_NOT_EXISTS**: The VIP of the VPC type does not exist.
   * *   **VIP_IS_NOT_NGLB**: The NGLB mode is disabled for the VIP.
   * *   **CUSTINS_NOT_ASSOCIATE_ECS_SECURITY_GROUP**: No security group is associated with the instance.
   * *   **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not added to the whitelist of the user.
   * *   **SRC_IP_NOT_IN_ADMIN_WHITELIST**: The source IP address is not added to the whitelist of the instance.
   * *   **SRC_IP_NOT_IN_ECS_SECURITY_GROUP**: The source IP address is not added to the security group that is associated with the instance.
   * *   **VPC_INSTANCE_IP_NOT_WORKING_STATUS**: The IP address in the VPC is in an abnormal state.
   * 
   * @example
   * SRC_IP_NOT_IN_USER_WHITELIST
   */
  connCheckErrorCode?: string;
  /**
   * @remarks
   * The details of the exception detection.
   * 
   * @example
   * Src ip:47.110.180.62 not in user whitelist
   */
  connCheckErrorMessage?: string;
  /**
   * @remarks
   * The type of the exception:
   * 
   * *   **0**: an exception that can be handled by the user.
   * *   **1**: an exception that can be handled by a technical engineer.
   * 
   * @example
   * 0
   */
  failType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the connectivity test was passed:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      connCheckErrorCode: 'connCheckErrorCode',
      connCheckErrorMessage: 'connCheckErrorMessage',
      failType: 'failType',
      instanceId: 'instanceId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connCheckErrorCode: 'string',
      connCheckErrorMessage: 'string',
      failType: 'string',
      instanceId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDBInstanceConnectivityDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information.
   */
  data?: GetDBInstanceConnectivityDiagnosisResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request was successful, **Successful** is returned. Otherwise, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDBInstanceConnectivityDiagnosisResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

