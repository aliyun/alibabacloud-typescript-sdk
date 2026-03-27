// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoriesRequest extends $dara.Model {
  /**
   * @example
   * 952730652285943809
   */
  agentId?: string;
  /**
   * @example
   * 150130323
   */
  appId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @example
   * jr-80ded1d6953c64ea
   */
  runId?: string;
  /**
   * @example
   * test_user_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      page: 'page',
      pageSize: 'pageSize',
      runId: 'runId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      page: 'number',
      pageSize: 'number',
      runId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

