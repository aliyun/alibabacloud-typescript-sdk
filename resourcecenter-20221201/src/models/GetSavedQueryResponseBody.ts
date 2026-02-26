// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSavedQueryResponseBodySavedQuery extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-30T01:43:16Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * 查询我的所有资源，返回所有的列。
   */
  description?: string;
  /**
   * @remarks
   * The expression of the template.
   * 
   * @example
   * SELECT * FROM resources;
   */
  expression?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * 查询我的所有资源。
   */
  name?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * cq-GeAck****
   */
  queryId?: string;
  /**
   * @remarks
   * The time when the template was last updated. The time is displayed in UTC.
   * 
   * @example
   * 2023-10-30T01:43:16Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
      queryId: 'QueryId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      expression: 'string',
      name: 'string',
      queryId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavedQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6D98D9B0-318D-56A4-910C-93B5F945AF2B
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the template.
   */
  savedQuery?: GetSavedQueryResponseBodySavedQuery;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      savedQuery: 'SavedQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      savedQuery: GetSavedQueryResponseBodySavedQuery,
    };
  }

  validate() {
    if(this.savedQuery && typeof (this.savedQuery as any).validate === 'function') {
      (this.savedQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

