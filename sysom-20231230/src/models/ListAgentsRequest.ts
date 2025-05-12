// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  current?: number;
  name?: string;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      name: 'name',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      name: 'string',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

