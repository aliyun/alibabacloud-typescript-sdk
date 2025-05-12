// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterConfigChangeLogsResponseBodyDataParamChangeLogs extends $dara.Model {
  /**
   * @example
   * 2022-10-11T08:53:32Z
   */
  gmtCreated?: string;
  /**
   * @example
   * 2024-03-08T10:08Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the change log.
   * 
   * @example
   * 617975
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the modification has taken effect.
   * 
   * @example
   * false
   */
  isApplied?: boolean;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * cumulative_compaction_rounds_for_each_base_compaction_round
   */
  name?: string;
  /**
   * @example
   * 12
   */
  newValue?: string;
  /**
   * @example
   * 10
   */
  oldValue?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      isApplied: 'IsApplied',
      name: 'Name',
      newValue: 'NewValue',
      oldValue: 'OldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      isApplied: 'boolean',
      name: 'string',
      newValue: 'string',
      oldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

