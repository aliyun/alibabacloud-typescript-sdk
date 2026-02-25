// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Container } from "./Container";
import { WebNetworkConfig } from "./WebNetworkConfig";


export class RevisionConfig extends $dara.Model {
  /**
   * @remarks
   * The container configurations. You can deploy only one container for each application. The maximum length of this array is 1.
   * 
   * This parameter is required.
   */
  containers?: Container[];
  /**
   * @remarks
   * Specifies whether to enable Application Real-Time Monitoring Service (ARMS) monitoring. Valid values:
   * 
   * *   **`true`**: Enables the ARMS monitoring.
   * *   **`false`**: Disables the ARMS monitoring.
   * 
   * @example
   * true
   */
  enableArmsMetrics?: boolean;
  /**
   * @remarks
   * The network configurations.
   * 
   * >  This parameter is used to configure network settings for a version of the application.
   */
  webNetworkConfig?: WebNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      enableArmsMetrics: 'EnableArmsMetrics',
      webNetworkConfig: 'WebNetworkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': Container },
      enableArmsMetrics: 'boolean',
      webNetworkConfig: WebNetworkConfig,
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(this.webNetworkConfig && typeof (this.webNetworkConfig as any).validate === 'function') {
      (this.webNetworkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

