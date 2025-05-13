// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataStreamsResponseBodyResultIndices extends $dara.Model {
  /**
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createTime?: string;
  /**
   * @example
   * Green
   */
  health?: string;
  /**
   * @example
   * false
   */
  isManaged?: boolean;
  /**
   * @example
   * following
   */
  managedStatus?: string;
  /**
   * @example
   * Log1
   */
  name?: string;
  /**
   * @example
   * 15393899
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      health: 'health',
      isManaged: 'isManaged',
      managedStatus: 'managedStatus',
      name: 'name',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      health: 'string',
      isManaged: 'boolean',
      managedStatus: 'string',
      name: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

