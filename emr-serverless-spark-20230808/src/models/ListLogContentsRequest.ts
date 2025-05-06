// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogContentsRequest extends $dara.Model {
  /**
   * @remarks
   * Full path of the file.
   */
  fileName?: string;
  /**
   * @remarks
   * Length of the log.
   * 
   * @example
   * 9999
   */
  length?: number;
  /**
   * @remarks
   * Start line for query.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'fileName',
      length: 'length',
      offset: 'offset',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      length: 'number',
      offset: 'number',
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

