// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSqlInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of Compute Units (CUs). A CU is a compute core that can be used for parallel processing when Dedicated SQL is running.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * Specifies whether to enable Dedicated SQL for the project by default. If this parameter is set to true, all query and analysis operations in the project, such as alerts and dashboards, use Dedicated SQL.
   * 
   * This parameter is required.
   */
  useAsDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      cu: 'cu',
      useAsDefault: 'useAsDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cu: 'number',
      useAsDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

