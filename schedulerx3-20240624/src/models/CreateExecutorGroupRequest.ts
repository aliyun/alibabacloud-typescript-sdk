// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExecutorGroupRequest extends $dara.Model {
  /**
   * @example
   * HfGUG/Qf8qRCCWlv5RT6WA==
   */
  apiKey?: string;
  /**
   * @example
   * api_key
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * group1
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @example
   * public
   */
  network?: string;
  /**
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * openclaw
   */
  workerType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"address":"http://47.111.188.191:18789"}]
   */
  workers?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      authType: 'AuthType',
      clusterId: 'ClusterId',
      description: 'Description',
      name: 'Name',
      network: 'Network',
      protocol: 'Protocol',
      workerType: 'WorkerType',
      workers: 'Workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      authType: 'string',
      clusterId: 'string',
      description: 'string',
      name: 'string',
      network: 'string',
      protocol: 'string',
      workerType: 'string',
      workers: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

