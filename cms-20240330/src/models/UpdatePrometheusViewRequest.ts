// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusViewRequestPrometheusInstances extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * c7ba84651c71e442c8d0653085d862164
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-north-2-gov-1
   */
  regionId?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 16727123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusInstanceId: 'prometheusInstanceId',
      regionId: 'regionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusInstanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrometheusViewRequest extends $dara.Model {
  /**
   * @remarks
   * Password-free read policy (supports IP segments and VpcId).
   * 
   * @example
   * {
   *   "SourceIp": [
   *     "192.168.1.0/24",
   *     "172.168.2.22"
   *   ],
   *   "SourceVpc": [
   *     "vpc-xx1",
   *     "vpc-xx2"
   *   ]
   * }
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * Whether to support password-free read.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Whether to support authToken.
   * 
   * @example
   * false
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * List of Prometheus instances.
   */
  prometheusInstances?: UpdatePrometheusViewRequestPrometheusInstances[];
  /**
   * @remarks
   * Prometheus view name.
   * 
   * @example
   * test-prom-view-name
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * Running status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Belonging workspace.
   * 
   * @example
   * default-cms-108490012345-cn-heyuan
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      authFreeReadPolicy: 'authFreeReadPolicy',
      enableAuthFreeRead: 'enableAuthFreeRead',
      enableAuthToken: 'enableAuthToken',
      prometheusInstances: 'prometheusInstances',
      prometheusViewName: 'prometheusViewName',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authFreeReadPolicy: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthToken: 'boolean',
      prometheusInstances: { 'type': 'array', 'itemType': UpdatePrometheusViewRequestPrometheusInstances },
      prometheusViewName: 'string',
      status: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusInstances)) {
      $dara.Model.validateArray(this.prometheusInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

