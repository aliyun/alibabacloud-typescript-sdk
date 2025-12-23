// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FirstRank extends $dara.Model {
  active?: boolean;
  description?: string;
  meta?: any;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      description: 'description',
      meta: 'meta',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      description: 'string',
      meta: 'any',
      name: 'string',
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

