// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersData } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersData";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersPassword } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersPassword";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersURL } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersUrl";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersUsername } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersUsername";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersVswitchId";
import { CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId } from "./CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId";


export class CreateEventStreamingRequestSinkSinkPrometheusParameters extends $dara.Model {
  /**
   * @remarks
   * The authentication method.
   */
  authorizationType?: CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType;
  /**
   * @remarks
   * The metric data.
   */
  data?: CreateEventStreamingRequestSinkSinkPrometheusParametersData;
  headerParameters?: CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters;
  /**
   * @remarks
   * The network type.
   */
  networkType?: CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType;
  /**
   * @remarks
   * The password.
   */
  password?: CreateEventStreamingRequestSinkSinkPrometheusParametersPassword;
  /**
   * @remarks
   * The ID of the security group to which the Managed Service for Prometheus instance belongs.
   */
  securityGroupId?: CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId;
  /**
   * @remarks
   * The URL for the remote write configuration item of the Managed Service for Prometheus instance.
   */
  URL?: CreateEventStreamingRequestSinkSinkPrometheusParametersURL;
  /**
   * @remarks
   * The username.
   */
  username?: CreateEventStreamingRequestSinkSinkPrometheusParametersUsername;
  /**
   * @remarks
   * The ID of the vSwitch with which the Managed Service for Prometheus instance is associated.
   */
  vSwitchId?: CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId;
  /**
   * @remarks
   * The ID of the VPC to which the Managed Service for Prometheus instance belongs.
   */
  vpcId?: CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId;
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
      authorizationType: CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType,
      data: CreateEventStreamingRequestSinkSinkPrometheusParametersData,
      headerParameters: CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters,
      networkType: CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType,
      password: CreateEventStreamingRequestSinkSinkPrometheusParametersPassword,
      securityGroupId: CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId,
      URL: CreateEventStreamingRequestSinkSinkPrometheusParametersURL,
      username: CreateEventStreamingRequestSinkSinkPrometheusParametersUsername,
      vSwitchId: CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId,
      vpcId: CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId,
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

