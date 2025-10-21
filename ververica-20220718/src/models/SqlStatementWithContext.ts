// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlStatementWithContext extends $dara.Model {
  additionalDependencies?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  batchMode?: boolean;
  flinkConfiguration?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  statement?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      batchMode: 'batchMode',
      flinkConfiguration: 'flinkConfiguration',
      statement: 'statement',
      versionName: 'versionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      batchMode: 'boolean',
      flinkConfiguration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      statement: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    if(this.flinkConfiguration) {
      $dara.Model.validateMap(this.flinkConfiguration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

