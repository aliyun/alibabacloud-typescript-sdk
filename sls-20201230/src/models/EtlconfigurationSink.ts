// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ETLConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to grant the permissions to write data to the destination Logstore.
   * 
   * @deprecated
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret that is used to grant the permissions to write data to the destination Logstore.
   * 
   * @deprecated
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The result data to write.
   */
  datasets?: string[];
  /**
   * @remarks
   * The Simple Log Service endpoint for the region where the destination project resides.
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the destination Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the storage destination.
   * 
   * This parameter is required.
   * 
   * @example
   * test-etljob
   */
  name?: string;
  /**
   * @remarks
   * The name of the destination project.
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  project?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role that is used to grant the permissions to write data to the destination Logstore.
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

