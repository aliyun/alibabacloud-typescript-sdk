// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataIngestionStatistic extends $dara.Model {
  skipFiles?: number;
  submitFailure?: number;
  submitSuccess?: number;
  static names(): { [key: string]: string } {
    return {
      skipFiles: 'SkipFiles',
      submitFailure: 'SubmitFailure',
      submitSuccess: 'SubmitSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipFiles: 'number',
      submitFailure: 'number',
      submitSuccess: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

