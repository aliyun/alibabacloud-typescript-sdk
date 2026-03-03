// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Conversation extends $dara.Model {
  createdAt?: number;
  id?: string;
  title?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      id: 'Id',
      title: 'Title',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      id: 'string',
      title: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

