// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SqlStatement } from "./SqlStatement";


export class SqlExecution extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable batch mode.
   */
  batchMode?: boolean;
  /**
   * @remarks
   * The description of the SQL execution.
   */
  description?: string;
  /**
   * @remarks
   * The message returned for the SQL execution.
   */
  message?: string;
  /**
   * @remarks
   * The name of the SQL execution.
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the session cluster.
   */
  sessionClusterName?: string;
  /**
   * @remarks
   * The SQL execution ID.
   */
  sqlExecutionId?: string;
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
  /**
   * @remarks
   * The state of the SQL execution.
   */
  state?: string;
  statements?: SqlStatement[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      batchMode: 'batchMode',
      description: 'description',
      message: 'message',
      name: 'name',
      namespace: 'namespace',
      sessionClusterName: 'sessionClusterName',
      sqlExecutionId: 'sqlExecutionId',
      sqlFileId: 'sqlFileId',
      sqlScript: 'sqlScript',
      state: 'state',
      statements: 'statements',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchMode: 'boolean',
      description: 'string',
      message: 'string',
      name: 'string',
      namespace: 'string',
      sessionClusterName: 'string',
      sqlExecutionId: 'string',
      sqlFileId: 'string',
      sqlScript: 'string',
      state: 'string',
      statements: { 'type': 'array', 'itemType': SqlStatement },
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statements)) {
      $dara.Model.validateArray(this.statements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

