// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProcessDefinitionsResponseBodyPagingInfoProcessDefinitions extends $dara.Model {
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 10354346
   */
  id?: string;
  /**
   * @example
   * false
   */
  isSystem?: boolean;
  name?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  scopes?: string[];
  /**
   * @example
   * Table
   */
  subType?: string;
  /**
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      isSystem: 'IsSystem',
      name: 'Name',
      priority: 'Priority',
      scopes: 'Scopes',
      subType: 'SubType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      isSystem: 'boolean',
      name: 'string',
      priority: 'string',
      scopes: { 'type': 'array', 'itemType': 'string' },
      subType: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProcessDefinitionsResponseBodyPagingInfo extends $dara.Model {
  processDefinitions?: ListProcessDefinitionsResponseBodyPagingInfoProcessDefinitions[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      processDefinitions: 'ProcessDefinitions',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processDefinitions: { 'type': 'array', 'itemType': ListProcessDefinitionsResponseBodyPagingInfoProcessDefinitions },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processDefinitions)) {
      $dara.Model.validateArray(this.processDefinitions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProcessDefinitionsResponseBody extends $dara.Model {
  pagingInfo?: ListProcessDefinitionsResponseBodyPagingInfo;
  /**
   * @example
   * 0bc5df3a17***903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListProcessDefinitionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

