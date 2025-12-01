// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulItemPageRequest extends $dara.Model {
  /**
   * @remarks
   * Vulnerability alias.
   * 
   * @example
   * RHSA-2018:3665-Important: NetworkManager security update
   */
  aliasName?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Processing status. y: processed; n: unprocessed; h: processing.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * Risk level.
   * 
   * @example
   * later
   */
  level?: string;
  /**
   * @remarks
   * Vulnerability name.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20183665
   */
  name?: string;
  /**
   * @remarks
   * Number of items to display per page in the returned data.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Vulnerability type.
   * 
   * @example
   * sca
   */
  scanType?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      level: 'Level',
      name: 'Name',
      pageSize: 'PageSize',
      scanType: 'ScanType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      dealed: 'string',
      level: 'string',
      name: 'string',
      pageSize: 'number',
      scanType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

