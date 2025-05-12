// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentTaskResponseBodyDataJobs extends $dara.Model {
  error?: string;
  instance?: string;
  params?: any;
  region?: string;
  result?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      instance: 'instance',
      params: 'params',
      region: 'region',
      result: 'result',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instance: 'string',
      params: 'any',
      region: 'string',
      result: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

