// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSourceMapInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The order in which the files are sorted. Valid values:
   * 
   * *   true: ascending order
   * *   false: descending order
   * 
   * @example
   * true
   */
  ascendingSequence?: boolean;
  /**
   * @remarks
   * The version of the SourceMap file.
   * 
   * @example
   * 0.0.0
   */
  edition?: string;
  /**
   * @remarks
   * The ID of the SourceMap file.
   * 
   * This parameter is required.
   */
  ID?: string;
  /**
   * @remarks
   * The keyword in the file name. The files are searched by keyword.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The criterion by which the files are sorted. Valid values:
   * 
   * *   version: The files are sorted by version.
   * *   uploadTime: The files are sorted by upload time.
   * 
   * @example
   * version
   */
  orderField?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ascendingSequence: 'AscendingSequence',
      edition: 'Edition',
      ID: 'ID',
      keyword: 'Keyword',
      orderField: 'OrderField',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascendingSequence: 'boolean',
      edition: 'string',
      ID: 'string',
      keyword: 'string',
      orderField: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

