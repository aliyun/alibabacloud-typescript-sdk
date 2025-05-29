// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertChunksRequestTextChunks extends $dara.Model {
  /**
   * @remarks
   * Document content.
   * 
   * This parameter is required.
   * 
   * @example
   * Cloud-native data warehouse AnalyticDB PostgreSQL Edition provides a simple, fast, and cost-effective PB-level cloud data warehouse solution.
   */
  content?: string;
  filter?: string;
  id?: string;
  /**
   * @remarks
   * Metadata.
   * 
   * @example
   * {"title":"test"}
   */
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      filter: 'Filter',
      id: 'Id',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      filter: 'string',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

