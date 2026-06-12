// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of compute units (CUs). CUs are the compute cores that can be used in parallel when Dedicated SQL is running.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  cu?: number;
  /**
   * @remarks
   * Specifies whether to enable Dedicated SQL by default for the project. If you set this parameter to \\`true\\`, all query and analysis operations in the project, such as alerting and dashboards, use Dedicated SQL.
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

