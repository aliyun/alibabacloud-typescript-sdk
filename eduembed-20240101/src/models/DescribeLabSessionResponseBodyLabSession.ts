// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLabSessionResponseBodyLabSession extends $dara.Model {
  /**
   * @example
   * 2023-05-05 15:01:59
   */
  createTime?: string;
  /**
   * @example
   * False
   */
  finished?: boolean;
  /**
   * @example
   * 838
   */
  id?: string;
  /**
   * @example
   * 875
   */
  labId?: number;
  /**
   * @example
   * -
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finished: 'Finished',
      id: 'Id',
      labId: 'LabId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finished: 'boolean',
      id: 'string',
      labId: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

