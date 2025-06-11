// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoTableMappings extends $dara.Model {
  /**
   * @example
   * dest_name
   */
  destName?: string;
  /**
   * @example
   * source_name
   */
  sourceName?: string;
  /**
   * @example
   * source_schema
   */
  sourceSchema?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      sourceName: 'SourceName',
      sourceSchema: 'SourceSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      sourceName: 'string',
      sourceSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

