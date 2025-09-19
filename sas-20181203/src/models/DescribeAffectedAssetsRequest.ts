// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAffectedAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  current?: string;
  /**
   * @remarks
   * The severity. Separate multiple severities with commas (,). Valid values:
   * 
   * *   serious
   * *   suspicious
   * *   remind
   * 
   * @example
   * serious,suspicious,remind
   */
  levels?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      levels: 'Levels',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'string',
      levels: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

