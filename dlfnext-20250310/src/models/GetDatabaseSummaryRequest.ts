// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseSummaryRequest extends $dara.Model {
  date?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

