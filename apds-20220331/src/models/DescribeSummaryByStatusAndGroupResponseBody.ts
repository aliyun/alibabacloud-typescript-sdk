// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSummaryByStatusAndGroupResponseBody extends $dara.Model {
  code?: string;
  data?: any;
  error?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      error: 'Error',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      error: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

