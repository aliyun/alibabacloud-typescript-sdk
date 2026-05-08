// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextStoresResponseBodyResults extends $dara.Model {
  /**
   * @example
   * test-context-store
   */
  contextStoreName?: string;
  /**
   * @example
   * memory
   */
  contextType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 173847364841938
   */
  createTime?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 173847364841938
   */
  updateTime?: string;
  /**
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contextStoreName: 'contextStoreName',
      contextType: 'contextType',
      createTime: 'createTime',
      description: 'description',
      regionId: 'regionId',
      status: 'status',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextStoreName: 'string',
      contextType: 'string',
      createTime: 'string',
      description: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContextStoresResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 2-ba4d-4b9f-aa24-dcb067a30f1c
   */
  nextToken?: string;
  /**
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  results?: ListContextStoresResponseBodyResults[];
  /**
   * @example
   * 56
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ListContextStoresResponseBodyResults },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

