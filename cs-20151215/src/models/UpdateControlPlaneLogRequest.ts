// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateControlPlaneLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 162981*****
   * 
   * **if can be null:**
   * true
   */
  aliuid?: string;
  /**
   * @remarks
   * The control plane components for which you want to enable log collection.
   */
  components?: string[];
  /**
   * @remarks
   * The name of the Simple Log Service Project that you want to use to store the logs of control plane components.
   * 
   * Default value: k8s-log-$Cluster ID.
   * 
   * @example
   * k8s-log-c5b5e80b0b64a4bf6939d2d8fbbc5****
   * 
   * **if can be null:**
   * true
   */
  logProject?: string;
  /**
   * @remarks
   * The retention period of the log data stored in the Logstore. Valid values: 1 to 3000. Unit: days.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   * 
   * **if can be null:**
   * true
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

