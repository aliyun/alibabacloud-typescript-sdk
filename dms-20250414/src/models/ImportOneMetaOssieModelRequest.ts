// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOneMetaOssieModelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  catalogUuid?: string;
  databaseUuid?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  document?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: string;
  tag?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      docFormat: 'DocFormat',
      document: 'Document',
      source: 'Source',
      tag: 'Tag',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      databaseUuid: 'string',
      description: 'string',
      docFormat: 'string',
      document: 'string',
      source: 'string',
      tag: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

