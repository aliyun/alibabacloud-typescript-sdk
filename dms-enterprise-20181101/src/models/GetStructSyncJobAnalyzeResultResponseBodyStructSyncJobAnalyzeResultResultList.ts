// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList extends $dara.Model {
  /**
   * @remarks
   * The SQL script.
   */
  script?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * helloz_bak
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * @example
   * helloz_bak
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

