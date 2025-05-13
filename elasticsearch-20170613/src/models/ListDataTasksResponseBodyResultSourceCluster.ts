// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataTasksResponseBodyResultSourceCluster extends $dara.Model {
  /**
   * @remarks
   * The type of the source cluster. Default value: elasticsearch.
   * 
   * @example
   * 1
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The index whose data you want to migrate.
   * 
   * @example
   * product_info
   */
  index?: string;
  /**
   * @remarks
   * The Mapping configuration of the cluster.
   * 
   * @example
   * {\\"_doc\\":{\\"properties\\":{\\"user\\":{\\"properties\\":{\\"last\\":{\\"type\\":\\"text\\",...}}}}}}
   */
  mapping?: string;
  /**
   * @remarks
   * The routing field to index the table. It is set to the primary key by default.
   * 
   * @example
   * _id
   */
  routing?: string;
  /**
   * @remarks
   * The Settings of the cluster.
   * 
   * @example
   * {\\n  \\"index\\": {\\n    \\"replication\\": {\\n}.....}}
   */
  settings?: string;
  /**
   * @remarks
   * The type of the destination index.
   * 
   * @example
   * _doc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      index: 'index',
      mapping: 'mapping',
      routing: 'routing',
      settings: 'settings',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      index: 'string',
      mapping: 'string',
      routing: 'string',
      settings: 'string',
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

