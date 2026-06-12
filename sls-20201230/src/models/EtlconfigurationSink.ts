// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ETLConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used to write to the destination Logstore.
   * 
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey Secret used to write to the destination Logstore.
   * 
   * @deprecated
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The datasets to write to the sink.
   */
  datasets?: string[];
  /**
   * @remarks
   * The endpoint of the destination Project\\"s region.
   */
  endpoint?: string;
  /**
   * @remarks
   * The destination Logstore name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The sink name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-etljob
   */
  name?: string;
  /**
   * @remarks
   * The destination Project name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The role ARN used to write to the destination Logstore.
   * 
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

