// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersData } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersData";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersURL } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersUrl";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersVswitchId";
import { UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId } from "./UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId";


export class UpdateEventStreamingRequestSinkSinkPrometheusParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   */
  authorizationType?: UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType;
  /**
   * @remarks
   * The metric data.
   */
  data?: UpdateEventStreamingRequestSinkSinkPrometheusParametersData;
  /**
   * @remarks
   * The parameters that are configured for the request header.
   */
  headerParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters;
  /**
   * @remarks
   * The network type.
   */
  networkType?: UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType;
  /**
   * @remarks
   * The password.
   */
  password?: UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword;
  /**
   * @remarks
   * The ID of the security group.
   */
  securityGroupId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId;
  /**
   * @remarks
   * The URL for the remote write configuration item of the Managed Service for Prometheus instance.
   */
  URL?: UpdateEventStreamingRequestSinkSinkPrometheusParametersURL;
  /**
   * @remarks
   * The username.
   */
  username?: UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername;
  /**
   * @remarks
   * The vSwitch ID.
   */
  vSwitchId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId;
  /**
   * @remarks
   * The VPC ID.
   */
  vpcId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      data: 'Data',
      headerParameters: 'HeaderParameters',
      networkType: 'NetworkType',
      password: 'Password',
      securityGroupId: 'SecurityGroupId',
      URL: 'URL',
      username: 'Username',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType,
      data: UpdateEventStreamingRequestSinkSinkPrometheusParametersData,
      headerParameters: UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters,
      networkType: UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType,
      password: UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword,
      securityGroupId: UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId,
      URL: UpdateEventStreamingRequestSinkSinkPrometheusParametersURL,
      username: UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername,
      vSwitchId: UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId,
      vpcId: UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId,
    };
  }

  validate() {
    if(this.authorizationType && typeof (this.authorizationType as any).validate === 'function') {
      (this.authorizationType as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.headerParameters && typeof (this.headerParameters as any).validate === 'function') {
      (this.headerParameters as any).validate();
    }
    if(this.networkType && typeof (this.networkType as any).validate === 'function') {
      (this.networkType as any).validate();
    }
    if(this.password && typeof (this.password as any).validate === 'function') {
      (this.password as any).validate();
    }
    if(this.securityGroupId && typeof (this.securityGroupId as any).validate === 'function') {
      (this.securityGroupId as any).validate();
    }
    if(this.URL && typeof (this.URL as any).validate === 'function') {
      (this.URL as any).validate();
    }
    if(this.username && typeof (this.username as any).validate === 'function') {
      (this.username as any).validate();
    }
    if(this.vSwitchId && typeof (this.vSwitchId as any).validate === 'function') {
      (this.vSwitchId as any).validate();
    }
    if(this.vpcId && typeof (this.vpcId as any).validate === 'function') {
      (this.vpcId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

