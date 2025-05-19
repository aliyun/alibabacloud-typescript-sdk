// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogColumnTranslateResultRequest extends $dara.Model {
  columnValue?: string;
  translateConfig?: string;
  static names(): { [key: string]: string } {
    return {
      columnValue: 'ColumnValue',
      translateConfig: 'TranslateConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnValue: 'string',
      translateConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

