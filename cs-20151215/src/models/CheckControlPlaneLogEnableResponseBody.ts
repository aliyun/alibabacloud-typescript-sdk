// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckControlPlaneLogEnableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 162981*****
   */
  aliuid?: string;
  /**
   * @remarks
   * The list of components for which control plane logging is enabled.
   * 
   * This parameter is required.
   */
  components?: string[];
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) project that stores the control plane component logs.
   * 
   * Default value: k8s-log-$Cluster ID.
   * 
   * @example
   * k8s-log-c5b5e80b0b64a4bf6939d2d8fbbc5****
   */
  logProject?: string;
  /**
   * @remarks
   * The data retention period of logs in the SLS Logstore. Unit: days.
   * 
   * @example
   * 30
   */
  logTtl?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      components: 'components',
      logProject: 'log_project',
      logTtl: 'log_ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      components: { 'type': 'array', 'itemType': 'string' },
      logProject: 'string',
      logTtl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

