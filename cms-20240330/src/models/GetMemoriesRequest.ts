// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * Agent ID of the application
   * 
   * @example
   * 952730652285943809
   */
  agentId?: string;
  /**
   * @remarks
   * Application ID
   * 
   * @example
   * 150130323
   */
  appId?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * Run ID
   * 
   * @example
   * jr-80ded1d6953c64ea
   */
  runId?: string;
  /**
   * @remarks
   * User ID
   * 
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

