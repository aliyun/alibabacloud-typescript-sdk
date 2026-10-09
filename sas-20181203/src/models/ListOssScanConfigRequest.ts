// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssScanConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number for paged queries.
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
   * The maximum number of entries to display on each page for paged queries.
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

