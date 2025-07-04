// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyResultDataSourceDetailsConfig extends $dara.Model {
  accessKey?: string;
  bucket?: string;
  catalog?: string;
  database?: string;
  endpoint?: string;
  namespace?: string;
  ossPath?: string;
  partition?: string;
  path?: string;
  project?: string;
  table?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'accessKey',
      bucket: 'bucket',
      catalog: 'catalog',
      database: 'database',
      endpoint: 'endpoint',
      namespace: 'namespace',
      ossPath: 'ossPath',
      partition: 'partition',
      path: 'path',
      project: 'project',
      table: 'table',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      bucket: 'string',
      catalog: 'string',
      database: 'string',
      endpoint: 'string',
      namespace: 'string',
      ossPath: 'string',
      partition: 'string',
      path: 'string',
      project: 'string',
      table: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

