// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSqlExecutionBody extends $dara.Model {
  /**
   * @remarks
   * The description of the SQL execution.
   */
  description?: string;
  /**
   * @remarks
   * The SQL file ID.
   */
  sqlFileId?: string;
  /**
   * @remarks
   * The SQL script content.
   */
  sqlScript?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      sqlFileId: 'sqlFileId',
      sqlScript: 'sqlScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      sqlFileId: 'string',
      sqlScript: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

