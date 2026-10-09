// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulListPageRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The CVE ID of the vulnerability.
   * 
   * @example
   * CVE-2022-44702
   */
  cveId?: string;
  /**
   * @remarks
   * The maximum number of entries to display per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether runtime application self-protection (RASP) is supported. Valid values:
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 0
   */
  raspDefend?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * Remote code execute vulnerability
   */
  vulNameLike?: string;
  /**
   * @remarks
   * The type of vulnerability to query. Valid values:
   * 
   * - cve: Linux software vulnerability
   * - sys: Windows system vulnerability
   * - app: application vulnerability
   * 
   * @example
   * cve
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      cveId: 'CveId',
      pageSize: 'PageSize',
      raspDefend: 'RaspDefend',
      vulNameLike: 'VulNameLike',
      vulType: 'VulType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      cveId: 'string',
      pageSize: 'number',
      raspDefend: 'number',
      vulNameLike: 'string',
      vulType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

