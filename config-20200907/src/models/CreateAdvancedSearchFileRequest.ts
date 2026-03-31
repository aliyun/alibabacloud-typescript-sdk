// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdvancedSearchFileRequest extends $dara.Model {
  /**
   * @remarks
   * The SQL statement used to query resources.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * WHERE ResourceType = \\"ACS::ECS::Instance\\"
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

