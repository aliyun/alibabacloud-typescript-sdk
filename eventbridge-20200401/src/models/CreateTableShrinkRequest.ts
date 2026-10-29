// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTableShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog.
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
   * [{"Name":"id","Type":"bigint","Comment":"Primary key"}]
   */
  columnsShrink?: string;
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * Test event table
   */
  comment?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_table
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
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
  retentionPolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      clientToken: 'ClientToken',
      columnsShrink: 'Columns',
      comment: 'Comment',
      name: 'Name',
      namespace: 'Namespace',
      retentionPolicyShrink: 'RetentionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      clientToken: 'string',
      columnsShrink: 'string',
      comment: 'string',
      name: 'string',
      namespace: 'string',
      retentionPolicyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

