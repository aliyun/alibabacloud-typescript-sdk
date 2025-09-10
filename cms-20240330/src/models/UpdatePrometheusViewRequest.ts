// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusViewRequestPrometheusInstances extends $dara.Model {
  /**
   * @example
   * c7ba84651c71e442c8d0653085d862164
   */
  prometheusInstanceId?: string;
  /**
   * @example
   * cn-north-2-gov-1
   */
  regionId?: string;
  /**
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
   * @example
   * 0.0.0.0/0
   */
  authFreeReadPolicy?: string;
  /**
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @example
   * false
   */
  enableAuthToken?: boolean;
  prometheusInstances?: UpdatePrometheusViewRequestPrometheusInstances[];
  /**
   * @example
   * test-prom-view-name
   */
  prometheusViewName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
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

