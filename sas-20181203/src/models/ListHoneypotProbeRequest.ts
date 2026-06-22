// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHoneypotProbeRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Minimum value: **1**. Default value: **1**.
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
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned per page during paging.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The probe status. Valid values:
   * - **installed**: Installation succeeded.
   * - **install_failed**: Installation failed.
   * - **online**: Normal.
   * - **offline**: Offline.
   * - **unnormal**: Service exception.
   * - **unprobe**: Unauthorized.
   * - **uninstalling**: Uninstalling.
   * - **uninstalled**: Uninstallation succeeded.
   * - **uninstall_failed**: Uninstallation failed.
   * - **not_exist**: Not installed.
   * 
   * @example
   * online
   */
  probeStatus?: string;
  /**
   * @remarks
   * The probe type. Valid values:
   * 
   * - **host_probe**: host probe
   * - **vpc_black_hole_probe**: VPC blackhole probe.
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

