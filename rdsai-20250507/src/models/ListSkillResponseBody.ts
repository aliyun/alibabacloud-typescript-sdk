// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of the skill.
   * 
   * @example
   * {"MySQL": "MySQL 优化指南...","PostgreSQL": "PostgreSQL 优化指南..."}
   */
  content?: { [key: string]: any };
  /**
   * @remarks
   * The creation time of the skill.
   * 
   * @example
   * 2026-02-04T21:14:45Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The list of database engines.
   */
  dbtypes?: string[];
  /**
   * @remarks
   * The description of the skill.
   * 
   * @example
   * SQL审查专家：全面审核SQL的安全性、性能与规范性，识别风险并提供优化建议。用户提交SQL或询问“SQL审核”“SQL Review”“有风险吗”“如何优化”时，立即启用。
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the skill.
   * 
   * @example
   * 9a2ba261-7bb2-41a7-9c6e-1799fb5b****
   */
  id?: string;
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * sql-review
   */
  name?: string;
  /**
   * @remarks
   * The type of the skill.
   * 
   * @example
   * system
   */
  skillType?: string;
  /**
   * @remarks
   * The update time of the skill.
   * 
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
  /**
   * @remarks
   * The list of skills.
   */
  data?: ListSkillResponseBodyData[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned records.
   * 
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

