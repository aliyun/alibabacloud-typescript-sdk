// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAffectedAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: string;
  /**
   * @remarks
   * The severity level. Separate multiple values with commas (,). Valid values:
   * - serious: urgent
   * - suspicious: suspicious
   * - remind: reminder.
   * 
   * @example
   * serious,suspicious,remind
   */
  levels?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paginated query. Default value: 20. If this parameter is left empty, 20 entries are returned.
   * >Do not leave PageSize empty.
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

