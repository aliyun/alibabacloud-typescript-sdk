// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackagesResponseBodyDataDeployments extends $dara.Model {
  /**
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @example
   * 2003****
   */
  creator?: string;
  /**
   * @example
   * OK
   */
  errorMessage?: string;
  /**
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @example
   * 11111
   */
  id?: number;
  /**
   * @example
   * auto_created
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      executor: 'Executor',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      executor: 'string',
      id: 'number',
      name: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

