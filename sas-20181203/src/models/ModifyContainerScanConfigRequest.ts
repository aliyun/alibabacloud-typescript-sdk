// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContainerScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container application.
   * 
   * @example
   * [\\"logtail-ds\\",\\"alicloud-monitor-controller\\",\\"storage-snapshot-manager\\"]
   */
  appNames?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * cfb7a55a81f7246b5ac18845ea79a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      appNames: 'AppNames',
      clusterId: 'ClusterId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appNames: 'string',
      clusterId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

