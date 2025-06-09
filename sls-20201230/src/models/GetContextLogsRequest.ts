// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContextLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of logs that you want to obtain and are generated before the generation time of the start log. Valid values: `(0,100]`.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  backLines?: number;
  /**
   * @remarks
   * The number of logs that you want to obtain and are generated after the generation time of the start log. Valid values: `(0,100]`.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  forwardLines?: number;
  /**
   * @remarks
   * The unique identifier of the log group to which the start log belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 85C897C740352DC6-808
   */
  packId?: string;
  /**
   * @remarks
   * The unique context identifier of the start log in the log group.
   * 
   * This parameter is required.
   * 
   * @example
   * 2|MTY1NTcwNTUzODY5MTY0MDk1Mg==|3|0
   */
  packMeta?: string;
  static names(): { [key: string]: string } {
    return {
      backLines: 'back_lines',
      forwardLines: 'forward_lines',
      packId: 'pack_id',
      packMeta: 'pack_meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backLines: 'number',
      forwardLines: 'number',
      packId: 'string',
      packMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

