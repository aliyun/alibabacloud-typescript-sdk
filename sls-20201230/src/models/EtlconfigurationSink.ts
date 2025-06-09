// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ETLConfigurationSink extends $dara.Model {
  /**
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @deprecated
   */
  accessKeySecret?: string;
  datasets?: string[];
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-etljob
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::13234:role/logtarget
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      datasets: 'datasets',
      endpoint: 'endpoint',
      logstore: 'logstore',
      name: 'name',
      project: 'project',
      roleArn: 'roleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      datasets: { 'type': 'array', 'itemType': 'string' },
      endpoint: 'string',
      logstore: 'string',
      name: 'string',
      project: 'string',
      roleArn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

