// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceConnectivityDiagnosisResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The outlier detection item. Valid values:
   * 
   * - **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not added to the user whitelist.
   * - **VIP_NOT_EXISTS**: The ALB instance corresponding to the VIP does not exist.
   * - **RS_NOT_EXISTS**: The RS is not properly mounted.
   * - **VIP_TUNNEL_ID_NOT_CONSISTENT**: The TUNNEL ID used by the VPC-type VIP is inconsistent with the actual TUNNEL ID of the VPC.
   * - **VIP_VPC_CLOUD_INSTANCE_NOT_EXISTS**: The VPC-type VIP does not exist.
   * - **VIP_IS_NOT_NGLB**: The NGLB pattern is shutdown for the VIP.
   * - **CUSTINS_NOT_ASSOCIATE_ECS_SECURITY_GROUP**: The instance is not associated with a security group.
   * - **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not added to the user whitelist.
   * - **SRC_IP_NOT_IN_ADMIN_WHITELIST**: The source IP address is not added to the management machine whitelist.
   * - **SRC_IP_NOT_IN_ECS_SECURITY_GROUP**: The source IP address is not added to the security group associated with the instance.
   * - **VPC_INSTANCE_IP_NOT_WORKING_STATUS**: The VPC IP address is in an abnormal state.
   * 
   * @example
   * SRC_IP_NOT_IN_USER_WHITELIST
   */
  connCheckErrorCode?: string;
  /**
   * @remarks
   * The details of the outlier detection item.
   * 
   * @example
   * Src ip:47.100.XX.XX not in user whitelist
   */
  connCheckErrorMessage?: string;
  /**
   * @remarks
   * The exception type. Valid values:
   * 
   * - **0**: The issue can be resolved by the user.
   * - **1**: The issue requires on-duty personnel to resolve.
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
   * Indicates whether the check is passed. Valid values:
   * 
   * - **true**: The check is passed.
   * - **false**: The check is not passed.
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
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details.
   */
  data?: GetDBInstanceConnectivityDiagnosisResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, an error message is returned, such as an error code.
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
   * Indicates whether the request is successful. Valid values:
   * * **true**: The request is successful.
   * * **false**: The request fails.
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

