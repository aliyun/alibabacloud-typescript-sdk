// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableRequestColumns extends $dara.Model {
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * Isp
   */
  comment?: string;
  /**
   * @remarks
   * The name of the connector.
   * 
   * @example
   * kafka-default-agent-alikafka_pre-cn-28t3sfzno003
   */
  name?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * ehpc_cluster
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequestRetentionPolicy extends $dara.Model {
  /**
   * @remarks
   * The cold storage retention time.
   * 
   * @example
   * 30
   */
  coldTTL?: number;
  /**
   * @remarks
   * The hot storage retention time.
   * 
   * @example
   * 30
   */
  hotTTL?: number;
  static names(): { [key: string]: string } {
    return {
      coldTTL: 'ColdTTL',
      hotTTL: 'HotTTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldTTL: 'number',
      hotTTL: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTableRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the table belongs.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 1e9b8f60-3a2c-4d7e-9f1b-8c3d5e7a2b4f
   */
  clientToken?: string;
  /**
   * @remarks
   * The column definitions.
   * 
   * @example
   * [{"Name":"id","Type":"bigint","Comment":"主键"}]
   */
  columns?: CreateTableRequestColumns[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 测试事件表
   */
  comment?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * my_table
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the table belongs.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The data retention policy.
   * 
   * @example
   * {"HotTTL":7,"ColdTTL":30}
   */
  retentionPolicy?: CreateTableRequestRetentionPolicy;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      clientToken: 'ClientToken',
      columns: 'Columns',
      comment: 'Comment',
      name: 'Name',
      namespace: 'Namespace',
      retentionPolicy: 'RetentionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      clientToken: 'string',
      columns: { 'type': 'array', 'itemType': CreateTableRequestColumns },
      comment: 'string',
      name: 'string',
      namespace: 'string',
      retentionPolicy: CreateTableRequestRetentionPolicy,
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.retentionPolicy && typeof (this.retentionPolicy as any).validate === 'function') {
      (this.retentionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

