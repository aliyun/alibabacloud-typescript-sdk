// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataLabels extends $dara.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * admin
   */
  creator?: string;
  /**
   * @example
   * l_dfe****
   */
  id?: string;
  /**
   * @example
   * label_name
   */
  name?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      creator: 'Creator',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      creator: 'string',
      id: 'string',
      name: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

