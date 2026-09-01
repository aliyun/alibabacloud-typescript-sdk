// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The business source. Valid values:
   * - **OSS**: OSS
   * - **NAS**: NAS
   * 
   * @example
   * OSS
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

