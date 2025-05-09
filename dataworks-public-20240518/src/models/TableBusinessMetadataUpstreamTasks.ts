// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableBusinessMetadataUpstreamTasks extends $dara.Model {
  /**
   * @example
   * 123456
   */
  id?: number;
  /**
   * @example
   * test_task
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

