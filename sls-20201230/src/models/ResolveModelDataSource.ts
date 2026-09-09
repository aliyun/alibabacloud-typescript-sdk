// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResolveModelDataSource extends $dara.Model {
  /**
   * @remarks
   * The Logstore name.
   * 
   * This parameter is required.
   * 
   * @example
   * managed-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * managed-project
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

