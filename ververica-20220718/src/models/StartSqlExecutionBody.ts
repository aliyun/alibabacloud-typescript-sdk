// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSqlExecutionBody extends $dara.Model {
  /**
   * @remarks
   * The execution description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the associated query script. This is a required parameter. It provides the execution environment configuration (Session Cluster, Flink configuration, etc.) and also serves as the parentResourceId for deduplication.
   */
  sqlFileId?: string;
  /**
   * @remarks
   * The SQL script content to execute.
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

