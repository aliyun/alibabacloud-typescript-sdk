// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectModifyRecordsResponseBodyDataOmsProjectMappingInfoSchemaMappings extends $dara.Model {
  /**
   * @example
   * mapped_schema
   */
  destName?: string;
  /**
   * @example
   * source_name
   */
  sourceName?: string;
  static names(): { [key: string]: string } {
    return {
      destName: 'DestName',
      sourceName: 'SourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destName: 'string',
      sourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

