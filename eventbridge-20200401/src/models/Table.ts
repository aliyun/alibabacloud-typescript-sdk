// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableColumns extends $dara.Model {
  comment?: string;
  name?: string;
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

export class TableRetentionPolicy extends $dara.Model {
  coldTTL?: number;
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

export class Table extends $dara.Model {
  catalog?: string;
  columns?: TableColumns[];
  comment?: string;
  createTime?: number;
  name?: string;
  namespace?: string;
  retentionPolicy?: TableRetentionPolicy;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      columns: 'Columns',
      comment: 'Comment',
      createTime: 'CreateTime',
      name: 'Name',
      namespace: 'Namespace',
      retentionPolicy: 'RetentionPolicy',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      columns: { 'type': 'array', 'itemType': TableColumns },
      comment: 'string',
      createTime: 'number',
      name: 'string',
      namespace: 'string',
      retentionPolicy: TableRetentionPolicy,
      updateTime: 'number',
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

