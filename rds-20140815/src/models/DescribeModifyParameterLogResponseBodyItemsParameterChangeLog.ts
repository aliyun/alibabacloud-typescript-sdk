// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyParameterLogResponseBodyItemsParameterChangeLog extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter was modified. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1584076066000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The new value of the parameter.
   * 
   * @example
   * 3
   */
  newParameterValue?: string;
  /**
   * @remarks
   * The original value of the parameter.
   * 
   * @example
   * 8
   */
  oldParameterValue?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * innodb_stats_sample_pages
   */
  parameterName?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * *   **Applied:** The new value has taken effect.
   * *   **Syncing:** The new value is being applied and has not taken effect.
   * 
   * @example
   * Syncing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      newParameterValue: 'NewParameterValue',
      oldParameterValue: 'OldParameterValue',
      parameterName: 'ParameterName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      newParameterValue: 'string',
      oldParameterValue: 'string',
      parameterName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

