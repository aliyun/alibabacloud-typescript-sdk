// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterializedViewsRequest extends $dara.Model {
  name?: string;
  offset?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      offset: 'number',
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

