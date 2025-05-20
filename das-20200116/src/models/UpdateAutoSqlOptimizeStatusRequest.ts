// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAutoSqlOptimizeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The database instance IDs. Separate multiple IDs with commas (,).
   * 
   * >  You can specify up to 50 instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp10usoc1erj7****,rm-bp10usoc1erj7****
   */
  instances?: string;
  /**
   * @remarks
   * The status of the automatic SQL optimization feature. Valid values:
   * 
   * *   **0**: The automatic SQL optimization feature is disabled.
   * *   **1**: **SQL diagnosis and automatic index creation** is specified.
   * *   **3**: **SQL diagnosis only** is specified.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

