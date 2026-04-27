// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExecutorGroupRequest extends $dara.Model {
  /**
   * @example
   * K4KWGINZVY9JwcZT0/vpSg==
   */
  apiKey?: string;
  /**
   * @example
   * APP
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-d6a5243b6fa
   */
  clusterId?: string;
  /**
   * @example
   * group1
   */
  description?: string;
  /**
   * @remarks
   * ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 110176
   */
  id?: string;
  /**
   * @example
   * public
   */
  network?: string;
  /**
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @example
   * openclaw
   */
  workerType?: string;
  /**
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
      id: 'Id',
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
      id: 'string',
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

