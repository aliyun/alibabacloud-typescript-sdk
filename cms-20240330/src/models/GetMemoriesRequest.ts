// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID of the application.
   * 
   * @example
   * 952730652285943809
   */
  agentId?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 150130323
   */
  appId?: string;
  /**
   * @remarks
   * The filter conditions.
   * 
   * @example
   * {"__strategy_type__":"Fact"}
   */
  filters?: { [key: string]: any };
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 1000
   */
  pageSize?: number;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * jr-80ded1d6953c64ea
   */
  runId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test_user_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      filters: 'filters',
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
      filters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      page: 'number',
      pageSize: 'number',
      runId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.filters) {
      $dara.Model.validateMap(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

