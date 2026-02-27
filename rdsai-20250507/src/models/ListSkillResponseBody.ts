// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillResponseBodyData extends $dara.Model {
  content?: { [key: string]: any };
  /**
   * @example
   * 2026-02-04T21:14:45Z
   */
  createdAt?: string;
  dbtypes?: string[];
  description?: string;
  /**
   * @example
   * 9a2ba261-7bb2-41a7-9c6e-1799fb5b****
   */
  id?: string;
  /**
   * @example
   * sql-review
   */
  name?: string;
  /**
   * @example
   * system
   */
  skillType?: string;
  /**
   * @example
   * 2026-02-04T21:14:45Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdAt: 'CreatedAt',
      dbtypes: 'Dbtypes',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      skillType: 'SkillType',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      dbtypes: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      name: 'string',
      skillType: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.content) {
      $dara.Model.validateMap(this.content);
    }
    if(Array.isArray(this.dbtypes)) {
      $dara.Model.validateArray(this.dbtypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillResponseBody extends $dara.Model {
  data?: ListSkillResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSkillResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

