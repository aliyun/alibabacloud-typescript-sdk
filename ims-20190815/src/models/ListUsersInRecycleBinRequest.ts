// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersInRecycleBinRequest extends $dara.Model {
  filter?: string;
  marker?: string;
  maxItems?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      marker: 'Marker',
      maxItems: 'MaxItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      marker: 'string',
      maxItems: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

