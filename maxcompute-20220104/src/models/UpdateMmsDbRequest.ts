// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsDbRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  dstName?: string;
  /**
   * @example
   * dst_project_name
   */
  dstProjectName?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dstName: 'dstName',
      dstProjectName: 'dstProjectName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstName: 'string',
      dstProjectName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

