// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerScanTaskByAppNameRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container application.
   * 
   * @example
   * app-centos-01
   */
  appNames?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cfb7a55a81f7246b5ac18845ea79a****
   */
  clusterId?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
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

