// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the probe.
   * 
   * @example
   * probe-test
   */
  displayName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the probe. Valid values:
   * 
   * *   **installed**: installed
   * *   **install_failed**: installation failed
   * *   **online**: online
   * *   **offline**: offline
   * *   **unnormal**: abnormal
   * *   **unprobe**: unauthorized
   * *   **uninstalling**: being uninstalled
   * *   **uninstalled**: uninstalled
   * *   **uninstall_failed**: uninstallation failed
   * *   **not_exist**: not installed
   * 
   * @example
   * online
   */
  probeStatus?: string;
  /**
   * @remarks
   * The type of the probe. Valid values:
   * 
   * *   **host_probe**: host probe
   * *   **vpc_black_hole_probe**: VPC probe
   * 
   * @example
   * host_probe
   */
  probeType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      displayName: 'DisplayName',
      lang: 'Lang',
      pageSize: 'PageSize',
      probeStatus: 'ProbeStatus',
      probeType: 'ProbeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      displayName: 'string',
      lang: 'string',
      pageSize: 'number',
      probeStatus: 'string',
      probeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

