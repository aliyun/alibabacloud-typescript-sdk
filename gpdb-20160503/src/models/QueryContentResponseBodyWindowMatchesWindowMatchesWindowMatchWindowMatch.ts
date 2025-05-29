// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentResponseBodyWindowMatchesWindowMatchesWindowMatchWindowMatch extends $dara.Model {
  /**
   * @remarks
   * Text content.
   * 
   * @example
   * AnalyticDB for PostgreSQL is a cloud-native data warehouse service that provides large-scale parallel processing (MPP) capabilities for massive online data analysis.
   */
  content?: string;
  /**
   * @remarks
   * File name.
   * 
   * @example
   * my_doc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * Unique ID of the vector data.
   * 
   * @example
   * doca-2345
   */
  id?: string;
  /**
   * @remarks
   * Metadata information when the document loader was loaded.
   * 
   * @example
   * {"page_pos": 2}
   */
  loaderMetadata?: string;
  /**
   * @remarks
   * Metadata map.
   */
  metadata?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileName: 'FileName',
      id: 'Id',
      loaderMetadata: 'LoaderMetadata',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
      id: 'string',
      loaderMetadata: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

