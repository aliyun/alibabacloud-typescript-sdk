// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSurveyJobCountResponseBody extends $dara.Model {
  code?: string;
  data?: any;
  success?: boolean;
  error?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      success: 'Success',
      error: 'error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      success: 'boolean',
      error: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

